"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.finHeroById = void 0;
const heroes_1 = require("../data/heroes");
const finHeroById = (id) => {
    return heroes_1.heroes.find((hero) => hero.id === id);
};
exports.finHeroById = finHeroById;
