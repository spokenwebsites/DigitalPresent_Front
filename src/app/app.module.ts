import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { Dashboard2020Component } from './components/dashboard2020/dashboard2020.component';
import { DetailsskyisblueComponent } from './components/detailsskyisblue/detailsskyisblue.component';
import { DetailstreereadingComponent } from './components/detailstreereading/detailstreereading.component';
import { DetailsComponent } from './components/details/details.component';
import { HelpComponent } from './components/help/help.component';
import { IndexComponent } from './components/index/index.component';
import { ListsdateComponent } from './components/listsdate/listsdate.component';
import { ListshostingplatformsComponent } from './components/listshostingplatforms/listshostingplatforms.component';
import { ListslanguagesComponent } from './components/listslanguages/listslanguages.component';
import { ListslocationComponent } from './components/listslocation/listslocation.component';
import { ListsorganizersComponent } from './components/listsorganizers/listsorganizers.component';
import { ListsComponent } from './components/lists/lists.component';
import { ListsxComponent } from './components/listsx/listsx.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    Dashboard2020Component,
    DetailsskyisblueComponent,
    DetailstreereadingComponent,
    DetailsComponent,
    HelpComponent,
    IndexComponent,
    ListsdateComponent,
    ListshostingplatformsComponent,
    ListslanguagesComponent,
    ListslocationComponent,
    ListsorganizersComponent,
    ListsComponent,
    ListsxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
