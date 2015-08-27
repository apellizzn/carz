class ChangeLocationToCars < ActiveRecord::Migration
  def change
    add_column :cars, :latitude, :float
    add_column :cars, :longitude, :float
    add_column :cars, :full_address, :string
    remove_column :cars, :location
  end
end
