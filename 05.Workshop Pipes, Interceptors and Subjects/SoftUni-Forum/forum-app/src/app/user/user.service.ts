import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {

  private user$$ = new BehaviorSubject<User | undefined>(undefined);

  user$ = this.user$$.asObservable();

  USER_KEY = '[user]';

  user: User | undefined;

  get isLogged() {
    return !!this.user;
  }

  subscription: Subscription;

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe((user) => { // субскрайва ме се за Observable;
      this.user = user; // сетваме си че имам user за get isLogged() ;
    })
  }

  login(email: string, password: string) {

    return this.http.post<User>('/api/login', { email, password })
      .pipe(tap((user) => this.user$$.next(user)));// връщаме Observable

  }

  register(username: string, email: string, password: string, rePassword: string, tel: string) {

    return this.http.post<User>('/api/register', { username, email, password, rePassword, tel })
      .pipe(tap((user) => this.user$$.next(user)));// когато се регистримае направо сме логнати;

  }

  logout() {
    return this.http.post<User>('/api/logout', {})
      .pipe(tap(() => this.user$$.next(undefined)));
  }

  getProfile() { //това е за user-a за authenticated component
    return this.http.get<User>('/api/users/profile')
      .pipe(tap((user) => this.user$$.next(user)));
  }

  editProfile(username: string, email: string, tel: string) {
    return this.http.put<User>('/api/users/profile', { username, email, tel })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
