import { Component, OnInit } from '@angular/core';
import {ShowsandseriesService} from '../services/showsandseries.service';
import {ActivatedRoute} from "@angular/router"
@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.component.html',
  styleUrls: ['./showdetails.component.css'],
  providers:[ShowsandseriesService]
})
export class ShowdetailsComponent implements OnInit {
  
  public showsDetails:any;

  constructor(public showsService:ShowsandseriesService,public currentRoute:ActivatedRoute) {
    this.currentRoute.params.subscribe(params=>{
      this.showsService.getShowDetails(params["id"]).subscribe(details=>{
        this.showsDetails=details;
      })
    })
   }

  ngOnInit() {
  }


}
