import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './_components/main/main.component';
import {MainComponent as AdminMainComponent} from './_components/admin/main.component';
import {HeaderComponent} from './_components/main/header/header.component';
import {FooterComponent} from './_components/main/footer/footer.component';
import {ContentComponent} from './_components/main/content/content.component';
import {RegisterComponent} from './_components/main/register/register.component';
import {AuthComponent} from './_components/main/auth/auth.component';
import {ForgetPasswordComponent} from './_components/main/forget-password/forget-password.component';
import {UserCabinetComponent} from './_components/user-cabinet/user-cabinet.component';
import {SidebarComponent} from './_components/user-cabinet/sidebar/sidebar.component';
import {LogoutComponent} from './_components/user-cabinet/header/logout/logout.component';
import {LogListComponent} from './_components/admin/content/log-list/log-list.component';
import {StatisticComponent} from './_components/admin/content/statistic/statistic.component';
import {BackendInterceptor} from './_helpers/backend-interceptor';
import {UserService} from './_services/user.service';
import {BackendData} from './_helpers/backend-data';
import {AuthenticationService} from './_services/authentication.service';
import {CarsComponent} from './_components/user-cabinet/content/cars/cars.component';
import {AddCarFormComponent} from './_components/user-cabinet/content/add-car-form/add-car-form.component';
import {FinesComponent} from './_components/user-cabinet/content/fines/fines.component';
import {SettingsComponent} from './_components/user-cabinet/content/settings/settings.component';
import {MatCardModule, MatTableModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/typings/paginator';
import {MaterialDesignModule} from './_modules/material-design.module';
import { IsIdDirective } from './_components/user-cabinet/content/fines/is-id.directive';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AdminMainComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    RegisterComponent,
    AuthComponent,
    ForgetPasswordComponent,
    UserCabinetComponent,
    SidebarComponent,
    LogoutComponent,
    LogListComponent,
    StatisticComponent,
    CarsComponent,
    AddCarFormComponent,
    FinesComponent,
    SettingsComponent,
    IsIdDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    MatCardModule
  ],
  providers: [
    UserService,
    BackendData,
    BackendInterceptor,
    // AuthenticationService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: BackendInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
