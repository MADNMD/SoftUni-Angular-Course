//Когато ги създадем ги слагаме в api.service.ts --- get<Theme[]>

import { Post } from './post';
import { User } from './userId'

export interface Theme {
    subscribers: string[],
    posts: Post[], // тук го добавям за да мога да го виждам в current-them.component.html и да го рендя;
    _id: string,
    themeName: string,
    userId: User,
    created_at: string,
    updatedAt: string,
    __v: number,
}