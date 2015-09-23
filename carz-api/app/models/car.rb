class Car < ActiveRecord::Base
  belongs_to :brand
  belongs_to :fuel
  has_many :photos

  validates :full_address, presence: true
  validates :name, presence: true
  validates :km, presence: true
  validates :power, presence: true
  validates :brand_id, presence: true
  validates :fuel_id, presence: true
  validates :color, presence: true
  validates :year, presence: true

  before_validation :reverse_geocode, if: -> (obj) {
    (obj.latitude.present? and obj.latitude_changed?) ||
    (obj.longitude.present? and obj.longitude_changed?)
  }
  reverse_geocoded_by :latitude, :longitude, :address => :full_address

  default_scope { includes(:brand) }

  scope  :from_price, -> (price) {
    price ? where(price: (price.to_f)..Float::INFINITY) : Car.all
  }
  scope :to_price, -> (price) {
    price ? where(price: 0..(price.to_f)) : Car.all
  }

  scope :from_km, -> (km) {
    km ? where(km: (km.to_f)..Float::INFINITY) : Car.all
  }
  scope :to_km, -> (km) { km ? where(km: 0..(km.to_f)) : Car.all }

  scope :from_power, -> (power) {
    power ? where(power: (power.to_f)..Float::INFINITY) : Car.all
  }
  scope :to_power, -> (power) { power ? where(power: 0..(power.to_f)) : Car.all }

  scope :from_year, -> (year) {
    year ? where(year: (year.to_f)..Float::INFINITY) : Car.all
  }
  scope :to_year, -> (year) { year ? where(year: 0..(year.to_f)) : Car.all }

  scope :of_colors, -> (colors) { colors && !colors.empty? ? where(color: colors) : Car.all }

  scope :produced_by, -> (brand_ids) {
    brand_ids && !brand_ids.empty? ? where(brands: { id: brand_ids }) : Car.all
  }

  def as_json options={}
    super(include: { brand: { only: [:name] } })
  end

  def self.available_colors
    unscoped.distinct(:color).pluck(:color).sort
  end
end
