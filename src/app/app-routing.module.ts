import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { ListofCustomersComponent } from './components/listof-customers/listof-customers.component';
import { UpdateDocumentsComponent } from './components/update-documents/update-documents.component';
import { HelpComponent } from './components/help/help.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AddcustomerComponent } from './components/addcustomer/addcustomer.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  {path:'profile', component:ProfileComponent},
  {path:'landing',component:LandingPageComponent},
  {path:'listofcustomers', component:ListofCustomersComponent},
  {path:'updatedocuments', component:UpdateDocumentsComponent},
  {path:'help', component: HelpComponent},
  {path:'settings', component:SettingsComponent},
  {path:'logout', component:LogoutComponent},
  {path:'addcustomer',component:AddcustomerComponent},
  {path:'**', redirectTo:'/landing', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
