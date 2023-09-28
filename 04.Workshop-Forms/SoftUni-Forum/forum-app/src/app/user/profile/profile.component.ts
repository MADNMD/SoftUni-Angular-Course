import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';
import { appEmailValidator } from 'src/app/shared/validators/app-email-validator';

interface Profile {
  username: string,
  email: string,
  tel: string,
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private formBuilder: FormBuilder) { }

  editProfileForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, appEmailValidator(DEFAULT_EMAIL_DOMAINS)]],
    tel: ['', []],
  })

  isEditMode: boolean = false;

  profileDetails: Profile = {
    username: 'Mihso',
    email: 'misho123@gmail.com',
    tel: '12345666'
  }

  toggledEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }

  editProfile(): void {

    this.profileDetails = {...this.editProfileForm.value} as Profile;

    this.toggledEditMode();
  }

}
