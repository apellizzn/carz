require 'rails_helper'

describe CarsController do

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
