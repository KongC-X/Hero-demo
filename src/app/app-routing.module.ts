import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisListComponent } from './router-study/crisis-center/crisis-list/crisis-list.component';
import { HeroListComponent } from './router-study/heroes/hero-list/hero-list.component';
import { NotFoundComponent } from './router-study/not-found/not-found.component';

const routes: Routes = [
  // { path: 'crisis-center', component: CrisisListComponent },
  // { path: 'heroes', component: HeroListComponent },
  { path:'', redirectTo:'/heroes',pathMatch:'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
