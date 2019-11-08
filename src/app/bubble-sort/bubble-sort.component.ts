import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from "@angular/core";
import { SlowdownService } from "../slowdown.service";
/**
 * Visualization of the bubble sort algorithm
 */
@Component({
  selector: "app-bubble-sort",
  templateUrl: "./bubble-sort.component.html",
  styleUrls: ["./bubble-sort.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class BubbleSortComponent implements OnInit {
  lines: Array<number> = [];
  // screenHeight: number;
  // screenWidth: number;
  slowdown: SlowdownService = new SlowdownService();
  changingLineIndex = 0;

  constructor(private cd: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.exposeSomeThings();
    this.generateRandomArray();
    this.slowdown.setSpeed(100);
    // setTimeout(() => this.bubbleSort(), 3000);
  }


  public getHeight(index: number): string {
    return `${this.lines[index].toFixed(0)}px`;
  }

  public update() {
    this.cd.detectChanges();
  }
  public async bubbleSort() {

    for (let i = 0; i < this.lines.length - 1; i++) {
      for (let j = 0; j < this.lines.length - i - 1; j++) {
        this.changingLineIndex = j;
        if (this.lines[j] > this.lines[j + 1]) {
          this.swap(j);
        }
        await this.slowdown.wait();
      }
    }
    console.log(this.lines);
  }

  private swap(index: number) {
    const temp = this.lines[index];
    this.lines[index] = this.lines[index + 1];
    this.lines[index + 1] = temp;
  }

  private generateRandomArray() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    console.log(screenHeight);
    for (let i = 0; i < screenWidth/16; i++) {
      const randomNumber: number = (Math.random() * (screenHeight - 10) + 10) as number;
      this.lines.push(randomNumber);
    }
  }

  private setArray(index: number, value: number) {
    
  }
  private exposeSomeThings() {
    window.VA = this;
  }


}


declare global {
  interface Window {
    VA: any;
  }
}
