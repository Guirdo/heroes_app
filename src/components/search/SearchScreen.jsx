import queryString from 'query-string';
import { useMemo } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q: query = '' } = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searching: query
    });

    const { searching } = formValues;

    const heroesFiltered = useMemo(
        () => getHeroesByName(query),
        [query]
    );

    const handleSearch = (e) => {
        e.preventDefault();

        history.push(`?q=${searching}`);
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <Row>
                <Col md={4}>
                    <h4>Search form</h4>

                    <Form onSubmit={handleSearch}>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="Find your hero"
                                name="searching"
                                value={searching}
                                autoComplete="off"
                                onChange={handleInputChange}
                            />
                            <Button
                                type="submit"
                                variant="primary"
                                className="btn-block"
                            >
                                Search
                            </Button>
                        </Form.Group>

                    </Form>

                </Col>

                <Col>
                    <h4>Results</h4>
                    <hr />

                    {
                        (query === '') 
                            && <div className="alert alert-info animate__animated animate__fadeInUp">
                            Search hero
                        </div>
                    }

{
                        (query !== '' && heroesFiltered.length === 0) 
                            && <div className="alert alert-danger animate__animated animate__fadeInUp">
                            There is no hero with { query }
                        </div>
                    }

                    <Row className="animate__animated animate__fadeInUp">
                        {
                            heroesFiltered.map(hero => (
                                <HeroCard
                                    key={hero.id}
                                    {...hero}
                                />
                            ))
                        }
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
