export class AvatarService {
    public static generateAvatar(gender: string, name: string): string {
        return 'I will generate an avatar for name: ' + name + ' and gender: ' + gender;
    }
}