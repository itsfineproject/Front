import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './components/ui/main/main.component';
import { HeaderComponent } from './components/ui/header/header.component';
import { FooterComponent } from './components/ui/footer/footer.component';
import { ContentComponent } from './components/ui/content/content.component';
import { RegisterComponent } from './components/ui/register/register.component';
import { AuthComponent } from './components/ui/auth/auth.component';
import { ForgetPasswordComponent } from './components/ui/forget-password/forget-password.component';
import { AdminComponent } from './components/ui/admin/admin.component';
import { SidebarComponent } from './components/ui/admin/sidebar/sidebar.component';
import { ChangePasswordComponent } from './components/ui/admin/change-password/change-password.component';
import { LogoutComponent } from './components/ui/admin/logout/logout.component';
import { SuperAdminComponent } from './components/admin/main/super-admin/super-admin.component';
import { UserAddFormComponent } from './components/admin/main/superAdmin/user-add-form/user-add-form.component';
import { UserListComponent } from './components/admin/main/superAdmin/user-list/user-list.component';
import { LogListComponent } from './components/admin/main/log-list/log-list.component';
import { StatisticComponent } from './components/admin/main/statistic/statistic.component';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
