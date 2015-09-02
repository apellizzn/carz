class BrandsController < ApplicationController
  def index
    render json: Brand.all
  end

  def create
    brand = Brand.new brand_params
    if brand.save
      render json: brand, status: 201
    else
      render json: brand.errors, status: 422
    end
  end

  private

  def brand_params
    params.permit :name
  end
end
