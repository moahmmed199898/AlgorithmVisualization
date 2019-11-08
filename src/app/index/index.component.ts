import { Component, OnInit, ViewEncapsulation, NgModule } from "@angular/core";
import {CodeAreaComponent} from "./../code-area/code-area.component";
import {NavbarComponent} from "./../navbar/navbar.component";
@NgModule({
  imports: [
    CodeAreaComponent,
    NavbarComponent
  ],

})
@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {
  public test = false;
  constructor() { }

  ngOnInit() {
  }

  onClickHandler() {
    this.test =  this.test ? false:true;
  }

}
