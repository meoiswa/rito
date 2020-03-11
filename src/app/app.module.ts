import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LiveGameService } from './services';
import { ObjectTreeComponent } from './components/object-tree/object-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    ObjectTreeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [LiveGameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
