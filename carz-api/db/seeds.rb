Brand.delete_all
Car.delete_all

['Ford', 'Fiat', 'Seat', 'Audi', 'Ferrari'].each do |name|
  brand = Brand.create name: name
  fuel = Fuel.create name: ['GPL', 'Diesel', 'Gasoline', 'Hybrid'].sample
  5.times do
    location = Geocoder.search(Faker::Internet.ip_v4_address).first
    Car.create name: Faker::Book.title, power: Faker::Number.decimal(2, 3),
      color: Faker::Commerce.color, price: Faker::Commerce.price,
      km: Faker::Number.between(10_000, 160_000_000),
      brand: brand,
      year: Faker::Number.between(2003, 2014),
      notes: Faker::Lorem.paragraph(2, false, 4),
      latitude: location.try(:latitude) || 42.88893647,
      longitude: location.try(:longitude) || 23.66532111,
      fuel: fuel
  end
end
