import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ContactComponent } from './contact/contact.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { IconsModule } from "@progress/kendo-angular-icons";
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { InputsModule } from '@progress/kendo-angular-inputs';
import {  ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { DialogModule, DialogsModule } from "@progress/kendo-angular-dialog";
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, State, process } from '@progress/kendo-data-query';
import { EditService } from './edit/edit.service';












@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    DashboardComponent,
    ContactComponent,
    
    
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    GridModule,
    FormsModule,
    IconsModule,
    IndicatorsModule,
   ButtonsModule,
   InputsModule,
   DialogsModule,
   
    
    
    

    
    
  ],
  providers: [EditService],
  bootstrap: [AppComponent]
})
export class AppModule { }
