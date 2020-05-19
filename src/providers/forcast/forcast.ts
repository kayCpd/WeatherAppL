import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map';
import 'rxjs-compat/add/operator/map';

@Injectable()
export class ForcastProvider{
  apiKey = '80b187d3a4e10717306fb791a13eca92';
  url;
  constructor(public http: Http) {
    console.log('Hello ForcastProvider Provider');
        this.url = 'http://api.openweathermap.org/data/2.5/forecast?id=';
  }

  getWeather(id){
    return this.http.get(this.url+id+'&APPID='+this.apiKey)
    .map(res => res.json());
  }

  fiveDayForcast(id){
    return this.http.get(this.url+id+'&APPID='+this.apiKey)
    .map(res => res.json());
  }
}
