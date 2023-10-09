import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';
import { appEmailValidator } from 'src/app/shared/validators/app-email-validator';
import { UserService } from '../user.service';

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
export class ProfileComponent implements OnInit {

  constructor
    (private formBuilder: FormBuilder,
      private userService: UserService) { }

  ngOnInit(): void {
    const { username, email, tel } = this.userService.user!;
    this.profileDetails = {
      username,
      email,
      tel
    }

    this.editProfileForm.setValue({
      username,
      email,
      tel,
    })
  }

  editProfileForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, appEmailValidator(DEFAULT_EMAIL_DOMAINS)]],
    tel: ['', []],
  })

  isEditMode: boolean = false;

  profileDetails: Profile = {
    username: '',
    email: '',
    tel: ''
  }

  toggledEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }

  editProfile(): void {

    this.profileDetails = { ...this.editProfileForm.value } as Profile;

    const { username, email, tel } = this.editProfileForm.value;

    this.userService.editProfile(username!, email!, tel!).subscribe(() => {
      this.toggledEditMode();
    })
  }
}