import { Component } from '@angular/core';

import { AboutPage } from '../about/about';

import { HomePage } from '../home/home';
import { listPage } from '../list/list';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab3Root = listPage;
  tab2Root = AboutPage;
  

  constructor() {

  }
}
