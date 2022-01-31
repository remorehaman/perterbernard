import { splitClasses } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CustomservicesService } from 'src/app/service/customservices.service';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tvalcovesdetails',
  templateUrl: './tvalcovesdetails.component.html',
  styleUrls: ['./tvalcovesdetails.component.css']
})
export class TvalcovesdetailsComponent implements OnInit {

  siteUrl =  environment.siteUrl;

  tv_alcoves_details : any;
  userId : any;
  tv_alcoves : any;
  tv_new_data : any

  constructor(private tvalcovesservices:CustomservicesService, private route : ActivatedRoute) { }

  ngOnInit(): void {


    this.userId = this.route.snapshot.params['id'];

    //console.log("id",this.userId);

    // this.tvalcovesservices.getTvalcovesDetails(this.userId).subscribe(
    //   data =>{
    //     this.tv_alcoves_details = data;
    //     console.log(this.tv_alcoves_details);

    //   }
    // )

    // this.tvalcovesservices.getTvalcovesList().subscribe(
    //   data =>{
    //     this.tv_alcoves = data;
    //     console.log("tv_alcoves",this.tv_alcoves);
    //     console.log("newid",Object.keys(this.tv_alcoves));
    //   }
    // )
  

   
    this.route.params.subscribe(
      (params:Params) => {
        this.userId = params['id']
        this.tvalcovesservices.getTvalcovesDetails(this.userId).subscribe(
          data =>{
            this.tv_new_data = data;
            console.log("newdata",this.tv_new_data) 
          }
        )

        this.tvalcovesservices.getTvalcovesList().subscribe(
          data =>{
            this.tv_alcoves = data;
            console.log("tv_alcoves",this.tv_alcoves);

            this.tvalcovesservices.getTvalcovesDetails(this.userId).subscribe(
              data =>{
                this.tv_new_data = data;
                console.log("removeid",this.tv_new_data) 

              // -----------------related products--------------------

              this.tv_alcoves.splice(this.tv_alcoves.findIndex(e => e.id === this.tv_new_data[0]?.id ),(1));
              console.log("new array",this.tv_alcoves)

              // ------------------related products end------------

              console.log("newid",Object.keys(this.tv_alcoves));
              }
            )
              
          }
        )

        
      }
      
    )
   
  }
 
  // fetchDetails(){
  //   this.tvalcovesservices.getTvalcovesDetails(this.userId).subscribe(
  //     data =>{
  //       this.tv_new_data = data;
  //       console.log("newdata",this.tv_new_data) 
  //     }
  //   )
  // }

  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: false,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: false,
  //   autoplay:true,
  //   smartSpeed:2000,
  //   navSpeed: 700,
  //   navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     400: {
  //       items: 2
  //     },
  //     740: {
  //       items: 3
  //     },
  //     940: {
  //       items: 4
  //     }
  //   },
  //   nav: true
  // }

}
