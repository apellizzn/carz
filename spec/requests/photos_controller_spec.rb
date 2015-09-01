require 'rails_helper'

describe PhotosController do

  describe 'GET cars/:car_id/photos' do
    let(:car) { FactoryGirl.create :car }

    it "returns http success" do
      get "cars/#{car.id}/photos"
      expect(response).to have_http_status(:success)
    end

    context 'with car_id filter' do
      let(:other_car) { FactoryGirl.create :car }
      before {
        FactoryGirl.create :photo, car: car
        FactoryGirl.create :photo, car: other_car
        get "cars/#{car.id}/photos"
      }

      it 'returns only the right photos' do
        expect(content.count).to eq 1
      end
    end
  end

  describe 'POST /cars/:car_id/photos' do
    let(:car) { FactoryGirl.create :car }

    [:image].each do |field|
      context "without #{field}" do
        before { post "cars/#{car.id}/photos", photo_params_without(field) }

        it { expect(response).to have_http_status(:unprocessable_entity) }

        it "returns the error #{field} can't be blank" do
          should_have_key field, ["can't be blank"]
        end
      end
    end

    context 'with the right params' do
      before { post "cars/#{car.id}/photos", photo_params }

      it { expect(response).to have_http_status(:created) }

      it 'creates a new Photo' do
        expect(Photo.count).to be 1
      end
    end
  end
end
