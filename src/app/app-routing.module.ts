import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CastComponent } from './cast/cast.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CastDetailsComponent } from './cast-detail/cast-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'castings', component: CastComponent },
  { path: 'detail/:id', component: CastDetailsComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule {
}
