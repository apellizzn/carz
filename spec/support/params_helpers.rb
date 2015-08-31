module ParamsHelpers

  def car_params_without field
    car_params.except field
  end

  def car_params
    FactoryGirl.attributes_for(:car)
  end
end
