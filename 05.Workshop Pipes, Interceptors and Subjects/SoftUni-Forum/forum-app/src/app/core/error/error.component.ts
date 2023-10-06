import { Component, OnInit } from '@angular/core';
import { ErrorService } from './error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit{

  errorMsg = '';

  constructor(private errorService: ErrorService) {}
  
  apiError$ = this.errorService.apiError$$.asObservable();

  ngOnInit(): void {
    this.apiError$.subscribe((error: any) => {
      this.errorMsg = error.message;
    })
  }

}
