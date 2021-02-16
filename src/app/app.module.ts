import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeyPipe } from './core/pipes/key.pipe';
import { TypeDefencesPipe } from './core/pipes/type-defences.pipe';
import { KeysPipe } from './core/pipes/keys.pipe';

@NgModule({
  declarations: [AppComponent, KeyPipe, TypeDefencesPipe, KeysPipe],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
