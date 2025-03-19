create table if not exists customers (
  id bigint primary key generated always as identity,
  name text not null,
  email text unique not null,
  registration_date date default current_date
);

create table if not exists products (
  id bigint primary key generated always as identity,
  name text not null,
  price numeric(10, 2) not null,
  stock int not null
);

create table if not exists orders (
  id bigint primary key generated always as identity,
  customer_id bigint references customers (id),
  order_date date not null
);

create table if not exists order_details (
  id bigint primary key generated always as identity,
  order_id bigint references orders (id),
  product_id bigint references products (id),
  quantity int not null,
  unit_price numeric(10, 2) not null
);