import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([])  // Використовуємо порожній масив, якщо маршрутизація не потрібна
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
