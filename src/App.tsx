import React, { useState } from "react";
import styled from "styled-components";
import Filters from "./components/Filters";
import ProductList from "./components/ProductList";

const Wrapper = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 1;
  padding: 20px;
`;

const App: React.FC = () => {
  const [category, setCategory] = useState<string>("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [color, setColor] = useState<string>("");
  const [sort, setSort] = useState<string>("priceLow");

  return (
    <Wrapper>
      <Filters
        category={category}
        setCategory={setCategory}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        color={color}
        setColor={setColor}
        sort={sort}
        setSort={setSort}
      />
      <Main>
        <ProductList
          category={category}
          priceRange={priceRange}
          color={color}
          sort={sort}
        />
      </Main>
    </Wrapper>
  );
};

export default App;
