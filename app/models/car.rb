class Car < ActiveRecord::Base
  belongs_to :brand
  has_one :fuel
  has_many :photos

  validates :full_address, presence: true
  validates :name, presence: true
  validates :km, presence: true
  validates :power, presence: true
  validates :brand_id, presence: true
  validates :color, presence: true
  validates :year, presence: true

  before_validation :reverse_geocode, if: -> (obj) {
    (obj.latitude.present? and obj.latitude_changed?) ||
    (obj.longitude.present? and obj.longitude_changed?)
  }
  reverse_geocoded_by :latitude, :longitude, :address => :full_address

  scope :from_price, -> (price) {
    price ? where(price: price..Float::INFINITY) : Car.all
  }
  scope :to_price, -> (price) {
    price ? where(price: 0..price) : Car.all
  }

  scope :from_km, -> (km) { km ? where(km: km..Float::INFINITY) : Car.all }
  scope :to_km, -> (km) { km ? where(km: 0..km) : Car.all }

  scope :from_power, -> (power) {
    power ? where(power: power..Float::INFINITY) : Car.all
  }
  scope :to_power, -> (power) { power ? where(power: 0..power) : Car.all }

  scope :from_year, -> (year) {
    year ? where(year: year..Float::INFINITY) : Car.all
  }
  scope :to_year, -> (year) { year ? where(year: 0..year) : Car.all }

  scope :of_color, -> (color) { color ? where(color: color) : Car.all }
end
