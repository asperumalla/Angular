import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { Routes, RouterModule} from '@angular/router'

const appRoutes : Routes = [
  { path : 'home', component : HomeComponent},
  { path : 'users/:id', component : UsersComponent 
},
  { path : 'servers', component : ServersComponent  }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(  appRoutes )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
