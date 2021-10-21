import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EmployeehomepageComponent } from './employeehomepage/employeehomepage.component';
import { MusicianhomepageComponent } from './musicianhomepage/musicianhomepage.component';
import { UserhomepageComponent } from './userhomepage/userhomepage.component';
import { SongComponent } from './song/song.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { SongService } from './services/song.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EmployeehomepageComponent,
    MusicianhomepageComponent,
    UserhomepageComponent,
    SongComponent,
    CatalogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    SongService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
