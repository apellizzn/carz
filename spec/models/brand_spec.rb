require 'rails_helper'

describe Brand do
  subject(:brand) { FactoryGirl.build :brand, name: name }

  let(:name) { 'Seat' }

  it { expect(brand).to be_valid }

  context 'withouth name' do
    let(:name) { nil }
    it { expect(brand).to be_invalid }
  end
end
