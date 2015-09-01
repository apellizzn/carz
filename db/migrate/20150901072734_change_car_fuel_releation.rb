class ChangeCarFuelReleation < ActiveRecord::Migration
  def change
    remove_column :fuels, :car_id
    add_column :cars, :fuel_id, :integer
  end
end
