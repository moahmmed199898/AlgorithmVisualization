import { Injectable } from "@angular/core";
import { error } from "util";

@Injectable({
  providedIn: "root"
})
export class SlowdownService {
  private timer;
  private function: ()=>void;
  private speed: number;
  private time: number;
  constructor() {
    this.speed = 1;
    this.time = 10/this.speed;
  }

  public setSpeed(speed) {
    if(speed<1) throw new error("speed must be higher than 1");
    this.speed = speed;
    this.time = speed;
  }

  public destroy() {
    delete this.function;
    delete this.setSpeed;
    delete this.destroy;
    delete this.speed;
    delete this.time;
    delete this.timer;
    delete this.wait;
  }

  public wait(): Promise<void> {
    return new Promise((resolve,reject)=> {
      this.timer = setTimeout(()=> {
        resolve();
      }, this.time);
    });
  }
}
