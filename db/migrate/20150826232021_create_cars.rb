class CreateCars < ActiveRecord::Migration
  def change
    create_table :cars do |t|
      t.string :color
      t.float :price
      t.integer :km
      t.integer :year
      t.float :power
      t.string :location
      t.string :name
      t.references :brand, index: true
      t.text :notes

      t.timestamps
    end
  end
end
