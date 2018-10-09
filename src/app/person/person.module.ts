import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {PersonPage} from './person.page';
import {AppPipesModule} from '../pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: PersonPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AppPipesModule,
  ],
  declarations: [PersonPage]
})
export class PersonPageModule {
}
