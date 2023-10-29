import { finHeroById } from "./services/hero.service"


const hero = finHeroById ( 3 )

console.log( hero?.name );