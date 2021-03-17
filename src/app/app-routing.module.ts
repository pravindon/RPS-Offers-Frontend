import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { PageNotFindComponent } from './shared/components/page-not-find/page-not-find.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin', loadChildren: ()=> import('./admin/admin.module').then(mod => mod.AdminModule) },
  { path: 'superAdmin', loadChildren: () => import('./super-admin/super-admin.module').then(m => m.SuperAdminModule) },
  { path: '**', component: PageNotFindComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
