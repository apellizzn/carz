require 'rails_helper'

describe Car do
  subject(:car) { FactoryGirl.build :car,
    name: name, color: color, km: km, power: power,
    latitude: latitude, longitude: longitude,
    year: year, brand: brand, price: price, fuel: fuel

  }

  let(:fuel)      { FactoryGirl.create :fuel }
  let(:brand)     { FactoryGirl.create :brand, name: 'Ferrari' }
  let(:name)      { 'Car name' }
  let(:color)     { 'Red' }
  let(:km)        { 70_000 }
  let(:power)     { 89 }
  let(:year)      { 2009 }
  let(:latitude)  { 49.12300 }
  let(:longitude) { 23.88913 }
  let(:price)     { nil }

  it { should be_valid }

  [:name, :color, :km, :power, :year, :latitude, :longitude, :brand, :fuel].each do |field|
    context "withouth #{field}" do
      let(field) { nil }
      it { should be_invalid }
    end
  end

  describe 'brand filter' do
    let(:brand) { FactoryGirl.create :brand, name: 'SEAT'}
    let(:other_brand) { FactoryGirl.create :brand, name: 'Audi' }
    let!(:other_car) { FactoryGirl.create :car, brand: other_brand }
    before { subject.save! }

    context 'with brand nil' do
      it 'returns all the cars' do
        expect(Car.produced_by(nil).count).to be 2
      end
    end

    context 'with brand' do
      it 'returns the right cars' do
        expect(Car.produced_by([other_brand.id]).count).to be 1
      end
    end
  end

  describe 'colors filter' do
    let!(:other_car) { FactoryGirl.create :car, color: 'Black'}
    before { subject.save! }

    context 'with color nil' do
      it 'returns all the cars' do
        expect(Car.of_colors(nil).count).to eq 2
      end
    end

    context 'with color' do
      it 'returns the right cars' do
        expect(Car.of_colors(['Black']).count).to eq 1
      end
    end
  end

  describe '#available_colors' do
    let!(:other_car) { FactoryGirl.create :car, color: 'Black' }
    let!(:red_car)   { FactoryGirl.create :car, color: 'Red'   }

    it 'returns each color 1 time' do
      expect(Car.available_colors).to eq ['Black','Red']
    end
  end
  
  [:price, :km, :power, :year].each do |field|
    describe "#{field} range filter" do
      let!(:other_car) { FactoryGirl.create :car,  field => 14 }
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
