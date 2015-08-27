class Car < ActiveRecord::Base
  belongs_to :brand
  has_one :fuel

  validates :full_address, presence: true

  before_validation :reverse_geocode, if: -> (obj) {
    (obj.latitude.present? and obj.latitude_changed?) ||
    (obj.longitude.present? and obj.longitude_changed?)
  }
  reverse_geocoded_by :latitude, :longitude, :address => :full_address
end
