import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { JqwidgetComponent } from './jqwidget/jqwidget.component';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule],
  exports: [],
  declarations: [DashboardComponent, JqwidgetComponent]
})
export class DashboardModule {}
