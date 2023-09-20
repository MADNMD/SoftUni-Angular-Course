import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css']
})
export class NewThemeComponent {

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router: Router) { }

  createThemeForm: FormGroup = this.formBuilder.group({

    themeName: new FormControl('', []),
    postText: new FormControl('', []),

  });

  createTheme(): void {

    const {themeName, postText} = this.createThemeForm.value;
    const token = localStorage.getItem('[user]');
    const headers = new Headers({ 'Authorization': '{email: "misho-donchev@gmail.com", firstName: "Mihail"}' })
    this.apiService.createTheme(themeName, postText).subscribe(() => {
     this.router.navigateByUrl('/themes');
    })
  }
}
