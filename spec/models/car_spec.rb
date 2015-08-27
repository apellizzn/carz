require 'rails_helper'

describe Car do
  subject(:car) { FactoryGirl.build :car,
    name: name, color: color, km: km, power: power,
    latitude: latitude, longitude: longitude,
    year: year, brand: brand
  }

  let(:brand)     { FactoryGirl.create :brand }
  let(:name)      { 'Car name' }
  let(:color)     { 'Red' }
  let(:km)        { 70_000 }
  let(:power)     { 89 }
  let(:year)      { 2009 }
  let(:latitude)  { 49.12300 }
  let(:longitude) { 23.88913 }

  it { expect(car).to be_valid }

  [:name, :color, :km, :power, :year, :latitude, :longitude].each do |field|
    context "withouth #{field}" do
      let(field) { nil }
      it { expect(car).to be_invalid }
    end
  end
end
