import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { CommonModule } from '@angular/common';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { LeafletModule } from '@bluehalo/ngx-leaflet';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    LeafletModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
