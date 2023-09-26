import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { Theme } from './interfaces/theme';
import { Post } from './interfaces/post';

const appUlr = environment.appUrl;

@Injectable({
  providedIn: 'root'
})

//Трябва в app.module.ts да си добавим HttpClientModule - import { HttpClientModule } from '@angular/common/http';
// Трябва и да си създадем environments къде да си сложим URL към който ще правим заявките;

export class ApiService {

  constructor(private http: HttpClient) { }

  getTheme(id: string) {
    return this.http.get<Theme>(`${appUlr}/themes/${id}`);
  }

  getThemes() {
    return this.http.get<Theme[]>(`${appUlr}/themes`);
  }

  getPosts(limit?: number) {
    return this.http.get<Post[]>(`${appUlr}/posts${limit ? `?limit=${limit}` : ''}`);
  }

  createTheme(name: string, text: string) {
    return this.http.post<Post>(`${appUlr}/themes`, { themeName: name, postText: text });
  }
}
