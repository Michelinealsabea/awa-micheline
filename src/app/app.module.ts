import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BooksComponent } from './books/books.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {
     path: 'home',
     component: HomeComponent
  },
  {
     path: 'trainers',
     component: UsersComponent
  },
  {
    path: 'courses',
    component: BooksComponent
 }
 ,  {
  path: 'about',
  component: AboutComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BooksComponent,
    UsersComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
