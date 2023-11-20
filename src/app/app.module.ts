import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { LeftInputComponent } from './left-input/left-input.component';
import { RightInputComponent } from './right-input/right-input.component';
import { LeftSelectComponent } from './left-select/left-select.component';
import { RightSelectComponent } from './right-select/right-select.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftInputComponent,
    RightInputComponent,
    LeftSelectComponent,
    RightSelectComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
