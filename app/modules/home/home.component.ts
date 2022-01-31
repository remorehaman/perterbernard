import { Component, OnInit } from '@angular/core';
import { newplugin } from 'src/assets/js/newplugin.js';
import * as $ from 'jquery';
import { CustomservicesService } from 'src/app/service/customservices.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { environment } from 'src/environments/environment';
import { Users } from 'src/app/models/users.model';


declare var newplugin:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  usersModel:Users = new Users();
  submitted = false;
  addSuccess = false;
  

  overRideRate = "sam"

  siteUrl = environment.siteUrl;

  constructor(private bannerservice : CustomservicesService) { }

  bannerlist : any;
  peterBernard : any;
  serviceList : any;

  ngOnInit(): void {


    this.bannerservice.getBannersList().subscribe(
      data => {
        this.bannerlist = data;
        console.log(this.bannerlist);
      }
    )

    this.bannerservice.getpeterBernard().subscribe(
      data=>{
        this.peterBernard = data
        console.log(this.peterBernard);
      }
    )

    this.bannerservice.getServices().subscribe(
      res =>{
        this.serviceList = res;
        console.log(this.serviceList);
      }
    )

      $(document).ready(function(){
        // $(function () {
        //   var $grid = $('.grid').masonary({
        //     itemSelector: '.grid-item',
        //     percentPosition: true,
        //     columnWidth: '.grid-sizer'
        //     }); 
        
        // }); 
      });

  }

  createuser(){
    if (this.usersModel.formGroup.valid){
      var formData= new FormData();
      formData.append('first_name',this.usersModel.first_name);
      formData.append('last_name',this.usersModel.last_name);
      formData.append('email',this.usersModel.email);
      formData.append('phone',this.usersModel.phone);
      formData.append('message',this.usersModel.message);
      formData.append('status',this.usersModel.status);
      this.bannerservice.adduser(formData).subscribe(
        data => {
          console.log("user",data)
          this.addSuccess = true;
          this.submitted =true;
          console.log("form suucess",this.addSuccess,this.submitted)
          
        })
        
        // -----------reset the form-------

        this.usersModel = new Users();
        // this.submitted = false;
    }
   
    else{
      // this.usersModel.formGroup.controls['first_name'].setErrors({'incorrect': true});
      // this.usersModel.formGroup.controls['last_name'].setErrors({'incorrect': true});
      alert("Invalid:Please fill up the blank fields")
    }
  
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay:true,
    smartSpeed:2000,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 1
      }
    },
    nav: false
  }


}


