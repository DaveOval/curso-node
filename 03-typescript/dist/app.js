"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hero_service_1 = require("./services/hero.service");
const hero = (0, hero_service_1.finHeroById)(3);
console.log(hero === null || hero === void 0 ? void 0 : hero.name);
