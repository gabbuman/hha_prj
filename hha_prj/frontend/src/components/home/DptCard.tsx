import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';

export class DptCard extends Component {
    render() {
		return (
            <div>
               <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Department name</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Access</Button>
                </Card.Body>
                </Card> 

            </div>
        )
    }
}

export default DptCard
