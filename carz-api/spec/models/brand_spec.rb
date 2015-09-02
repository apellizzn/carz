require 'rails_helper'

describe Brand do
  subject(:brand) { FactoryGirl.build :brand, name: name }

  let(:name) { 'SEAT' }

  it { should be_valid }

  context 'withouth name' do
    let(:name) { nil }
    it { should be_invalid }
  end
end
