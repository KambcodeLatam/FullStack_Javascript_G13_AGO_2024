-- INNER JOIN
-- Obtener todos los pedidos realizados por 'John Doe'

SELECT 	c.id AS ID,
		c.name,
		o.customer_id
FROM orders AS o
JOIN 
	customers AS c ON o.customer_id = c.id
WHERE c.name = 'John Doe';



-- LEFT JOIN
-- Obtener todos los clientes y sus pedidos realizados despues del 2023-02-24

SELECT email AS correo,
FROM 
	customers c 
LEFT JOIN 
	orders o ON c.id = o.customer_id
WHERE o.order_date > '2023-01-20';



-- JOIN MULTIPLE 
-- Obtener detalles ( datos del cliente) de los pedidos con productos con un precio superior a 90

SELECT * FROM products
ORDER BY price;


SELECT 
	o.id As order_id,
	c.id AS customer_id,
	c.name,
	p.id AS product_id,
	p.name
FROM 
	orders o
INNER JOIN
	customers c ON  c.id = o.customer_id
INNER JOIN
	order_details AS od ON od.order_id = o.id
INNER JOIN
	products AS p ON p.id = od.product_id
LIMIT 5;
