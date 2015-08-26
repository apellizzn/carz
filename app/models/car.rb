class Car < ActiveRecord::Base
  belongs_to :brand
  has_one :fuel
end
