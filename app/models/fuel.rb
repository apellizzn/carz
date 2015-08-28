class Fuel < ActiveRecord::Base
  belongs_to :car

  validates :name, presence: true
end
