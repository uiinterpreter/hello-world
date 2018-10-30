import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';

 
const routes: Routes = [
  { path : '',  redirectTo: '/home',pathMatch : 'full'},
  { path : 'home', component: HomeComponent},
  
];
let breadcrumb = [];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: "top"
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  constructor(private routes:Router){
    routes.events.subscribe((val:any) => {
      if(val.constructor.name === 'NavigationEnd'){
        if(val.url.indexOf('search') !== -1){
          breadcrumb.push(val.url);
        }else{
          breadcrumb.push(val.url);
        }
      }
    });
  }
}