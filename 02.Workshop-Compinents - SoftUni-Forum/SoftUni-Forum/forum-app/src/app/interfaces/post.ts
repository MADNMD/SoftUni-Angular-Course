//Когато ги създадем ги слагаме в api.service.ts --- get<Post[]>

import { User } from './user';
import { Theme } from './theme';

export interface Post {
    likes: string[],
    _id: string,
    text: string,
    userId: User,
    themeId: Theme,
    created_at: string,
    updatedAt: string,
    __v: number,
}