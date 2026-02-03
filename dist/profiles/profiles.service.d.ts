import { CreateProfileDto } from './dto/create-profile.dto';
export declare class ProfilesService {
    private profiles;
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
        id: `${string}-${string}-${string}-${string}-${string}`;
    };
}
