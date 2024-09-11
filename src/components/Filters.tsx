import React from "react";
import styled from "styled-components";

interface FilterProps {
  category: string;
  setCategory: (category: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  color: string;
  setColor: (color: string) => void;
  sort: string;
  setSort: (sort: string) => void;
}

const Filters: React.FC<FilterProps> = ({
  category,
  setCategory,
  priceRange,
  setPriceRange,
  color,
  setColor,
  sort,
  setSort,
}) => {
  return (
    <FilterWrapper>
      <ContentsContainer>
        <FilterTitle>Filter by Category</FilterTitle>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All</option>
          <option value="Dresses">Dresses</option>
          <option value="Shirts">Shirts</option>
        </select>
      </ContentsContainer>
      <ContentsContainer>
        <FilterTitle>Filter by Price Range</FilterTitle>
        <input
          type="number"
          placeholder="Min Price"
          value={priceRange[0]}
          onChange={(e) =>
            setPriceRange([Number(e.target.value), priceRange[1]])
          }
        />
        <input
          type="number"
          placeholder="Max Price"
          value={priceRange[1]}
          onChange={(e) =>
            setPriceRange([priceRange[0], Number(e.target.value)])
          }
        />
      </ContentsContainer>
      <ContentsContainer>
        <FilterTitle>Filter by Color</FilterTitle>
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="">All</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Yellow">Yellow</option>
          <option value="Green">Green</option>
          <option value="Black">Black</option>
          <option value="White">White</option>
        </select>
      </ContentsContainer>
      <ContentsContainer>
        <FilterTitle>Sort by</FilterTitle>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
          <option value="name">Name</option>
          <option value="rating">Rating</option>
        </select>
      </ContentsContainer>
    </FilterWrapper>
  );
};

export default Filters;

const FilterWrapper = styled.div`
  padding: 20px;
  width: 250px;
  height: calc(100vh - 40px);
  color: #fff;
  background-color: #6a9c89;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const FilterTitle = styled.h3``;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  input {
    all: unset;
    padding: 4px 10px;
    background: #fff;
    color: #000000;
    border: none;
    border-radius: 5px;
    font-family: "Poppins", sans-serif;
  }
  select {
    all: unset;
    padding: 4px 10px;
    background: #fff;
    color: #000000;
    border: none;
    border-radius: 5px;
    font-family: "Poppins", sans-serif;
  }
`;
