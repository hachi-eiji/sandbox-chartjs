import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { BarChartDirective } from './directives/bar-chart.directive';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartDirective,
    BarChartComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
