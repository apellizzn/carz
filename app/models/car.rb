class Car < ActiveRecord::Base
  belongs_to :brand
  has_one :fuel
  validates_formatting_of :location, using: :us_zip
end
