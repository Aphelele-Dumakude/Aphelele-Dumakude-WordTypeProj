import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WordTypeComponent } from './components/word-type/word-type.component';
import { BannerComponent } from './components/banner/banner.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DisplaySentanceComponent } from './components/display-sentance/display-sentance.component';
import { HomeTwoComponent } from './components/home-two/home-two.component';

const routes: Routes = [
  
  {path:'word', component:WordTypeComponent},
  {path:'', component:BannerComponent},
  {path:'signIn', component:SignInComponent},
  {path:'signUp', component:SignUpComponent},
  {path:'sentences', component:DisplaySentanceComponent},
  {path:'home-Two', component:HomeTwoComponent}

   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
