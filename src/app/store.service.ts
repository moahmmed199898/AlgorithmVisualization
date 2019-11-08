import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class StoreService {

  static Algorithm = "";
   static showCodeArea = new Subject<boolean>();
  constructor() { }

  static setAlgorithm(Algorithm: string) {
    this.Algorithm = Algorithm;
    console.log(this.Algorithm);
    eval(this.Algorithm);
    
  }
}
