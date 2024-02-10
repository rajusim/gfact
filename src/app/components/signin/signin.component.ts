import { Component } from '@angular/core';
import { faFacebookF, faLinkedinIn, faGithub, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLock, faUser, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators}  from '@angular/forms';
import { CommonModule } from '@angular/common';
import Validation from '../../helpers/validations';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {

  type: string = "password";
  isText: boolean = false;

  facebookIcon = faFacebookF;
  linkedInIcon = faLinkedinIn;
  faGithubIcon = faGithub;
  twitterIcon = faTwitter;
  googleIcon = faGoogle;
  userIcon = faUser;
  lockIcon = faLock;
  eyeSlashIcon = faEyeSlash;
  submitted = false;

  signInForm = this.formBuilder.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })

  constructor(private formBuilder: FormBuilder) {}

  hideshowPassword()
  {
    this.isText = !this.isText;
    this.isText? this.eyeSlashIcon = faEye : this.eyeSlashIcon = faEyeSlash
    this.isText? this.type = "text" :this.type = "password"
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.signInForm.invalid) {
      Validation.validateAllFromFields(this.signInForm);
      return;
    }
    console.log(JSON.stringify(this.signInForm.value, null, 2));
  }
 
}

