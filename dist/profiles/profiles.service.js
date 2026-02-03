"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilesService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
let ProfilesService = class ProfilesService {
    profiles = [
        { id: "92a1c06b-8e81-487f-b7b6-5a4dc9005526",
            name: 'Maya Solace',
            age: 28,
            description: 'Urban beekeeper and late-night jazz pianist who crafts honey-infused melodies.' },
        { id: "d08c86ae-9cc5-403b-bac1-2f564d214371",
            name: 'Dr. Cai Navarro',
            age: 42,
            description: 'Experimental cartographer mapping imagined cities with augmented-reality ink.' },
        { id: "2b14e37b-9cad-4dcb-af73-e5579ab702d9",
            name: 'Zara Meridian',
            age: 35,
            description: 'Nocturnal botanist cultivating bioluminescent gardens beneath city rooftops.' },
        { id: "ebc323a4-4554-48c4-9492-e9516249fa16",
            name: 'Liam Voss',
            age: 30,
            description: 'Cybernetic sculptor blending metal and emotion to create living art installations.' },
        { id: "5f8b68b7-1caa-49d2-8e46-c8ecb0e724f1",
            name: 'Elara Finch',
            age: 25,
            description: 'Time-traveling historian documenting forgotten moments through immersive VR experiences.' },
        { id: "99c81094-742e-4ae4-8d03-e692fc916062",
            name: 'Mujara Kabajo',
            age: 38,
            description: 'Quantum physicist who experiments with consciousness-altering meditation techniques.' },
    ];
    findAll() {
        return this.profiles;
    }
    findOne(id) {
        return this.profiles.find(profile => profile.id === id);
    }
    create(createProfileDto) {
        const newProfile = {
            id: (0, crypto_1.randomUUID)(),
            ...createProfileDto,
        };
        this.profiles.push(newProfile);
        return newProfile;
    }
    update(id, updateProfileDto) {
        const matchingProfile = this.profiles.findIndex(profile => profile.id === id);
        if (matchingProfile !== -1) {
            this.profiles[matchingProfile] = {
                ...this.profiles[matchingProfile],
                ...updateProfileDto
            };
        }
    }
};
exports.ProfilesService = ProfilesService;
exports.ProfilesService = ProfilesService = __decorate([
    (0, common_1.Injectable)()
], ProfilesService);
//# sourceMappingURL=profiles.service.js.map