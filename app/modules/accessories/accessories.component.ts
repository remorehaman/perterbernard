import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomservicesService } from 'src/app/service/customservices.service';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {

  accList :any
  constructor(private customservice : CustomservicesService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.customservice.getaccessories().subscribe(
      data =>{
        this.accList = data;
        console.log("data=>",this.accList);
      }
    )



    

    // if(this.customservice.managenewState){
    //   this.accList = this.customservice.managenewState;
    //   console.log('if block')
    // }
    // else{
    //   this.customservice.getaccessories().subscribe(
    //     data =>{
    //       this.accList = data;
    //       console.log("data=>",this.accList);
    //       this.customservice.managenewState = data;
    //     }
    //   )
    // }
  }



}
