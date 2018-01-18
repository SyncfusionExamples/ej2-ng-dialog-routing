import { Component, Injectable } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-ng-popups';

@Injectable()
export class ShareRouting {
  public selectedID: number;
  public alertDialog: DialogComponent;
  constructor() {
    this.alertDialog = null;
  }
}
