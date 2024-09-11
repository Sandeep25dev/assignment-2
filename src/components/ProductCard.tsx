import styled from "styled-components";
import { FaStar } from "react-icons/fa6";

interface ProductProps {
  name: string;
  price: number;
  rating: number;
}

const ProductCard: React.FC<ProductProps> = ({ name, price, rating }) => {
  return (
    <Card>
      <h3>{name}</h3>
      <p>${price}</p>
      <p>
        <FaStar />
        {rating}
      </p>
    </Card>
  );
};

export default ProductCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  text-align: center;
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: box-shadow 0.2s ease-in-out;
  }
`;
