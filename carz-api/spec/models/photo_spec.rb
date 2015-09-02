require 'rails_helper'

describe Photo do
  subject(:photo) { FactoryGirl.build :photo, image: image, car: car }

  let(:image) { File.new(Rails.root + 'spec/fixtures/images/small_car.jpg') }
  let(:car)   { FactoryGirl.create :car }

  it { should be_valid }

  [:image, :car].each do |field|
    context "without #{field}" do
      let(field) { nil }

      it { should be_invalid }
    end
  end
end
