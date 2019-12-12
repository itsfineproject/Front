import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  //{ path: '', component: MainComponent},
  //{ path: 'provider-full/:id', component: ProviderFullComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
