import { Component, OnInit } from '@angular/core';
import { ShowsandseriesService } from '../services/showsandseries.service';
import {Router} from '@angular/router';
import { getTypeNameForDebugging } from '@angular/common/src/directives/ng_for_of';
@Component({
  selector: 'app-allshows',
  templateUrl: './allshows.component.html',
  styleUrls: ['./allshows.component.css'],
  providers:[ShowsandseriesService]
})
export class AllshowsComponent implements OnInit {


public showsList:any;
public loading=true;

  constructor(public seriesService: ShowsandseriesService,public router:Router) { }

  ngOnInit() {
    this.getAllShowsList();
  }

  getAllShowsList() {
   this.seriesService.getShowsList().subscribe(data=>{
     if(data){
      this.showsList=data;
     }
    
     this.loading=false;
   })
  }
  redirect(id){
  this.router.navigateByUrl('showdetails/'+id)
  }
  checkIndex(index){
    var currentindex=index+1;

    if(currentindex==1 ||  ((currentindex-1)%6==0)){
      return true;
    }else{
      return false;
    }
  }

}
