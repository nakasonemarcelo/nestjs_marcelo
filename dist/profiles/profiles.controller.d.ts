import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';
export declare class ProfilesController {
    private readonly profilesService;
    constructor(profilesService: ProfilesService);
    findAll(): {
        id: string;
        name: string;
        age: number;
        description: string;
    }[];
    findOne(id: string): {
        id: string;
        name: string;
        age: number;
        description: string;
    } | undefined;
    create(createProfileDto: CreateProfileDto): {
        name: string;
        age: number;
        description: string;
    };
    update(id: string, updateProfileDto: UpdateProfileDto): {
        name?: string;
        age?: number;
        description?: string;
        id: string;
    };
    remove(id: string): {
        id: string;
    };
}
