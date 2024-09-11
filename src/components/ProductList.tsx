import React from "react";
import styled from "styled-components";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

interface ProductListProps {
  category: string;
  priceRange: [number, number];
  color: string;
  sort: string;
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const ProductList: React.FC<ProductListProps> = ({
  category,
  priceRange,
  color,
  sort,
}) => {
  let filteredProducts = products;

  // Filter by category
  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }

  // Filter by price range
  filteredProducts = filteredProducts.filter(
    (product) =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  // Filter by color
  if (color) {
    filteredProducts = filteredProducts.filter(
      (product) => product.color === color
    );
  }

  // Sort by price, name, or rating
  if (sort === "priceLow") {
    filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "priceHigh") {
    filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sort === "name") {
    filteredProducts = filteredProducts.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  } else if (sort === "rating") {
    filteredProducts = filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <Grid>
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          rating={product.rating}
        />
      ))}
    </Grid>
  );
};

export default ProductList;
