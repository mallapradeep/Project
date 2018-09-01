--Products Table
create table products (
    product_id serial primary key,
    name varchar(40),
    description varchar(40),
    image text,
    price integer
);
--Users Table
create table users (
    user_id serial primary key,
    username varchar(40),
    email varchar(40),
    auth_id text
);
--Carts Table
create table carts (
    cart_id serial primary key,
    product_id integer,
    user_id integer,
    quantity integer
    
)
------------------------

create table carts (
-- cart_id serial primary key, 
-- product_id integer REFERENCES products (product_id), 
-- user_id integer REFERENCES users (user_id)
-- )
---------------------------------------
get_user_cart
-- SELECT *
-- FROM users u 
-- JOIN carts c ON u.user_id = c.user_id
-- JOIN products p ON p.product_id = c.product_id
-- WHERE u.user_id = 1;



-----------------------------------------------
select * from carts 
join products on products.product_id = carts.product_id
where user_id=$1;

select p.product, p.price, c.quantity 
from carts c
join users u on u.user_id = c.user_id
join products p on c.product_id = p.product_idwhere u.user_id = $1 and main = true

------------------------------------------------
--Adding into Products Table
insert into products(name, description, image, price)
values( 'T-shirt','Red T-shirt', 'https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d6bdc66b5572ed855aa631c7002de5a3&auto=format&fit=crop&w=2134&q=80', 20),
( 'Jacket','Denim Jacket', 'https://images.unsplash.com/photo-1527016021513-b09758b777bd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f0ff89d00bb062148746339baf2bfc79&auto=format&fit=crop&w=1952&q=80', 40),
( 'T-shirt','Graphic T-shirt', 'https://images.unsplash.com/photo-1509585585779-17594514ad43?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5ab082d7def02087c491f5cf69743544&auto=format&fit=crop&w=634&q=80', 20),
( 'Jacketleather','Black Leather Jacket', 'https://images.unsplash.com/photo-1500428596937-31f16f2210fe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=73b9b563efc57713aa6c17ae3f332b38&auto=format&fit=crop&w=700&q=80', 60),
( 'Dress','Red Dress', 'https://images.unsplash.com/photo-1527189919029-aeb3d997547d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b477bf387b45d4a6c115caa49c71b682&auto=format&fit=crop&w=632&q=80', 20),
( 'T-shirt','Skeletonhand1', 'https://images.unsplash.com/photo-1503341338985-c0477be52513?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1a58c0c0de6c75c2fb31c67f49ebf37a&auto=format&fit=crop&w=1350&q=80', 20),
( 'T-shirt','Skeletonhand2', 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce33761e90611fc4072c99cfa8adbe35&auto=format&fit=crop&w=1350&q=80', 20),
( 'Pant', 'Joggers Pant', 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-0.3.5&s=9b72401087e77e30c67a4eb1ee027b43&auto=format&fit=crop&w=634&q=80', 30),
( 'backpack','Backpack', 'https://images.unsplash.com/photo-1520621312529-567168fbf786?ixlib=rb-0.3.5&s=0a800750d4ee22934180dfd27a74464b&auto=format&fit=crop&w=634&q=80', 40),
( 'Shoe','Yeezy', 'https://images.unsplash.com/photo-1506026830518-84410c0a880f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6f3ff8066730c4ed77432b8bb953714c&auto=format&fit=crop&w=634&q=80', 200),
( 'backpack','Brown Leather Bag', 'https://images.unsplash.com/photo-1473188588951-666fce8e7c68?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1fbdbd814e90cfbe82efa4356abda205&auto=format&fit=crop&w=1440&q=80', 120);

/////////////////

select * from carts 
join users on users.user_id = carts.user_id
join products on products.product_id = carts.product_id
where users.user_id = 1;

//////// NEW TABLE /////////////////////////////////

insert into products(name, description, image, price)
values( 'Shoes','Nike Presto Shoes', 'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/i2efsksa9chjygp6c7d7/air-presto-essential-mens-shoe-o3819q.jpg', 120),
('T-shirt', 'Nike Drift', 'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/k0sq02nbphwbwylslipk/dri-fit-rise-365-mens-short-sleeve-running-top-z3TldANq.jpg', 30),

( 'Jacket','Denim Jacket', 'https://images.unsplash.com/photo-1527016021513-b09758b777bd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f0ff89d00bb062148746339baf2bfc79&auto=format&fit=crop&w=1952&q=80', 40),
( 'T-shirt','Graphic T-shirt', 'https://images.unsplash.com/photo-1509585585779-17594514ad43?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5ab082d7def02087c491f5cf69743544&auto=format&fit=crop&w=634&q=80', 20),
( 'Jacketleather','Black Leather Jacket', 'https://images.unsplash.com/photo-1500428596937-31f16f2210fe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=73b9b563efc57713aa6c17ae3f332b38&auto=format&fit=crop&w=700&q=80', 60),
( 'Dress','Red Dress', 'https://images.unsplash.com/photo-1527189919029-aeb3d997547d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b477bf387b45d4a6c115caa49c71b682&auto=format&fit=crop&w=632&q=80', 20),
( 'T-shirt','Skeletonhand1', 'https://images.unsplash.com/photo-1503341338985-c0477be52513?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1a58c0c0de6c75c2fb31c67f49ebf37a&auto=format&fit=crop&w=1350&q=80', 20),
( 'T-shirt','Skeletonhand2', 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce33761e90611fc4072c99cfa8adbe35&auto=format&fit=crop&w=1350&q=80', 20),
( 'Pant', 'Joggers Pant', 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-0.3.5&s=9b72401087e77e30c67a4eb1ee027b43&auto=format&fit=crop&w=634&q=80', 30),
( 'backpack','Backpack', 'https://images.unsplash.com/photo-1520621312529-567168fbf786?ixlib=rb-0.3.5&s=0a800750d4ee22934180dfd27a74464b&auto=format&fit=crop&w=634&q=80', 40),
( 'Shoe','Yeezy', 'https://images.unsplash.com/photo-1506026830518-84410c0a880f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6f3ff8066730c4ed77432b8bb953714c&auto=format&fit=crop&w=634&q=80', 200),
( 'backpack','Brown Leather Bag', 'https://images.unsplash.com/photo-1473188588951-666fce8e7c68?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1fbdbd814e90cfbe82efa4356abda205&auto=format&fit=crop&w=1440&q=80', 120);
