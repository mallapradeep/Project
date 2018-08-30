select * from carts 
join users on users.user_id = carts.user_id
join products on products.product_id = carts.product_id
where users.user_id = $1 and carts.product_id is not null;

