DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
  item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(20),
  department_name VARCHAR(20),
  price FLOAT(7,2),
  stock_quantity INTEGER(100),
  PRIMARY KEY (item_id)
  );
  
  INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ("apples", "grocery", .59, 20);
  INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ("bananas", "grocery", .59, 20);
  INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ("red t-shirts", "clothing", 10, 10);
  INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ("blue t-shirts", "clothing", 10, 10);
  INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ("boxed wine", "liquor", 5, 20);
  INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ("beer", "liquor", 5, 10);
  INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ("jeans", "clothing", 50, 10);
  INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ("couch", "furniture", 100, 10);
  INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ("tv", "electronics", 500, 10);
  INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ("chips", "grocery", 2, 20);
  
  SELECT * FROM products;