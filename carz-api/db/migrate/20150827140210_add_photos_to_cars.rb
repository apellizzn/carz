class AddPhotosToCars < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.attachment  "image"
      t.integer     "car_id"
    end
  end
end
