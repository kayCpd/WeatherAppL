import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
                                                                                                                  
import{ ForcastProvider } from '../../providers/forcast/forcast';
import { Storage } from '@ionic/storage'
import { bulkForcast } from '../../providers/forcast/bulkForcast';
@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class listPage {
  idForcast: bulkForcast[] = [];

  location:{
    id:number
  }

  constructor(public navCtrl: NavController, private forcastProvider: ForcastProvider, public navParams: NavParams, private storage:Storage) {
  }

  ionViewDidLoad() {
    this.storage.get('location').then((val) => {
      if(val != null){
this.location = JSON.parse(val);
      }else{ 
        this.location = {
         id: 993800
        }
      }

    this.idForcast.splice(0, this.idForcast.length);
    this.forcastProvider.fiveDayForcast(this.location.id).subscribe(weather =>{
      for(let i = 0; i < weather.list.length; i+=8){
        const temp = new bulkForcast(weather.list[i].dt_txt, 
          weather.list[i].weather[0].main, 
          weather.list[i].main.temp_min, 
          weather.list[i].main.temp_max); 
        this.idForcast.push(temp);
      }

    });
    
  });
  }
}