class Photo < ActiveRecord::Base
  belongs_to :car
  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"

  validates :car_id, presence: true
  validates_attachment :image, presence: true, content_type: { content_type: "image/jpeg" }, size: { in: 0..10.kilobytes }
end
