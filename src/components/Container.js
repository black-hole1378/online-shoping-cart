import React from 'react'
import {Row, Col} from 'react-bootstrap';
import {Order_Container} from './styled/Container.styled';
import {Left} from './styled/Container.styled';
import product_image from "./images/desktop.jpg"
import Right from './Right';
export default function Container() {
    return (
        <Order_Container>
            <Row>
                <Col md={6}>
                    <Left src={product_image} alt=''/>
                </Col>

                <Col md={6}>
                    <Right/>
                </Col>
            </Row>
        </Order_Container>
    );
}
