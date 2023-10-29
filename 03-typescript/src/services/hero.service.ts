import { heroes } from "../data/heroes";

export const finHeroById = (id: number) => {
    return heroes.find( (hero) => hero.id === id);
}