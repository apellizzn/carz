Brand.delete_all

['Ford', 'Fiat', 'Seat', 'Audi', 'Ferrari'].each do |name|
  Brand.create name: name
end
