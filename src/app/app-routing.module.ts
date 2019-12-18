import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import {MainComponent} from "./_components/ui/main/main.component";
import {AdminComponent} from "./_components/ui/admin/admin.component";

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'admin', component: AdminComponent },
  { path: 'api', component: AdminComponent }
];
=======
import {MainComponent} from "./_components/main/main.component";
import {MainComponent as AdminMainComponent} from "./_components/admin/main/main.component";
import {UserCabinetComponent} from "./_components/ui/user-cabinet/user-cabinet.component";

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'user-cabinet', component: UserCabinetComponent },
  { path: 'admin', component: AdminMainComponent}
  ];
>>>>>>> develop

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
