import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ListofCustomersComponent } from './components/listof-customers/listof-customers.component';
import { UpdateDocumentsComponent } from './components/update-documents/update-documents.component';
import { HelpComponent } from './components/help/help.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HeaderComponent } from './components/header/header.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProfileComponent,
    ListofCustomersComponent,
    UpdateDocumentsComponent,
    HelpComponent,
    SettingsComponent,
    LogoutComponent,
    HeaderComponent,
    AddcustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
