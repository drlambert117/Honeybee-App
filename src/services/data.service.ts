import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

import {IPage} from './page';


@Injectable()
export class DataService{
    api_url: string = '../assets/Data/home-page-data.json';

    constructor(private http: Http){}

    getData(): Observable<IPage[]>{
      

      console.log("%c-----------------------","color: green; font-weight: bold");
      console.log("%cDataService:", "color: green; font-weight: bold");
      console.log("%c-----------------------","color: green; font-weight: bold");
      console.log("DataService - getData method called!");

      return this.http.get(this.api_url).map((res:Response) => res.json())
          .do(data => console.log("data object returned from http.get call:"))
          .do(data => console.table(data));
    }

}