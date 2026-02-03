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
}
