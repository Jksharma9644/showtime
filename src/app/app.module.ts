import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllshowsComponent } from './allshows/allshows.component';
import { ShowdetailsComponent } from './showdetails/showdetails.component';
import {HttpClientModule} from '@angular/common/http';
import { ShowsandseriesService } from './services/showsandseries.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AllshowsComponent,
    ShowdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ShowsandseriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
