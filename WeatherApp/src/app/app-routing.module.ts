import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  {path: ":id", component: DetailpageComponent},
  {path: '', component: HomepageComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
