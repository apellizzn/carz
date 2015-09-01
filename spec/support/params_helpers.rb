module ParamsHelpers

  def car_params_without field
    car_params.except field
  end

  def car_params
    brand_id = FactoryGirl.create(:brand).id
    fuel_id = FactoryGirl.create(:fuel).id
    FactoryGirl.attributes_for(:car).merge({ brand_id: brand_id, fuel_id: fuel_id })
  end
end
