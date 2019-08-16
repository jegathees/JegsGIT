import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { AppComponent } from './app.component';
import { NavbarComponent } from './root/navbar/navbar/navbar.component';
import {
  MatToolbarModule, MatGridListModule,
  MatTableModule, MatPaginatorModule,
  MatSortModule,
  MatIconModule,
  MatMenuModule,
  MatOptionModule,
  MatSelectModule,
  MatInputModule,
  MatCheckboxModule,
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { JegsDataGridComponent } from './shared/jegs-data-grid/jegs-data-grid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterMenuComponent } from './shared/jegs-data-grid/filter-menu/filter-menu.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { A11yModule } from '@angular/cdk/a11y';
import { CdkTreeModule } from '@angular/cdk/tree';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { JegsVersatileGridComponent } from './shared/jegs-versatile-grid/jegs-versatile-grid.component';

const materials = [
  MatToolbarModule,
  MatGridListModule,
  MatPaginatorModule,
  MatTableModule,
  MatSortModule,
  MatIconModule,
  MatMenuModule,
  MatOptionModule,
  MatSelectModule ,
  MatInputModule,
  MatCheckboxModule
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JegsDataGridComponent,
    FilterMenuComponent,
    JegsVersatileGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    CdkTableModule,
    BrowserModule,
    materials,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule ,
    A11yModule,    
    CdkTreeModule,
    DragDropModule,

  ],
  exports: [
    CommonModule,
    materials
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
