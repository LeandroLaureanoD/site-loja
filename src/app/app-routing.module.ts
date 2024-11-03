import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
    { path: 'home', loadChildren: () => import('./componentes/componentes.module').then(m => m.ComponentesModule) },
    { path: '', redirectTo: '/home', pathMatch: 'full' } // Redireciona para '/home' por padrão
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
