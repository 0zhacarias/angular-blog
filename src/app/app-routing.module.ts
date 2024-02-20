import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConteudosComponent } from './pages/conteudos/conteudos.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'conteudo',
    component:ConteudosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
