import React from 'react';
import { Card } from 'react-bootstrap';

const MusicalCard = () => {
    return (
        <Card>
            <Card.Img variant="top" src="/ttttt.PNG" />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    );
};

export default MusicalCard;