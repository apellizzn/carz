module ParamsHelpers

  def car_params_without field
    car_params.except field
  end

  def car_params
    brand_id = FactoryGirl.create(:brand).id
    fuel_id = FactoryGirl.create(:fuel).id
    FactoryGirl.attributes_for(:car).merge({ brand_id: brand_id, fuel_id: fuel_id })
  end

  def photo_params_without field
    photo_params.except field
  end

  def photo_params
    car = FactoryGirl.create :car
    stream = File.new(Rails.root + 'spec/fixtures/images/small_car.jpg')
    base64image = Base64.encode64(stream.read)
    stream.close
    { image:  'data:image/jpeg;base64,' + base64image, car_id: car.id }
  end
end
