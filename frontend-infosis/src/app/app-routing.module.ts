import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './car/car.component';
import { EditcarComponent } from './editcar/editcar.component';


const routes: Routes = [
  { path: 'car', component: CarComponent },
  { path: 'editcar', component: EditcarComponent },
  { path: 'editcar/:id', component: EditcarComponent },
  { path: '**',   redirectTo: '/car', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
