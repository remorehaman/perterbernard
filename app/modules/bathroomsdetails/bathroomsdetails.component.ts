import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { param } from 'jquery';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Bathroomsdetails } from 'src/app/bathroomsdetails.model';
import { CustomservicesService } from 'src/app/service/customservices.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bathroomsdetails',
  templateUrl: './bathroomsdetails.component.html',
  styleUrls: ['./bathroomsdetails.component.css']
})
export class BathroomsdetailsComponent implements OnInit {

  siteUrl =  environment.siteUrl;

  bathrooms_details : any;
  userId : any;
  bathrooms_det: any;
  bathrooms_data : any;
  bathroomsmodel:Bathroomsdetails;
 

  constructor(private customservices:CustomservicesService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.userId = this.route.snapshot.params["id"];

    this.customservices.getBathroomsDetails(this.userId).subscribe(
      data=>{
        this.bathrooms_details = data;
        console.log("btahrooms-details",this.bathrooms_details);

        // -------------bathrooms-details-model----------
        this.bathroomsmodel = new Bathroomsdetails (
          this.bathrooms_details[0].id,
          this.bathrooms_details[0].banner_name,
          this.bathrooms_details[0].image,
          this.bathrooms_details[0].quantity,
          this.bathrooms_details[0].price,
          this.bathrooms_details[0].text
        )
        console.log("bathroomsmodel",this.bathroomsmodel)
      }
    )

    // this.route.params.subscribe(
    //   (param:Params) =>{
    //     this.userId = param["id"];
    //     this.fetchDetails();

    //     // this.customservices.getBathrooms().subscribe(
    //     //   data => {
    //     //     this.bathrooms_data = data;
    //     //   }
    //     // )

    //   }
    // )
   


  }

  // fetchDetails(){
  //   this.customservices.getBathroomsDetails(this.userId).subscribe(
  //     data=>{
  //       this.bathrooms_details = data;
  //       console.log("btahrooms-details",this.bathrooms_details);
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
  //     },
  //     1024:{
  //       items:4
  //     }
  //   },
  //   nav: true
  // }



  addtocart(){

    let cartFoods : any[];
    if(localStorage.getItem('fooddetails')){
      var newProduct = true;
      cartFoods = JSON.parse(localStorage.getItem('fooddetails')!);
      cartFoods =  cartFoods.filter(e =>{
        if(e.id == this.bathroomsmodel.id)
        {   

          newProduct = false;    
          if( parseInt(e.addedqty) + this.countQuantity > this.bathrooms_details[0].quantity){
            alert("do not add"); 
          }
          else{
            e.addedqty = parseInt(e.addedqty) + this.countQuantity;  
          }
        }        
        return e   
      });
      if(newProduct)
      {
        cartFoods.push({
          id:this.bathroomsmodel.id,
          title:this.bathroomsmodel.title,
          price: this.bathroomsmodel.price,
          description:this.bathroomsmodel.descprition,
          quantity:this.bathroomsmodel.productquantity,
          image: this.bathroomsmodel.productimage,
          addedqty:this.countQuantity,
          
        })    
      }
      
    }else{
      cartFoods = [{
        id:this.bathroomsmodel.id,
        title:this.bathroomsmodel.title,
        price: this.bathroomsmodel.price,
        description:this.bathroomsmodel.descprition,
        quantity:this.bathroomsmodel.productquantity,
        image: this.bathroomsmodel.productimage,
        addedqty:this.countQuantity,
      }];     
    }
    let totalProduct = cartFoods?.length; 
    console.log("total->", totalProduct)
    
    localStorage.setItem("fooddetails", JSON.stringify( cartFoods))
    console.log("final array",cartFoods);
   
    
  }

  countQuantity:number = 1;
  i=1;
  increase(){
    if(this.i < this.bathrooms_details[0].quantity) {
      this.i++;
      this.countQuantity = this.i;

    }
    else if(this.i == this.bathrooms_details[0].quantity){
      alert("You have reached maximum quantity");
      
    }
  }

  derease(){
    if(this.i > 1){
      this.i--;
      this.countQuantity = this.i;
     
    }
    else if(this.i === 1){
      alert("You have reached minimun quantity")
    }
  }

  
}
