import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CustomservicesService } from 'src/app/service/customservices.service';

@Component({
  selector: 'app-kitchens',
  templateUrl: './kitchens.component.html',
  styleUrls: ['./kitchens.component.css']
})
export class KitchensComponent implements OnInit {


  productsCat:any;
  productsListarray:any;
  noproducts : boolean;
  constructor(private customservice:CustomservicesService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.noproducts = false
    this.route.params.subscribe(
      (param:Params)=>{
        this.productsCat = param["products_cat"];
        this.customservice.getproductsList(this.productsCat).subscribe(
          data=>{ 
            this.productsListarray = data;
            if(this.productsListarray != ""){     
              this.noproducts = false
              console.log("products",this.productsListarray);
            }else{
              this.noproducts = true;
              console.log("noproducts", this.noproducts)
            }
            
            //this.productsListarray === data ? 'avaible' : 'Not avaible';
            // this.productsListarray ? 'products avi' : 'Not avaible'
           
           
          }
        )
      }
    )

   
  }
  

  // productsList(){
  //   this.customservice.getproductsList(this.productsCat).subscribe(
  //     data=>{
  //       this.productsListarray = data;
  //       console.log("products",data);
  //     }
  //   )
  // }



}


