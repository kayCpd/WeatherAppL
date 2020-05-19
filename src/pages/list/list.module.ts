import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { listPage } from './list';

@NgModule({
  declarations: [
    listPage,
  ],
  imports: [
    IonicPageModule.forChild(listPage),
  ],
})
export class listPageModule {}
