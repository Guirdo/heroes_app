import { useMemo } from "react";
import { Row,Col,ListGroup,Button } from "react-bootstrap";
import { Redirect, useParams } from "react-router-dom"
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = ({ history }) => {

    const { heroId } = useParams();

    const hero = useMemo(
        () => getHeroById(heroId), 
        [ heroId ]
    );

    if( !hero ){
        return <Redirect to="/" />
    }

    const handleReturn = () => {
        history.length <= 2 ? 
            history.push('/') :
            history.goBack();
    }

    const { superhero, publisher,alter_ego,first_appearance, characters } = hero;

    return (
        <Row className="justify-content-around mt-5">
            <Col md={4}>
                <img 
                    src={`../assets/heroes/${ heroId }.jpg`} 
                    alt={ superhero } 
                    className="img-thumbnail animate__animated animate__backInUp"
                    />
            </Col>

            <Col md="6">
                <h3>{ superhero }</h3>
                <ListGroup>
                    <ListGroup.Item><b>Alter ego: </b>{ alter_ego }</ListGroup.Item>
                    <ListGroup.Item><b>Publisher: </b>{ publisher }</ListGroup.Item>
                    <ListGroup.Item><b>First appearance: </b>{ first_appearance }</ListGroup.Item>
                </ListGroup>

                <h5 className="mt-3">Characters</h5>
                <p>{ characters }</p>

                <Button 
                    variant="outline-info"
                    onClick={ handleReturn }
                >
                    Return
                </Button>
            </Col>
        </Row>
    )
}
