class CreatePlans < ActiveRecord::Migration
  def change
    create_table :plans do |t|
      
      ### Personal Information
      t.string    :name
      t.string    :address
      t.string    :email
      t.string    :gender
      t.string    :nationality
      t.boolean   :married
      t.string    :license

      ### 

      t.timestamps null: false
    end
  end
end
