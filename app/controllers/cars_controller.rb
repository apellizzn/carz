class CarsController < ApplicationController
  def index
    render json: Car.from_price(params[:min_price]).to_price(params[:max_price])
      .from_km(params[:min_km]).to_km(params[:max_km])
      .from_power(params[:min_power]).to_power(params[:max_power])
      .from_year(params[:min_year]).to_year(params[:max_year])
      .of_color(params[:color]).produced_by(params[:brand])
      .paginate(pagination)
  end


  private

  def pagination
    {
      page: params[:page] || 1,
      per_page: params[:per_page] || WillPaginate.per_page
    }
  end
end
