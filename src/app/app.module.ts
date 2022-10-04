import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OwnerComponent } from './owner/owner.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PetTypeComponent } from './pet-type/pet-type.component';
import { OwnerCardComponent } from './owner-card/owner-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OwnerComponent,
    NavbarComponent,
    FooterComponent,
    PetTypeComponent,
    OwnerCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
