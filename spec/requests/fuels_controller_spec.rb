require 'rails_helper'

describe FuelsController do

  describe 'GET /fuels' do

    it "returns http success" do
      get '/fuels'
      expect(response).to have_http_status(:success)
    end
  end

  describe 'POST /fuels' do

    context 'without name' do
      before { post '/fuels', name: nil }

      it { expect(response).to have_http_status(:unprocessable_entity) }

      it "returns the error can't be blank" do
        should_have_key :name, ["can't be blank"]
      end
    end

    context 'with the right params' do
      before { post '/fuels', name: 'New' }

      it { expect(response).to have_http_status(:created) }

      it 'creates a new Car' do
        expect(Fuel.count).to be 1
      end
    end
  end
end
