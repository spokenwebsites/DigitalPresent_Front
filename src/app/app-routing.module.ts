import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { E401Component } from './e401/e401.component';
import { E404Component } from './e404/e404.component';
import { AboutComponent } from './about/about.component';
import { DashComponent } from './dash/dash.component';
import { Details0Component } from './details0/details0.component';
import { Details1Component } from './details1/details1.component';
import { Details2Component } from './details2/details2.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { ListsDateComponent } from './lists-date/lists-date.component';
import { ListsHostsComponent } from './lists-hosts/lists-hosts.component';
import { ListsLangComponent } from './lists-lang/lists-lang.component';
import { ListsLocComponent } from './lists-loc/lists-loc.component';
import { ListsOrgComponent } from './lists-org/lists-org.component';
import { ListsXComponent } from './lists-x/lists-x.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Viz1Component } from './viz1/viz1.component';
import { Viz2Component } from './viz2/viz2.component';
import { Viz3Component } from './viz3/viz3.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'dash', component: DashComponent },
  { path: 'details0', component: Details0Component },
  { path: 'details1', component: Details1Component },
  { path: 'details2', component: Details2Component },
  { path: 'e401', component: E404Component },
  { path: 'e404', component: E401Component },
  { path: 'footer', component: FooterComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'help', component: HelpComponent },
  { path: '', component: HomeComponent },
  { path: 'lists', component: ListsComponent },
  { path: 'lists-date', component: ListsDateComponent },
  { path: 'lists-hosts', component: ListsHostsComponent },
  { path: 'lists-lang', component: ListsLangComponent },
  { path: 'lists-loc', component: ListsLocComponent },
  { path: 'lists-org', component: ListsOrgComponent },
  { path: 'lists-x', component: ListsXComponent },
  { path: 'viz1', component: Viz1Component },
  { path: 'viz2', component: Viz2Component },
  { path: 'viz3', component: Viz3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ AboutComponent, DashComponent, E401Component, E404Component, AboutComponent, DashComponent, Details0Component, Details1Component, Details2Component, HelpComponent, HomeComponent, ListsComponent, ListsDateComponent, ListsHostsComponent, ListsLangComponent, ListsLocComponent, ListsOrgComponent, ListsXComponent, HeaderComponent, FooterComponent, Viz1Component, Viz2Component, Viz3Component ]