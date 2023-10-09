import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';
import { appEmailValidator } from 'src/app/shared/validators/app-email-validator';
import { matchPasswordValidators } from 'src/app/shared/validators/match-password-validators';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  registerForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, appEmailValidator(DEFAULT_EMAIL_DOMAINS)]],
    tel: [''],
    passwordGroup: this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePassword: ['', [Validators.required]],
    },
      {
        validators: [matchPasswordValidators('password', 'rePassword')]
      })
  })

  register() {
    if (this.registerForm.invalid) {
      return;
    }

    const { username, email, tel, passwordGroup: { password, rePassword } = {} } = this.registerForm.value;

    this.userService.register(username!, email!,  password!, rePassword!, tel!).subscribe(() => {
      this.router.navigateByUrl('/themes')
    })

  }

}
