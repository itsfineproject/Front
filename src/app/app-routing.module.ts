import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./_components/ui/main/main.component";
import {AdminComponent} from "./_components/ui/admin/admin.component";

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'admin', component: AdminComponent },
  { path: 'api', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
