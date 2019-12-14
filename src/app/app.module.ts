import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from "./app-routing.module";

import { AppComponent } from './app.component';
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
import { LogListComponent } from './_components/admin/main/log-list/log-list.component';
import { StatisticComponent } from './_components/admin/main/statistic/statistic.component';
import {BackendInterceptor} from "./_helpers/backend-interceptor";
import {UserService} from "./_services/user.service";
import {BackendData} from "./_helpers/fake-api/backend-data"


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    RegisterComponent,
    AuthComponent,
    ForgetPasswordComponent,
    AdminComponent,
    SidebarComponent,
    ChangePasswordComponent,
    LogoutComponent,
    SuperAdminComponent,
    UserAddFormComponent,
    UserListComponent,
    LogListComponent,
    StatisticComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    BackendData,
    BackendInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BackendInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
