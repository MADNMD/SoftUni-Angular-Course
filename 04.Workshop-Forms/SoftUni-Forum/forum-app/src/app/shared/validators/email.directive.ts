import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { appEmailValidator } from './app-email-validator';

// EmailDirective трябва да се export-не в shared модула и shared модула го импортваме в user модула;

@Directive({
  selector: '[appEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailDirective,
      multi: true
    }
  ]
})
export class EmailDirective implements Validator, OnChanges {

  @Input() appEmail: string[] = [];// когато искаме да подадем стойност на наща директива правим Input

  validator: ValidatorFn = () => null;

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.validator(control);
  }

  ngOnChanges(changes: SimpleChanges): void { // на всяка промяна ще прилагеме валидатоа 
    const currentEmailChanges = changes['appEmail'];
    if (currentEmailChanges) {
      this.validator = appEmailValidator(currentEmailChanges.currentValue);
    }
  }
}