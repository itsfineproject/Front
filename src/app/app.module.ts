import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from "./app-routing.module";

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { MainComponent } from './_components/ui/main/main.component';
import { HeaderComponent } from './_components/ui/header/header.component';
import { FooterComponent } from './_components/ui/footer/footer.component';
import { ContentComponent } from './_components/ui/content/content.component';
import { RegisterComponent } from './_components/ui/register/register.component';
import { AuthComponent } from './_components/ui/auth/auth.component';
import { ForgetPasswordComponent } from './_components/ui/forget-password/forget-password.component';
import { AdminComponent } from './_components/ui/admin/admin.component';
import { SidebarComponent } from './_components/ui/admin/sidebar/sidebar.component';
import { ChangePasswordComponent } from './_components/ui/admin/change-password/change-password.component';
import { LogoutComponent } from './_components/ui/admin/logout/logout.component';
import { SuperAdminComponent } from './_components/admin/main/super-admin/super-admin.component';
import { UserAddFormComponent } from './_components/admin/main/superAdmin/user-add-form/user-add-form.component';
import { UserListComponent } from './_components/admin/main/superAdmin/user-list/user-list.component';
=======
import { MainComponent } from './_components/main/main.component';
import {MainComponent as AdminMainComponent} from "./_components/admin/main/main.component";
import { HeaderComponent } from './_components/main/header/header.component';
import { FooterComponent } from './_components/main/footer/footer.component';
import { ContentComponent } from './_components/main/content/content.component';
import { RegisterComponent } from './_components/main/register/register.component';
import { AuthComponent } from './_components/main/auth/auth.component';
import { ForgetPasswordComponent } from './_components/main/forget-password/forget-password.component';
import { UserCabinetComponent } from './_components/ui/user-cabinet/user-cabinet.component';
import { SidebarComponent } from './_components/ui/user-cabinet/sidebar/sidebar.component';
import { LogoutComponent } from './_components/ui/user-cabinet/header/logout/logout.component';
>>>>>>> develop
import { LogListComponent } from './_components/admin/main/log-list/log-list.component';
import { StatisticComponent } from './_components/admin/main/statistic/statistic.component';
import {BackendInterceptor} from "./_helpers/backend-interceptor";
import {UserService} from "./_services/user.service";
<<<<<<< HEAD
import {BackendData} from "./_helpers/fake-api/backend-data"
=======
import {BackendData} from "./_helpers/backend-data"
import {AuthenticationService} from "./_services/authentication.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddAdminFormComponent } from './_components/admin/main/add-admin-form/add-admin-form.component';
import { CarsComponent } from './_components/ui/user-cabinet/content/cars/cars.component';
import { AddCarFormComponent } from './_components/ui/user-cabinet/content/add-car-form/add-car-form.component';
import { FinesComponent } from './_components/ui/user-cabinet/content/fines/fines.component';
import { SettingsComponent } from './_components/ui/user-cabinet/content/settings/settings.component';
>>>>>>> develop


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
<<<<<<< HEAD
=======
    AdminMainComponent,
>>>>>>> develop
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    RegisterComponent,
    AuthComponent,
    ForgetPasswordComponent,
<<<<<<< HEAD
    AdminComponent,
    SidebarComponent,
    ChangePasswordComponent,
    LogoutComponent,
    SuperAdminComponent,
    UserAddFormComponent,
    UserListComponent,
    LogListComponent,
    StatisticComponent
=======
    UserCabinetComponent,
    SidebarComponent,
    LogoutComponent,
    LogListComponent,
    StatisticComponent,
    AddAdminFormComponent,
    CarsComponent,
    AddCarFormComponent,
    FinesComponent,
    SettingsComponent
>>>>>>> develop
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
<<<<<<< HEAD
    AppRoutingModule
=======
    AppRoutingModule,
    BrowserAnimationsModule
>>>>>>> develop
  ],
  providers: [
    UserService,
    BackendData,
    BackendInterceptor,
<<<<<<< HEAD
=======
    AuthenticationService,
>>>>>>> develop
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BackendInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
