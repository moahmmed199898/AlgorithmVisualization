import { Component, OnInit, NgModule } from "@angular/core";
import {CodeAreaComponent} from "./../code-area/code-area.component";
import {StoreService} from "./../store.service";
@NgModule({
  imports: [
    CodeAreaComponent
  ]
})
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  showCodeArea = true;
  constructor() { }

  ngOnInit() {
    StoreService.showCodeArea.subscribe((value)=>this.showCodeArea = value);
  }

  ToggleShowCodeArea() {
    StoreService.showCodeArea.next(this.showCodeArea? false:true);
  }

}
