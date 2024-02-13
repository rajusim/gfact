import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators}  from '@angular/forms';
import { CommonModule } from '@angular/common';
import Validation from '../../helpers/validations';
import { AuthorisationService } from '../../services/authorisation.service';
import { ModelpopupComponent } from '../popups/modelpopup/modelpopup.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, ReactiveFormsModule, CommonModule, ModelpopupComponent],  
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

  constructor(private formBuilder: FormBuilder, private auth: AuthorisationService) {}
  
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
    this.auth.signUp(this.signUpForm.value)
    .subscribe({
      next:(res)=>{
        alert(res.message)
        this.signUpForm.reset();
      },
      error:(err)=>{
        alert(err?.error.message);
      } 
    })    
    console.log(JSON.stringify(this.signUpForm.value, null, 2));
  }
}
