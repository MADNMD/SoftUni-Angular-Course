import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../interfaces/theme';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})
export class ThemesListComponent implements OnInit {

  themesList: Theme[] = [];
  isLoading: boolean = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {

    this.apiService.getThemes().subscribe({ // Вариант в който хващаме ако има грешка;
      next: (themes) => {
        this.themesList = themes;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.log(`Error ${err}`);
        
      }
    });
    // this.apiService.getThemes().subscribe(themes => {  // По лесен вариант без хващане на грешка
    //   this.themesList = themes; 
    //   // console.log(themes);
    // });
  }
}
