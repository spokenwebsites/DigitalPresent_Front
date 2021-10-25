import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'help', component: HelpComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
	{ path: 'dashboard2020', component: Dashboard2020Component },
	{ path: 'details', component: DetailsComponent },
	{ path: 'detailsskyisblue', component: DetailsskyisblueComponent },
	{ path: 'detailstreereading', component: DetailstreereadingComponent },
	{ path: 'footer', component: FooterComponent },
	{ path: 'header', component: HeaderComponent },
	{ path: 'lists', component: ListsComponent },
	{ path: 'listsdate', component: ListsdateComponent },
	{ path: 'listshostingplatforms', component: ListshostingplatformsComponent },
	{ path: 'listslanguages', component: ListslanguagesComponent },
	{ path: 'listsorganizers', component: ListsorganizersComponent },
	{ path: 'listslocation', component: ListslocationComponent },
	{ path: 'listsx', component: ListsxComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

