FactoryGirl.define do
  factory :car do
    color "MyString"
    price 1.5
    km 1
    year 1
    power 1.5
    latitude 1.1
    longitude 2.2
    name "MyString"
    notes "MyText"
    association :brand
    full_address nil
  end
end
