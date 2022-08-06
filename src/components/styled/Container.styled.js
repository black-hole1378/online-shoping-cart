import styled from "styled-components";
export const Order_Container = styled.section `
    background-color: #fff;
    border-radius: 15px;
    border: none;
    width: 600px;
    height: max-content; 
    left: 50%;  
    top: 50%;  
    transform: translate(-50%,-50%);
    position: absolute;
    @media(max-width: 600px) {
       width: 375px;
       top: 60%;
       margin-top: 20px;
    }
`

export const Left = styled.img`
    width: 100%;  
    height: 430px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
`

export const RightStyle = styled.div`
  display: block;
  margin: 15px;
`;

export const ButtonStyle = {
    width: "100%",
    fontSize: "1rem",
    backgroundColor: `${({theme})=>theme.color.header}`,
};