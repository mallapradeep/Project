--Products Table
create table products (
    product_id serial primary key,
    name varchar(40),
    description varchar(40),
    image text,
    price integer,
    category_id integer references categories(id)
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
-----Category table

create table categories (
    id serial primary key,
    category text
)
--ADD TO Category
insert into categories (category) 
values('tops'), ('bottoms'), ('footwear');

///////////////////Creating Profile Table////////////////////

create table profile (
    profile_id serial primary key,
    fullName varchar(80),
     emailAddress varchar(80),
      street varchar(80),
       city varchar(80),
        zip integer,
         state varchar(80),
          phoneNumber integer,
          user_id integer, foreign key(user_id) references users(user_id)
          );

----------------------------
-- --AccountInfo table
-- create table accountInfo(
--     id serial primary key,
--     fullName varchar(80),
--     emailAddress text,
--     street varchar(80),
--     city varchar(80),
--     zip integer,
--     state varchar(80),
--     phoneNumber integer,
--     user_id integer, 
--     foreign key(user_id) references users(user_id) )

-----------------------------------
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
insert into products(name, description, image, price, category_id)
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
('Shirt',  'Slim-fit', 'https://oldnavy.gap.com/webcontent/0015/613/674/cn15613674.jpg', 15),
('Shirt', 'SeerSucker', 'https://oldnavy.gap.com/webcontent/0015/253/455/cn15253455.jpg’, 20),
('T-shirt' , 'Song of Death', 'https://cdn-images.threadless.com/threadless-shop/products/5991/1272x920mens-extra-soft-tee_guys_01-solid-3a.jpg?w=1272&h=920',  10),
('T-shirt',  'Brooklyn', 'https://oldnavy.gap.com/webcontent/0015/724/104/cn15724104.jpg', 20),
('SweatShirt', 'Witch Hand', "https://cdn-images.threadless.com/threadless-shop/products/8511/1272x920crew-sweatshirt_guys_solid01.jpg?w=1272&h=920”, 20),
(‘Jacket’, 'Bomber jacket', 'https://oldnavy.gap.com/webcontent/0015/571/640/cn15571640.jpg’, 60),
('Jacket', 'Garment-Dyed',  'https://oldnavy.gap.com/webcontent/0014/068/072/cn14068072.jpg’, 80),
('Hoodie’, 'Mountain Stream',  'https://cdn-images.threadless.com/threadless-shop/products/8150/1272x920zipup_guys_solid01.jpg?w=1272&h=920’, 25),
('TankTops', 'StayFocused', 'https://cdn-images.threadless.com/threadless-shop/products/6103/1272x920tank_guys_01.jpg?w=1272&h=920’, 15)




///////////////////////////////////////////////////////////////////
TOPS
WOMEN
('T-shirt', 'Science', 'https://cdn-images.threadless.com/threadless-shop/products/8525/1272x920shirt_girls_02.jpg?w=1272&h=920’, 10),
('T-shirt', 'Mittens', 'https://cdn-images.threadless.com/threadless-shop/products/1354/1272x920vneck_girls_01.jpg?w=1272&h=920', 10),
('Dress', 'Space', 'https://cdn-images.threadless.com/threadless-shop/products/4400/1272x920womens-sublimated-racerback-tank-dress_girls_01.jpg?w=1272&h=920’, 20),
('Hoody', 'Escape', 'https://cdn-images.threadless.com/threadless-shop/products/8316/1272x920pullover_womens_heather02.jpg?w=1272&h=920’, 20),
('Jacket', 'Flannel Peacoat', 'https://oldnavy.gap.com/webcontent/0015/883/243/cn15883243.jpg', 60)

('Cap','Snapback ', 'https://cdn-images.threadless.com/threadless-shop/products/7490/1272x920snapback-cap_accessories_01.jpg?w=1272&h=920’, 20)
('Cap','Snapback ', 'https://cdn-images.threadless.com/threadless-shop/products/6371/1272x920snapback-cap_accessories_01.jpg?w=1272&h=920’, 20)
('Beanie', 'Go wild', 'https://cdn-images.threadless.com/threadless-shop/products/8762/1272x920knit-beanie_accessories_01.jpg?w=1272&h=920’, 20)

Bottoms
Men
('Nike', 'Joggers-Pant',  'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/a9rt65z40qhw2lqaczro/dri-fit-mens-fleece-training-pants-OL0Nxg.jpg’, 40),
('Jeans', 'Straight Built', 'https://oldnavy.gap.com/webcontent/0013/574/825/cn13574825.jpg’, 40),
('Pant', 'Athletic built-in', 'https://oldnavy.gap.com/webcontent/0014/764/931/cn14764931.jpg’, 40),
('Shorts', 'Skim-Ultimate', 'https://oldnavy.gap.com/webcontent/0015/713/951/cn15713951.jpg', 40)

Women
('Jeans', 'Mid-RIse Skinny', 'https://oldnavy.gap.com/webcontent/0015/315/169/cn15315169.jpg', 40),
('Dress', 'Tie-Belt', 'https://oldnavy.gap.com/webcontent/0015/669/074/cn15669074.jpg’, 40),
('JumpSuit', 'Squad-neck cami', 'https://oldnavy.gap.com/webcontent/0015/730/199/cn15730199.jpg', 40),
('Leggings', 'Lazy-Panda', 'https://cdn-images.threadless.com/threadless-shop/products/7779/1272x920leggings_girls_01.jpg?w=1272&h=920’, 40)


Footwear
MEN
('Addidas', 'POD-S31', 'https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto,fl_lossy/71d00c2b7c494d88bfa5a91200fce14a_9366/POD-S3_1_Shoes_Grey_B37365_01_standard.jpg', 120),
('Vans', 'Gum old skull', 'https://images.vans.com/is/image/Vans/8G1U5A-HERO?$583x583$’, 120),
('Chukkas', 'Sueded-Lace-up', 'https://oldnavy.gap.com/webcontent/0015/590/375/cn15590375.jpg’, 120),
('Nike', 'Epic React', 'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/zuzrnyygewmasondefzn/epic-react-flyknit-mens-running-shoe-mfm75M.jpg’, 120),
('Nike', 'Cortez Basic', 'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/hrdc1wxgau8ehgyetrqc/cortez-basic-se-mens-shoe-jKlyLK.jpg’, 120),
('Vans', 'Checkboarder', 'https://images.vans.com/is/image/Vans/EYEBWW-HERO?$583x583$', 120)

WOMEN
('Nike', 'Free Run', 'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/ihyxyfncqtwfn9ondgtu/free-rn-2018-sun-womens-running-shoe-vj2MK3.jpg’, 100),
('Shoe', 'Sueded block heel', 'https://oldnavy.gap.com/webcontent/0015/590/400/cn15590400.jpg’, 100),
('Shoe', 'Driving-Loafers', 'https://oldnavy.gap.com/webcontent/0012/139/225/cn12139225.jpg', 100),
 ('Nike', 'Jordan AJ', 'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/vfvctvlzrptrdkdvzrwa/jordan-aj-1-high-strap-mens-shoe-olTW4L40.jpg’, 100),
('Shoe', 'NMD-R1', 'https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto,fl_lossy/aa892bf23bbc4500b6d0a906009cbd24_9366/NMD_R1_Shoes_Grey_B37651_01_standard.jpg’, 100)


////////////////////////////////// ALL CART //////////
insert into products(name, description, image, price, category_id)
values
('T-shirt', 'Nike Drift', 'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/k0sq02nbphwbwylslipk/dri-fit-rise-365-mens-short-sleeve-running-top-z3TldANq.jpg', 30, 1),
('Shirt',  'Slim-fit', 'https://oldnavy.gap.com/webcontent/0015/613/674/cn15613674.jpg', 15, 1),
('Shirt', 'SeerSucker', 'https://oldnavy.gap.com/webcontent/0015/253/455/cn15253455.jpg', 20, 1),
('T-shirt' , 'Song of Death', 'https://cdn-images.threadless.com/threadless-shop/products/5991/1272x920mens-extra-soft-tee_guys_01-solid-3a.jpg?w=1272&h=920',  10, 1),
('T-shirt',  'Brooklyn', 'https://oldnavy.gap.com/webcontent/0015/724/104/cn15724104.jpg', 20, 1),
('SweatShirt', 'Witch Hand', 'https://cdn-images.threadless.com/threadless-shop/products/8511/1272x920crew-sweatshirt_guys_solid01.jpg?w=1272&h=920', 20, 1),
(‘Jacket’, 'Bomber jacket', 'https://oldnavy.gap.com/webcontent/0015/571/640/cn15571640.jpg', 60, 1),
('Jacket', 'Garment-Dyed',  'https://oldnavy.gap.com/webcontent/0014/068/072/cn14068072.jpg', 80, 1),
('Hoodie’, 'Mountain Stream',  'https://cdn-images.threadless.com/threadless-shop/products/8150/1272x920zipup_guys_solid01.jpg?w=1272&h=920', 25, 1),
('TankTops', 'StayFocused', 'https://cdn-images.threadless.com/threadless-shop/products/6103/1272x920tank_guys_01.jpg?w=1272&h=920', 15, 1),
('T-shirt', 'Science', 'https://cdn-images.threadless.com/threadless-shop/products/8525/1272x920shirt_girls_02.jpg?w=1272&h=920', 10, 1),
('T-shirt', 'Mittens', 'https://cdn-images.threadless.com/threadless-shop/products/1354/1272x920vneck_girls_01.jpg?w=1272&h=920', 10, 1),
('Dress', 'Space', 'https://cdn-images.threadless.com/threadless-shop/products/4400/1272x920womens-sublimated-racerback-tank-dress_girls_01.jpg?w=1272&h=920', 20, 1),
('Hoody', 'Escape', 'https://cdn-images.threadless.com/threadless-shop/products/8316/1272x920pullover_womens_heather02.jpg?w=1272&h=920', 20, 1),
('Jacket', 'Flannel Peacoat', 'https://oldnavy.gap.com/webcontent/0015/883/243/cn15883243.jpg', 60, 1),
('Cap','Snapback ', 'https://cdn-images.threadless.com/threadless-shop/products/7490/1272x920snapback-cap_accessories_01.jpg?w=1272&h=920', 20, 1),
('Cap','Snapback ', 'https://cdn-images.threadless.com/threadless-shop/products/6371/1272x920snapback-cap_accessories_01.jpg?w=1272&h=920', 20, 1),
('Beanie', 'Go wild', 'https://cdn-images.threadless.com/threadless-shop/products/8762/1272x920knit-beanie_accessories_01.jpg?w=1272&h=920', 20, 1),

('Nike', 'Joggers-Pant',  'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/a9rt65z40qhw2lqaczro/dri-fit-mens-fleece-training-pants-OL0Nxg.jpg', 40, 2),
('Jeans', 'Straight Built', 'https://oldnavy.gap.com/webcontent/0013/574/825/cn13574825.jpg', 40, 2),
('Pant', 'Athletic built-in', 'https://oldnavy.gap.com/webcontent/0014/764/931/cn14764931.jpg', 40, 2),
('Shorts', 'Skim-Ultimate', 'https://oldnavy.gap.com/webcontent/0015/713/951/cn15713951.jpg', 40, 2),
('Jeans', 'Mid-RIse Skinny', 'https://oldnavy.gap.com/webcontent/0015/315/169/cn15315169.jpg', 40, 2),
('Dress', 'Tie-Belt', 'https://oldnavy.gap.com/webcontent/0015/669/074/cn15669074.jpg', 40, 2),
('JumpSuit', 'Squad-neck cami', 'https://oldnavy.gap.com/webcontent/0015/730/199/cn15730199.jpg', 40, 2),
('Leggings', 'Lazy-Panda', 'https://cdn-images.threadless.com/threadless-shop/products/7779/1272x920leggings_girls_01.jpg?w=1272&h=920', 40, 2),

( 'Shoes','Nike Presto Shoes', 'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/i2efsksa9chjygp6c7d7/air-presto-essential-mens-shoe-o3819q.jpg', 120, 3),
('Addidas', 'POD-S31', 'https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto,fl_lossy/71d00c2b7c494d88bfa5a91200fce14a_9366/POD-S3_1_Shoes_Grey_B37365_01_standard.jpg', 120, 3),
('Vans', 'Gum old skull', 'https://images.vans.com/is/image/Vans/8G1U5A-HERO?$583x583$', 120, 3),
('Chukkas', 'Sueded-Lace-up', 'https://oldnavy.gap.com/webcontent/0015/590/375/cn15590375.jpg', 120, 3),
('Nike', 'Epic React', 'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/zuzrnyygewmasondefzn/epic-react-flyknit-mens-running-shoe-mfm75M.jpg', 120, 3),
('Nike', 'Cortez Basic', 'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/hrdc1wxgau8ehgyetrqc/cortez-basic-se-mens-shoe-jKlyLK.jpg', 120, 3),
('Vans', 'Checkboarder', 'https://images.vans.com/is/image/Vans/EYEBWW-HERO?$583x583$', 120, 3),
('Nike', 'Free Run', 'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/ihyxyfncqtwfn9ondgtu/free-rn-2018-sun-womens-running-shoe-vj2MK3.jpg', 100, 3),
('Shoe', 'Sueded block heel', 'https://oldnavy.gap.com/webcontent/0015/590/400/cn15590400.jpg', 100, 3),
('Shoe', 'Driving-Loafers', 'https://oldnavy.gap.com/webcontent/0012/139/225/cn12139225.jpg', 100, 3),
 ('Nike', 'Jordan AJ', 'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/vfvctvlzrptrdkdvzrwa/jordan-aj-1-high-strap-mens-shoe-olTW4L40.jpg', 100, 3),
('Shoe', 'NMD-R1', 'https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto,fl_lossy/aa892bf23bbc4500b6d0a906009cbd24_9366/NMD_R1_Shoes_Grey_B37651_01_standard.jpg', 100, 3);


---------------------------------------------------
--Get TOP/BOTTOMS/FOOTWEAR
select p.price, p.description, p.image, p.product_id 
from products p
join categories c on p.category_id = c.id
where category_id = 1/2/3
------------------------------------------------------

