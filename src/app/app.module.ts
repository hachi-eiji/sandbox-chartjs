import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { MainComponent } from './components/main/main.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { BarChartDirective } from './directives/bar-chart.directive';
import { HorizontalBarChartDirective } from './directives/horizontal-bar-chart.directive';
import { LineChartDirective } from './directives/line-chart.directive';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { HorizontalBarChartComponent } from './components/horizontal-bar-chart/horizontal-bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartDirective,
    HorizontalBarChartDirective,
    BarChartComponent,
    LineChartDirective,
    MainComponent,
    TimelineComponent,
    LineChartComponent,
    HorizontalBarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
