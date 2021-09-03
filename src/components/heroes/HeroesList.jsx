import { useMemo } from 'react'
import { Row } from 'react-bootstrap';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroesList = ({ publisher }) => {

    const heroes = useMemo(
        () => getHeroesByPublisher(publisher), 
        [ publisher ]
    );

    return (
        <Row className="my-5 animate__animated animate__backInLeft">
            {
                heroes.map(hero => (
                    <HeroCard
                        key={hero.id}
                        {...hero}
                    />
                ))
            }
        </Row>
    )
}
