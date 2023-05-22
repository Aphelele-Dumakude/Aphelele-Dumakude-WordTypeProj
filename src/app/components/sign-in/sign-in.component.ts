import { Component } from '@angular/core';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(private router: Router){}

//   btnClick=  () => {
//     // this.router.navigateByUrl('/user');
//     this.router.navigateByUrl('signUp');
// };

}
