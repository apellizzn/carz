require 'rails_helper'

describe Car do
  subject(:car) { FactoryGirl.build :car,
    name: name, color: color, km: km, power: power,
    latitude: latitude, longitude: longitude,
    year: year, brand: brand, price: price
  }

  let(:brand)     { FactoryGirl.create :brand }
  let(:name)      { 'Car name' }
  let(:color)     { 'Red' }
  let(:km)        { 70_000 }
  let(:power)     { 89 }
  let(:year)      { 2009 }
  let(:latitude)  { 49.12300 }
  let(:longitude) { 23.88913 }
  let(:price)     { nil }
  it { expect(car).to be_valid }

  [:name, :color, :km, :power, :year, :latitude, :longitude].each do |field|
    context "withouth #{field}" do
      let(field) { nil }
      it { expect(car).to be_invalid }
    end
  end

  [:price, :km, :power, :year].each do |field|
    describe "#{field} range filter" do
      let!(:other_car) { FactoryGirl.create :car, field => 14 }
      let(field)      { 5.0 }
      before { subject.save! }

      context "from #{field}" do

        context "with nil #{field}" do

          it 'returns all the cars' do
            expect(Car.send("from_#{field}", nil).count).to eq 2
          end
        end

        context "with #{field}" do

          it 'returns the right cars' do
            expect(Car.send("from_#{field}", 10.0).count).to eq 1
          end
        end
      end

      context "to #{field}" do

        context "with nil #{field}" do

          it 'returns all the cars' do
            expect(Car.send("to_#{field}", nil).count).to eq 2
          end
        end

        context "with #{field}" do

          it 'returns the right cars' do
            expect(Car.send("to_#{field}", 10.0).count).to eq 1
          end
        end
      end
    end
  end
end
