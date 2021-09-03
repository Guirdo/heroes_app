import { Col,Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

export const HeroCard = ({ id,superhero,alter_ego,characters,first_appearance }) => {

    return (
        <Col sm={4} md={4} className="mb-5">
            <Card>
                <Card.Img 
                    variant="top" 
                    src={`./assets/heroes/${ id }.jpg`} 
                    alt={ superhero }
                />
                <Card.Body>
                    <Card.Title>{ superhero }</Card.Title>
                    <Card.Subtitle>{ alter_ego }</Card.Subtitle>
                    {
                        (alter_ego !== characters) 
                            && <Card.Text>{ characters }</Card.Text>
                    }
                    <Card.Text>
                        <small className="text-muted">{ first_appearance }</small>
                    </Card.Text>

                    <Link to={ `/hero/${ id }` }>
                        More...
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    )
}
