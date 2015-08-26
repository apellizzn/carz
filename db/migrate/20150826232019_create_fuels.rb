class CreateFuels < ActiveRecord::Migration
  def change
    create_table :fuels do |t|
      t.string :name
      t.references :car, index: true

      t.timestamps
    end
  end
end
