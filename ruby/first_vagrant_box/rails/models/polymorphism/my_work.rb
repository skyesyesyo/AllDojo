Employee.create(first_name: "John", last_name: "Doe")
Employee.create(first_name: "Jane", last_name: "Doe")
Product.create(name: "Pillow")

Picture.create(imageable_id: 1, imageable_type: "Employee")
Picture.create(imageable_id: 1, imageable_type: "Product")

Picture.create(imageable: Employee.second)
Picture.create(imageable: Product.second)

Employee.first.pictures