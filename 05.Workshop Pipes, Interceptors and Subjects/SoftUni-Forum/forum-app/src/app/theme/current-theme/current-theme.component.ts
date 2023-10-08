import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/interfaces/theme';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.css']
})
export class CurrentThemeComponent implements OnInit{

  theme: Theme | undefined;

  constructor(private apiService: ApiService, private activatedRouter: ActivatedRoute, private userService: UserService) { }

  get isLogged(): boolean{
      return this.userService.isLogged;
  }

  ngOnInit(): void {
    this.fetchTheme()
  }

  fetchTheme(): void {

    const themeId = this.activatedRouter.snapshot.params['themeId'];

    this.apiService.getTheme(themeId).subscribe(currentTheme => {
      this.theme = currentTheme;
      console.log(this.theme);
    })
  }

}
