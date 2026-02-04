import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';
import type { UUID } from 'crypto';
export declare class ProfilesController {
    private readonly profilesService;
    constructor(profilesService: ProfilesService);
    findAll(): {
        id: string;
        name: string;
        age: number;
        description: string;
    }[];
    findOne(id: UUID): {
        id: string;
        name: string;
        age: number;
        description: string;
    };
    create(createProfileDto: CreateProfileDto): {
        name: string;
        age: number;
        description: string;
        id: `${string}-${string}-${string}-${string}-${string}`;
    };
    update(id: UUID, updateProfileDto: UpdateProfileDto): {
        id: string;
        name: string;
        age: number;
        description: string;
    };
    remove(id: UUID): {
        id: `${string}-${string}-${string}-${string}-${string}`;
    };
}
