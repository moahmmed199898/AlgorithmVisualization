import { Component, OnInit, ViewEncapsulation, NgModule, AfterContentInit, OnDestroy } from "@angular/core";
import * as ace from "ace-builds";
import "ace-builds/webpack-resolver";
import * as JSMode from "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/ext-language_tools";
import * as theme from "ace-builds/src-noconflict/theme-tomorrow_night";
@Component({
  selector: "app-code-area",
  templateUrl: "./code-area.component.html",
  styleUrls: ["./code-area.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class CodeAreaComponent implements AfterContentInit, OnDestroy {
  private editor: ace.Ace.Editor;
  constructor() {

  }
  ngAfterContentInit(): void {
    this.initAce();
  }
  ngOnDestroy(): void {
    this.editor.destroy();
    this.editor.container.remove();
  }

  private initAce() {
    this.editor = ace.edit("editor");
    const JS = JSMode.Mode;
    this.editor.setTheme(theme);
    this.editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
    });
    this.editor.session.setMode(new JS());

  }

}
