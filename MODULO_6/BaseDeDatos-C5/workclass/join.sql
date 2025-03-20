SELECT * FROM customers;

SELECT * FROM products;

SELECT * FROM order_details;

SELECT * FROM orders;


-- INNER JOIN --

SELECT *
FROM customers
JOIN orders ON orders.customer_id = customers.id;

SELECT *
FROM order_details
JOIN products ON order_details.product_id = products.id;


-- LEFT JOIN --

SELECT *
FROM customers
LEFT JOIN orders ON orders.customer_id = customers.id;


SELECT *
FROM orders
LEFT JOIN customers ON orders.customer_id = customers.id;

-- RIGHT JOIN --

SELECT *
FROM orders
RIGHT JOIN customers ON orders.customer_id = customers.id;

-- FULL JOIN --

SELECT *
FROM orders
FULL OUTER JOIN customers ON orders.customer_id = customers.id;



-- LIMIT OFFSET

SELECT *
FROM products
LIMIT 3 OFFSET 6;

-- CASE

SELECT *,
CASE
	WHEN stock > 15 AND stock < 30 THEN 'The stock is greather than 15 but less than 30'
    WHEN stock > 15 THEN 'The stock is greater than 15'
    ELSE 'The stock is under 15'
END AS QuantityStock
FROM products; 