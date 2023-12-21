
CREATE TABLE orders (
  order_id SERIAL PRIMARY KEY,
  order_name VARCHAR(255),
  order_description VARCHAR(255),
  amount NUMERIC(10, 2)
);


INSERT INTO orders (order_name, order_description, amount) 
VALUES 
  ('Order 1', 'Description for Order 1', 100.00),
  ('Order 2', 'Description for Order 2', 200.00),
  ('Order 3', 'Description for Order 3', 300.00);