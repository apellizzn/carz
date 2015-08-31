require 'rails_helper'

describe CarsController do

  describe 'POST /cars' do
    let!(:brand) { FactoryGirl.create :brand }
    [:km, :year, :name, :power, :color].each do |field|
      context "without #{field}" do
        before { post '/cars', car_params_without(field).merge({ brand_id: brand.id }) }

        it { expect(response).to have_http_status(:unprocessable_entity) }

        it "returns the error #{field} can't be blank" do
          should_have_key field, ["can't be blank"]
        end
      end
    end

    context 'without brand_id' do
      before { post '/cars', car_params }

      it { expect(response).to have_http_status(:unprocessable_entity) }

      it "returns the error brand_id can't be blank" do
        should_have_key :brand_id, ["can't be blank"]
      end
    end
  end

  describe "GET #index" do

    it "returns http success" do
      get '/cars'
      expect(response).to have_http_status(:success)
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
end
