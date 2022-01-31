import { Component, OnInit } from '@angular/core';
import { cssNumber, data } from 'jquery';
import { map } from 'rxjs-compat/operator/map';
import { CustomservicesService } from 'src/app/service/customservices.service';
//import { finalize, tap, map } from 'rxjs-compat/operator/map';
//import { map } from 'rxjs/add/operator/map';
//import 'rxjs/Rx';
//import 'rxjs/add/operator/map';

import { map as lodashMap } from 'lodash';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-bathrooms',
  templateUrl: './bathrooms.component.html',
  styleUrls: ['./bathrooms.component.css']
})
export class BathroomsComponent implements OnInit {

  //showSpinner:boolean;
  
  bathrooms:any;
  spinnerName : string;
  spinnerType: string
  urlFetch = fetch("http://localhost/peterbernard_ci/index.php/frontapi/bathrooms_List")
  arr:string[];
  mama: number[];
  dada:any;
  sor_price:any

  constructor(private bathroomsList:CustomservicesService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {


    // ------------inserting an element in array-------

   this.arr = ["jain","mama","kaka","vhaa"]
   console.log(this.arr)
   console.log(this.arr.join())
   this.arr.splice(0,1,"dada")
   console.log(this.arr)


  //  ---------------deleting an specific index from array------------

  this.arr = ["jain","mama","kaka","vhaa"]
  this.arr.splice(2,1)
   console.log(this.arr)

  //  ------------------finding the middle elementin an array---------------

  this.arr = ["jain","mama","lala","kaka", "dada"]
  const kaka = this.arr[Math.floor(this.arr.length / 2)]
  console.log("kaka->",kaka)

  
  // -----------------sorting in acending order without sort method-------

  this.mama = [50, 100,10, 20, 2, 65]

    for(let i=0; i < this.mama.length; i ++){
        for(let j=0; j < this.mama.length  -1; j++){    
          if(this.mama[j] > this.mama[j+1]){
              let temp = this.mama[j];
              this.mama[j] = this.mama[j+1];
              this.mama[j+1] = temp;
          }
        }
      }
      console.log("sorting_without sort method",this.mama)
  
 // -----------------sorting in descending order without sort method-------     

 for(let i = 0; i < this.mama.length; i++){
   for(let j=0; j < this.mama.length - 1; j++){
     if(this.mama[j+1] > this.mama[j]){
        let sort = this.mama[j+1];
        this.mama[j+1] = this.mama[j]
        this.mama[j] = sort
     }
   }
 }
 console.log("descending order sort", this.mama)




    this.spinnerName = "sp1"
    this.spinnerType = "square-jelly-box"
   // this.spinner.show(this.spinnerName);
    // setTimeout(() => {
    //   this.spinner.hide(this.spinnerName);
    // }, 5000);
    this.bathroomsList.getBathrooms().subscribe(
      data =>{
        this.bathrooms = data.sort();

       //const newBath =  data.filter((x) => x.id <= 5 )
       //this.bathrooms = newBath;
       this.spinner.hide(this.spinnerName);
    
        console.log("bath",this.bathrooms)
      }
    )

   
    // ----------------------using of promises-----------------
      // this.urlFetch.then(
      //   res =>{
      //     console.log("By promise",res.url)
      //     return res.json(); 
      //   }).then(
      //     data =>{
      //       console.log("coming By promise", data)
      //     }
      //   ).catch(
      //     res =>{
      //       console.log("error occured",res)
      //     }
      //   )

    // let newData = new Promise<void>((resolve, reject) => {
    //   //console.log("promises resolved")
    //   //reject('promises Rejected')
     
    // })
    // newData.then(
    //   res =>{
    //     console.log('coming from reslove->',res);
    //   }
    // ).catch(
    //   res=>{
    //     console.log("rejected",res)
    //   }
    // )

  }
  alphaA_z(){
    // --------------sorting of data by alphabet in ascending -----------------

       this.bathrooms.sort((a, b) => (a.name < b.name) ? -1 : 1)

      // for(let i=0; i < this.bathrooms.length; i ++){
      //   for(let j=0; j < this.bathrooms.length -1; j++){    
      //     if(this.bathrooms[j].localeCompare(this.bathrooms[j+1] ) > 0){
      //         let temp = this.bathrooms[j];
      //         this.bathrooms[j] = this.bathrooms[j+1];
      //         this.bathrooms[j+1] = temp;
      //     }
      //   }

      //   this.bathrooms.length - this.bathrooms.length - 1
      // }

      // console.log("bathrooms",this.bathrooms)
    
  }
  alphaZ_a(){
    // --------------sorting of data by alphabet in  descending order -----------------

      this.bathrooms.sort((a, b) => (a.name > b.name) ? -1 : 1)
  }
  alphaH_l(){
     // -----------------sort of data by price or quantity in ascending and descending order--------------

     this.bathrooms.sort((a,b) => {
      return b.price - a.price
    })

  }
  alphaL_h(){
    // -----------------sort of data by price or quantity in ascending and descending order--------------

    this.bathrooms.sort((a,b) => {
      return a.price - b.price
    })
  }
  alphanumber(){

    this.dada = this.bathrooms?.filter( e => e.price < 31 )
    // this.dada.sort((a,b) => {
    //   return b.price - a.price
    // })
    console.log("filtered",this.dada)
     let mama = this.dada
      for(let i= 0; i < mama['name']; i++){
        for(let j=0; j<mama['name'] - i - 1; j++){
          if(mama['name'][j] > mama['name'][j+1]){
            this.sor_price = mama['name'][j]
            mama['name'][j] = mama['name'][j+1]
            mama['name'][j+1] = this.sor_price;
          }
        }
      }
      console.log("sorted",mama)
   
    // ------------only showing the price for make sorting-------
    for(let i = 0; i < this.dada.length; i++){
      let filterPrice = this.dada[i]['price']
      console.log("filtered",filterPrice)

    } 
    // this.dada.join()
   


    // this.dada.sort((a,b) => {
    //   return a.price - b.price
    // })

  }
}
