import React from "react";
import {Button} from "react-bootstrap";
import {
    Product_name,
    Tittle,
    Content,
    FLEX,
    Valid_price,
    Invalid_price,
} from "./styled/Content.styled";
import {RightStyle, ButtonStyle} from "./styled/Container.styled";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function Right() {
    return (
        <RightStyle>
            <Product_name>PERFUME</Product_name>

            <Tittle>Gabrielle Essence Eau De Parfum</Tittle>

            <Content>
                A floral, solar and voluptuous interpretation composed by Olivier Polge,
                Perfumer-Creator for the House of CHANEL.
            </Content>

            <FLEX gap="20px">
                <Valid_price>$149.99</Valid_price>
                <Invalid_price>$169.99</Invalid_price>
            </FLEX>

            <Button style={ButtonStyle} className="btn btn-success">
                <ShoppingCartIcon/> Add to Cart
            </Button>
        </RightStyle>
    );
}
