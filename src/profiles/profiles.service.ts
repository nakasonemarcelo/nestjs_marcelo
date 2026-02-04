import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import type { CreateProfileDto } from './dto/create-profile.dto';
import type { UpdateProfileDto } from './dto/update-profile.dto';


@Injectable()
export class ProfilesService {
  private profiles = [
    {
      id: "92a1c06b-8e81-487f-b7b6-5a4dc9005526",
      name: 'Maya Solace',
      age: 28,
      description: 'Urban beekeeper and late-night jazz pianist who crafts honey-infused melodies.'
    },
    {
      id: "d08c86ae-9cc5-403b-bac1-2f564d214371",
      name: 'Tom Mouna Bundja',
      age: 42,
      description: 'Experimental cartographer mapping imagined cities with augmented-reality ink.'
    },
    {
      id: "2b14e37b-9cad-4dcb-af73-e5579ab702d9",
      name: 'Zara Meridian',
      age: 35,
      description: 'Nocturnal botanist cultivating bioluminescent gardens beneath city rooftops.'
    },
    {
      id: "ebc323a4-4554-48c4-9492-e9516249fa16",
      name: 'Liam Voss',
      age: 30,
      description: 'Cybernetic sculptor blending metal and emotion to create living art installations.'
    },
    {
      id: "5f8b68b7-1caa-49d2-8e46-c8ecb0e724f1",
      name: 'Elara Finch',
      age: 25,
      description: 'Time-traveling historian documenting forgotten moments through immersive VR experiences.'
    },
    {
      id: "99c81094-742e-4ae4-8d03-e692fc916062",
      name: 'Mujara Kabajo',
      age: 38,
      description: 'Quantum physicist who experiments with consciousness-altering meditation techniques.'
    },
  ];

  findAll() {
    return this.profiles;
  }

  findOne(id: string) {
    const matchingProfile = this.profiles.find(profile => profile.id === id);
    if (!matchingProfile) {
      throw new Error(`Profile with ID ${id} not found`);
    }
    return matchingProfile;
  }

  create(createProfileDto: CreateProfileDto) {
    const createdProfile = {
      id: randomUUID(),
      ...createProfileDto,
    };

    this.profiles.push(createdProfile);
    return createdProfile;
  }

  update(id: string, updateProfileDto: UpdateProfileDto) {
    const matchingProfile = this.profiles.find(existingProfile => existingProfile.id === id);

    if (!matchingProfile) {
      throw new NotFoundException(`Profile with ID ${id} not found`);
    }

    matchingProfile.name = updateProfileDto.name;
    matchingProfile.age = updateProfileDto.age;
    matchingProfile.description = updateProfileDto.description;

    return matchingProfile;
  }

  remove(id: string) {
    const matchingProfileIndex = this.profiles.findIndex(existingProfile => existingProfile.id === id
    );

    if (matchingProfileIndex === -1) {
      throw new NotFoundException(`Profile with ID ${id} not found`);
    }

    else {
      this.profiles.splice(matchingProfileIndex, 1);
    }
  }
}