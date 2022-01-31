import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { data } from 'jquery';
import { CustomservicesService } from 'src/app/service/customservices.service';

@Component({
  selector: 'app-kitchensdetails',
  templateUrl: './kitchensdetails.component.html',
  styleUrls: ['./kitchensdetails.component.css']
})
export class KitchensdetailsComponent implements OnInit {

  productsDetails:any;
  id:any;
  productsCat:any;
  productsListarray:any;


  constructor(private customs : CustomservicesService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params["id"];
    this.customs.getProductsDetails(this.id).subscribe(
      data =>{
        this.productsDetails = data;
        console.log("prdetails",this.productsDetails)
      
      }
    )
    this.route.params.subscribe(
      (param:Params)=>{
        this.productsCat = param["products_cat"];
        this.customs.getproductsList(this.productsCat).subscribe(
          data=>{
            this.productsListarray = data;
            console.log("avaiableproducts",data);
          }
        )
      }
    )

    
  }

}
