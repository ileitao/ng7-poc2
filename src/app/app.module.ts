import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { AppRoutingModule }   from './app-routing.module';
import { HttpClientModule}    from '@angular/common/http';
import { AppComponent }       from './app.component';
import { UsersGridComponent } from './users-grid/users-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
