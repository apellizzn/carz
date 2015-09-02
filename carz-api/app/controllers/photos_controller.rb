class PhotosController < ApplicationController
  def index
    render json: Photo.where(car_id: params[:car_id])
  end

  def create
    photo = Photo.new photo_params
    if photo.save
      render json: photo, status: 201
    else
      render json: photo.errors, status: 422
    end
  end

  private


  def photo_params
    params.permit :car_id, :image
  end
end
