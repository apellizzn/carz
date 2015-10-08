require 'rails_helper'

describe CarsController do

  describe 'POST /cars' do
    [:km, :year, :name, :power, :color, :brand_id, :fuel_id].each do |field|
      context "without #{field}" do
        before { post '/cars', car_params_without(field) }

        it { expect(response).to have_http_status(:unprocessable_entity) }

        it "returns the error #{field} can't be blank" do
          should_have_key field, ["can't be blank"]
        end
      end
    end

    context 'with the right params' do
      before { post '/cars', car_params }

      it { expect(response).to have_http_status(:created) }

      it 'creates a new Car' do
        expect(Car.count).to be 1
      end
    end
  end

  describe 'GET /cars/:id' do
    let(:car) { FactoryGirl.create :car }

    context 'when existing' do
      before { get "/cars/#{car.id}" }

      it 'returns http success' do
        expect(response).to have_http_status(:success)
      end

      it 'returns the car' do
        expect(content).to eq(car.as_json)
      end
    end

    context 'when not existing' do
      it 'returns not found' do
        get 'cars/unexisting'
        expect(response).to have_http_status(:not_found)
      end
    end
  end

  describe 'GET /cars' do

    it "returns http success" do
      get '/cars'
      expect(response).to have_http_status(:success)
    end

    it "returns brand and fuel info" do
      car = FactoryGirl.create :car
      get '/cars'
      expect(content.first["brand"]).to eq({ "name" => car.brand.name })
      expect(content.first["fuel"]).to eq({ "name" => car.fuel.name })
    end

    context 'with many cars' do
      before {
         3.times { FactoryGirl.create :car }
         get '/cars'
      }

      it 'apply pagination' do
        expect(content.count).to eq 2
      end
    end

    [:km, :price, :power, :year].each do |field|
      context "with #{field} range filter" do
        before {
          [10_000, 40_000, 70_000].each { |n| FactoryGirl.create :car, field => n }
        }

        context 'with lower filter' do
          it 'returns the right cars' do
            get '/cars', { "min_#{field}" => 70_000 }
            expect(content.count).to eq 1
          end
        end

        context 'with upper filter' do
          it 'returns the right cars' do
            get '/cars', { "max_#{field}" => 30_000 }
            expect(content.count).to eq 1
          end
        end

        context 'with both limits' do
          it 'returns the right cars' do
            get '/cars', { "min_#{field}" => 30_000 , "max_#{field}" => 50_000 }
            expect(content.count).to eq 1
          end
        end
      end
    end
  end

  describe 'GET #colors' do
    before do
      2.times { FactoryGirl.create :car, color: 'Red' }
      FactoryGirl.create :car, color: 'Black'
    end

    it 'returns each color only 1 time' do
      get '/cars/colors'
      expect(content).to eq ['Black', 'Red']
    end
  end
end
