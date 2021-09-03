import { heroes } from "../data/heros";

export const getHeroesByPublisher = ( publisher )=> {
    const validPublisher = ['DC Comics','Marvel Comics'];

    if( !validPublisher.includes( publisher )){
        throw new Error(`Publisher "${ publisher }" isn't valid`);
    }

    return heroes.filter( hero => hero.publisher === publisher );
}