require 'rails_helper'

describe Fuel do
  subject(:fuel) { FactoryGirl.build :fuel, name: name }

  let(:name) { 'G' }

  it { should be_valid }

  context 'withouth name' do
    let(:name) { nil }
    it { should be_invalid }
  end
end
