import styled from "styled-components";
const content = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&family=Rokkitt:wght@200&display=swap');
  @import url("https://fonts.googleapis.com/css2?family=Fraunces:opsz@9..144&family=Montserrat:ital,wght@1,100&family=Rokkitt:wght@200&display=swap");
`;

export const Product_name = styled(content)`
  font-family: "Rokkitt", serif;
  font-size: 0.8rem;
  color: hsl(228, 12%, 48%);
`;

export const Tittle = styled(content)`
  font-family: "Montserrat", serif;
  font-size: 2rem;
  font-weight: bolder;
`;

export const Content = styled(Product_name)`
  font-family: "Rokkitt", sans-serif;
  font-size: 0.9rem;
`;

export const FLEX = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.gap};
  flex-direction: row;
`;

export const Valid_price = styled(Tittle)`
  @import url("https://fonts.googleapis.com/css2?family=Caveat&family=Fraunces:opsz@9..144&family=Montserrat:ital,wght@1,100&family=Rokkitt:wght@200&display=swap");
  font-family: "Caveat", cursive;
  font-size: 1.6rem;
  color: rgb(26, 192, 26);
`;

export const Invalid_price = styled(Valid_price)`
  font-size: 0.9rem;
  color: hsl(228, 12%, 48%);
  text-decoration: line-through;
`;


