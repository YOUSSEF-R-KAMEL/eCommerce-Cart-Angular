import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { Router, RouterModule } from '@angular/router';
import { SelectComponent } from './components/select/select.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FormsModule } from '@angular/forms';
import { DarkModeComponent } from './components/dark-mode/dark-mode.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SelectComponent,
    SpinnerComponent,
    DarkModeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SelectComponent,
    SpinnerComponent,
    DarkModeComponent,
    FormsModule,
    RouterModule

  ]
})
export class SharedModule { }
