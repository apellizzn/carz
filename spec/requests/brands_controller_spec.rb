require 'rails_helper'

describe BrandsController do

  describe 'GET /brands' do

    it "returns http success" do
      get '/brands'
      expect(response).to have_http_status(:success)
    end
  end

  describe 'POST /brands' do

    context 'without name' do
      before { post '/brands', name: nil }

      it { expect(response).to have_http_status(:unprocessable_entity) }

      it "returns the error can't be blank" do
        should_have_key :name, ["can't be blank"]
      end
    end

    context 'with a duplicate name' do
      let!(:existing_brand) { FactoryGirl.create :brand, name: 'Existing' }
      before { post '/brands', name: 'Existing' }

      it { expect(response).to have_http_status(:unprocessable_entity) }

      it 'returns the error has already been taken' do
        should_have_key :name, ['has already been taken']
      end
    end

    context 'with the right params' do
      before { post '/brands', name: 'New' }

      it { expect(response).to have_http_status(:created) }
    end
  end
end
