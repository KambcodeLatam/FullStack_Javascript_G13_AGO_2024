-- DML
-- SELECT

SELECT * FROM products;

SELECT 
	id, price
FROM products;

-- DISTINCT

SELECT DISTINCT price FROM products;


-- WHERE

SELECT * FROM products
WHERE name = 'Tablet';

SELECT * FROM products WHERE id = 5;

--  OPERATORS

-- > < >= <= <> 
SELECT * FROM PRODUCTS
WHERE stock != 40;

-- AND OR

SELECT * FROM products
WHERE price > 40 AND price < 200;

SELECT * FROM products
WHERE price > 40 OR stock > 40;

-- BETWEEN LIKE IN   IS NOT NULL

-- IN

SELECT * FROM products
WHERE stock IN (10,40,30);

-- BETWEEN

SELECT * FROM products
WHERE price BETWEEN 40 AND 200;

-- LIKE % _
SELECT * FROM products
WHERE name LIKE '%hone%';

SELECT * FROM products
WHERE name LIKE '_hone';

SELECT * FROM products
WHERE name NOT LIKE '%hone%';

-- IS NULL
SELECT * FROM products
WHERE id IS NULL;


-- ORDER BY DESC ASC
SELECT * FROM products
ORDER BY price ASC;

-- Aggregate Functions

-- MIN()
-- MAX()
-- SUM()
-- AVG()
-- COUNT()


SELECT MIN(stock) FROM products;
SELECT MAX(stock) FROM products;
SELECT SUM(stock) AS sum_total FROM products;
SELECT AVG(stock) FROM products;
SELECT COUNT(*) FROM products;


-- GROUP BY

SELECT * FROM products;

SELECT stock, Count(*)
FROM products
GROUP BY stock; 

-- HAVING 
SELECT stock, count(*), sum(stock)
FROM products
GROUP BY stock
HAVING stock > 20;



-- SUB CONSULTAS

SELECT * FROM products;


SELECT AVG(stock) FROM products; // 32.14


SELECT * FROM products
WHERE stock >
	(SELECT AVG(stock) FROM products);

----
-- 1

SELECT product_id FROM order_details
WHERE id = 1;

SELECT name FROM products
WHERE id = (
	SELECT product_id FROM order_details
	WHERE id = 1
);
