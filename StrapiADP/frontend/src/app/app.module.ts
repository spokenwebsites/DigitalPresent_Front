import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { HelpComponent } from './components/help/help.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { Dashboard2020Component } from './components/dashboard2020/dashboard2020.component';
import { DetailsComponent } from './components/details/details.component';
import { DetailsskyisblueComponent } from './components/detailsskyisblue/detailsskyisblue.component';
import { DetailstreereadingComponent } from './components/detailstreereading/detailstreereading.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListsComponent } from './components/lists/lists.component';
import { ListsdateComponent } from './components/listsdate/listsdate.component';
import { ListshostingplatformsComponent } from './components/listshostingplatforms/listshostingplatforms.component';
import { ListslanguagesComponent } from './components/listslanguages/listslanguages.component';
import { ListsorganizersComponent } from './components/listsorganizers/listsorganizers.component';
import { ListslocationComponent } from './components/listslocation/listslocation.component';
import { ListsxComponent } from './components/listsx/listsx.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
      AppComponent,
      HomeComponent,
      AboutComponent,
      HelpComponent,
      ContactComponent,
      Dashboard2020Component,
      DetailsComponent,
      DetailsskyisblueComponent,
      DetailstreereadingComponent,
      Dashboard2020Component,
      FooterComponent,
      HeaderComponent,
      ListsComponent,
      ListsdateComponent,
      ListslocationComponent,
      ListshostingplatformsComponent,
      ListslanguagesComponent,
      ListsorganizersComponent,
      ListsxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
