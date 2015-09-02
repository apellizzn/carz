FactoryGirl.define do
  factory :photo do
    association :car
    image File.new(Rails.root + 'spec/fixtures/images/small_car.jpg')
  end
end
