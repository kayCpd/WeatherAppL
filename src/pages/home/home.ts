import { Component } from '@angular/core';
import { NavController, Img } from 'ionic-angular';
import{ ForcastProvider } from '../../providers/forcast/forcast';
import{ Storage } from '@ionic/storage'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cityWeather:any;
  listWeather:any;
  mainWeather:any;
  icon:ImageData;
  
  
  lW:any;     //holds 5 day weather forcast                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
  i:any;      //iterator to function
  j:any;      //iterator to function
  mW:"HI";      

  location:{
    id:number
  }

  constructor(public navCtrl: NavController, private forcastProvider:ForcastProvider,
  private storage:Storage) {

  }

  //similar to ngOnInit in angular
  ionViewWillEnter(){
    this.storage.get('location').then((val) => {
      if(val != null){
this.location = JSON.parse(val);
      }else{ 
        this.location = {
         id: 993800
         
        }
      }
    // this.location = {
    //   id: 993800
    //   // id: 524901
    // }

    this.forcastProvider.getWeather(this.location.id).subscribe(weather =>{
      this.cityWeather = weather.city; 
      this.lW = weather.list;
      // console.log(this.lW);
      
      this.listWeather = weather.list[0];
      this.mainWeather = weather.list[0].weather[0];
      this.icon = weather.list[0].weather[0].icon;   

    });
    
  });

  }

}
