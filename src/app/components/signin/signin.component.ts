import { Component } from '@angular/core';
import { faFacebookF, faLinkedinIn, faGithub, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLock, faUser, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators}  from '@angular/forms';
import { CommonModule } from '@angular/common';
import Validation from '../../helpers/validations';
import { AuthorisationService } from '../../services/authorisation.service';

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

  constructor(private formBuilder: FormBuilder, 
              private auth: AuthorisationService,
              private router : Router) {}
            

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
    this.auth.signIn(this.signInForm.value)
    .subscribe({
      next:(res)=>{
        alert(res.message);
        this.signInForm.reset();
        this.auth.storeToken(res.token);
        this.router.navigate(['dashboard']);
      },
      error:(err)=>{
        alert(err?.error.message);
      } 
    })
    console.log(JSON.stringify(this.signInForm.value, null, 2));
  }
 
}

