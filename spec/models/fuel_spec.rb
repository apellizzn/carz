require 'rails_helper'

describe Fuel do
  subject(:fuel) { FactoryGirl.build :fuel, name: name, car: car }

  let(:name) { 'G' }
  let(:car)  { FactoryGirl.create :car }

  it { expect(fuel).to be_valid }

  context 'withouth name' do
    let(:name) { nil }
    it { expect(fuel).to be_invalid }
  end
end
