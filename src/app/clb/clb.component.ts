import { ClbService } from './../clb.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clb',
  templateUrl: './clb.component.html',
  styleUrls: ['./clb.component.css']
})
export class ClbComponent implements OnInit {
title = "CLB Calculator";
clbSections;
clbrating;
clbtotal;

  constructor(service: ClbService) { 
this.clbSections = service.getIELTSSectionName();
this.clbrating = service.getIELTSRatings();

  }

  ngOnInit() {
  }
  GetCLB()
  {
    var service = new ClbService();
    let listening = (<HTMLInputElement>document.getElementById("ielts_Listening")) == null ? "" : (<HTMLInputElement>document.getElementById("ielts_Listening")).value; 
    let reading = (<HTMLInputElement>document.getElementById("ielts_Reading")) == null ? "" : (<HTMLInputElement>document.getElementById("ielts_Reading")).value; 
    let writing = (<HTMLInputElement>document.getElementById("ielts_Writing")) == null ? "" : (<HTMLInputElement>document.getElementById("ielts_Writing")).value; 
    let speaking = (<HTMLInputElement>document.getElementById("ielts_Speaking")) == null ? "" : (<HTMLInputElement>document.getElementById("ielts_Speaking")).value; 

    this.clbtotal = service.calculateCLB(listening,reading,writing,speaking);

    return this.clbtotal;
  }
}
