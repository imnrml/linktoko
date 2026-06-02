-- Basic Supabase schema for LinkToko MVP
-- Run this in Supabase SQL Editor.

create table if not exists public.profiles (
  id uuid primary key default gen_random_uuid(),
  full_name text,
  email text unique,
  whatsapp text,
  role text not null default 'seller',
  created_at timestamptz not null default now()
);

create table if not exists public.templates (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  niche text not null,
  description text,
  price integer not null default 49000,
  preview_url text,
  is_featured boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.stores (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references public.profiles(id) on delete set null,
  template_id uuid references public.templates(id) on delete set null,
  slug text unique not null,
  store_name text not null,
  tagline text,
  category text,
  brand_color text default '#7057ff',
  whatsapp text,
  is_published boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  store_id uuid references public.stores(id) on delete cascade,
  name text not null,
  description text,
  price integer not null,
  image_url text,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  store_id uuid references public.stores(id) on delete set null,
  buyer_name text,
  buyer_whatsapp text,
  total_amount integer not null,
  payment_provider text,
  payment_status text not null default 'pending',
  provider_order_id text,
  created_at timestamptz not null default now()
);

create index if not exists stores_slug_idx on public.stores(slug);
create index if not exists products_store_id_idx on public.products(store_id);
create index if not exists orders_store_id_idx on public.orders(store_id);
