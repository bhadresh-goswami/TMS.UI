import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ManagerDashboardComponent } from './pages/manager-dashboard/manager-dashboard.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';


@NgModule({
  declarations: [
    LayoutComponent,
    ManagerDashboardComponent,
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule
  ]
})
export class ManagerModule { }
