class FuelsController < ApplicationController
  def index
    render json: Fuel.all
  end

  def create
    fuel = Fuel.new fuel_params
    if fuel.save
      render json: fuel, status: 201
    else
      render json: fuel.errors, status: 422
    end
  end

  private

  def fuel_params
    params.permit :name
  end
end
