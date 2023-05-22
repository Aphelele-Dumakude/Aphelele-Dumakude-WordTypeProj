import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddwordComponent } from './components/addword/addword.component';
import {BannerComponent} from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import {HttpClientModule} from '@angular/common/http';
import { WordTypeComponent } from './components/word-type/word-type.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { AddWordDialogComponent } from './components/add-word-dialog/add-word-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DisplaySentanceComponent } from './components/display-sentance/display-sentance.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { NavbarTwoComponent } from './components/navbar-two/navbar-two.component';
import { HomeTwoComponent } from './components/home-two/home-two.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AddwordComponent,
    NavbarComponent,
    BannerComponent,
    AboutComponent,
    WordTypeComponent,
    AddWordDialogComponent,
    SignInComponent,
    SignUpComponent,
    DisplaySentanceComponent,
    NavbarTwoComponent,
    HomeTwoComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
