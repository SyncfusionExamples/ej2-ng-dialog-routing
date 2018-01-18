import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { ShareRouting } from './app.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { DropDownListComponent } from '@syncfusion/ej2-ng-dropdowns';
import { DialogComponent } from '@syncfusion/ej2-ng-popups';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    DropDownListComponent,
	DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers:[ShareRouting],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
