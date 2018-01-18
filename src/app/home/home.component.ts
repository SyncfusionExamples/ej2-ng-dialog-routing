import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { ShareRouting } from '../app.service';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(private route: ActivatedRoute, private router: Router, public shareData: ShareRouting) {
  }
  ngOnInit() {
    if( this.shareData.alertDialog ) {
      // Shared dialog is destoryed.
      this.shareData.alertDialog.destroy();
      // Shared dialog element <ej-dialog> is removed from the page.
      this.shareData.alertDialog.element.remove();
      this.shareData.alertDialog = null;
    }
  }
}
