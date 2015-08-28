class CarsController < ApplicationController
  def index
    render json: Car.from_price(params[:min_price]).to_price(params[:max_price])
      .from_km(params[:min_km]).to_km(params[:max_km])
      .from_power(params[:min_power]).to_power(params[:max_power])
      .from_year(params[:min_year]).to_year(params[:to_year])
      .of_color(params[:color])
  end
end
