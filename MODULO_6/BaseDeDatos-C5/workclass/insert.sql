insert into
  customers (name, email)
values
  ('John Doe', 'john.doe@example.com'),
  ('Jane Smith', 'jane.smith@example.com'),
  ('Alice Johnson', 'alice.johnson@example.com');

-- Insert sample data into products
insert into
  products (name, price, stock)
values
  ('Laptop', 999.99, 10),
  ('Smartphone', 499.99, 20),
  ('Tablet', 299.99, 15);

-- Insert sample data into orders
insert into
  orders (customer_id, order_date)
values
  (1, '2023-01-15'),
  (2, '2023-02-20'),
  (1, '2023-03-05');

-- Insert sample data into order_details
insert into
  order_details (order_id, product_id, quantity, unit_price)
values
  (1, 1, 1, 999.99),
  (1, 2, 2, 499.99),
  (2, 3, 1, 299.99),
  (3, 1, 1, 999.99);


insert into
  products (name, price, stock)
values
  ('Headphones', 199.99, 30),
  ('Smartwatch', 149.99, 25),
  ('Camera', 599.99, 5),
  ('Printer', 89.99, 12),
  ('Monitor', 179.99, 8),
  ('Keyboard', 49.99, 50),
  ('Mouse', 29.99, 60),
  ('External Hard Drive', 79.99, 20),
  ('USB Flash Drive', 19.99, 100),
  ('Router', 59.99, 15);