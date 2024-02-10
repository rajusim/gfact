import { Component } from '@angular/core';
import { faFacebookF, faLinkedinIn, faGithub, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLock, faUser, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators}  from '@angular/forms';
import { CommonModule } from '@angular/common';
import Validation from '../../helpers/validations';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, ReactiveFormsModule, CommonModule],  
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  type: string = "password";
  isText: boolean = false;
  eyeSlashIcon = faEyeSlash;
  submitted = false;

  signUpForm = this.formBuilder.group({
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    email:['',Validators.required],
    username:['',Validators.required],
    password:['',Validators.required],
    confirmPassword:['',Validators.required]
  })

  constructor(private formBuilder: FormBuilder) {}
  
  hideshowPassword()
  {
    this.isText = !this.isText;
    this.isText? this.eyeSlashIcon = faEyeSlash : this.eyeSlashIcon = faEye
    this.isText? this.type = "text" :this.type = "password"
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.signUpForm.invalid) {
        Validation.validateAllFromFields(this.signUpForm);
      return;
    }
    console.log(JSON.stringify(this.signUpForm.value, null, 2));
  }
  
}
