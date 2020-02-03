
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './_components/main/main.component';
import {MainComponent as AdminMainComponent} from './_components/admin/main.component';
import {CarsComponent} from './_components/user-cabinet/content/cars/cars.component';
import {FinesComponent} from './_components/user-cabinet/content/fines/fines.component';
import {AddCarFormComponent} from './_components/user-cabinet/content/add-car-form/add-car-form.component';
import {UserCabinetComponent} from './_components/user-cabinet/user-cabinet.component';
import {SettingsComponent} from './_components/user-cabinet/content/settings/settings.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'user-cabinet', component: UserCabinetComponent},
  {path: ':id/cars', component: CarsComponent},
  {path: 'car/:carNumber', component: FinesComponent},
  {path: 'admin', component: AdminMainComponent},
  {path: ':id/newCar', component: AddCarFormComponent},
  {path: ':carId/fines', component: FinesComponent},
  {path: ':id/settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
