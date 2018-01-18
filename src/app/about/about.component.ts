import { Component,  ViewChild} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShareRouting } from '../app.service';
import { DialogComponent } from '@syncfusion/ej2-ng-popups';

@Component({
  selector: 'about',
  styleUrls: ['./about.component.css'],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  constructor(private route: ActivatedRoute, private router: Router, public shareData: ShareRouting) {
  }
  public target : string;
  @ViewChild('alertDialog')
  public alertDialog: DialogComponent;
  ngOnInit(): void {
    // Initialize the target to the dialog.
    // .control-section - element present inside the body tag.
    this.target = '.control-section';
  }

  ngAfterViewInit(): void {
    // Assign the dialog object to the shared data.
    this.shareData.alertDialog = this.alertDialog;
  }

  public alertHeader: string = 'Low Battery';
  public alertContent: string = '10% of battery remaining';
  public showCloseIcon: Boolean = true;
  public visible: Boolean = true;
  public hidden: Boolean = false;
  public alertWidth: string = '300px';
  public alertHeigh: string = '300px';
  public hide: any;
}
