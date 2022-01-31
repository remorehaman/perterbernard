import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import {map} from 'rxjs/operators'
import { Bathroomsdetails } from 'src/app/bathroomsdetails.model';


@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {
  
 
  constructor() { }
  kaka:any;
  emptykaka:boolean;
  empty:string = 'Crat empty'
  z:any
  bathrooms_cart : any;
  subTotal:number;
  samTotal:any
  countQuantity:any
  countQuantitynew:any;
  cubtotal_array :any[]
  cartFoods:any[]
  bathroomsmodel:Bathroomsdetails
  handler:any = null;
 
  ngOnInit(): void {


    this.loadStripe();

    this.bathrooms_cart =  JSON.parse(localStorage.getItem("fooddetails")!)
    console.log("bathrooms",this.bathrooms_cart);

    
    // -------------just loop through it-------------
  //  let cubtotal_array :any[]
  //   this.bathrooms_cart.forEach((element,key:any) => {
  //   let n = this.bathrooms_cart[key]['quantity'] * this.bathrooms_cart[key]['price']
  //   this.subTotal = n;
  //   let myset = new Set([this.subTotal])
  //   let newarray = Array.from(myset);

  //   let merged = [0].concat.apply([], newarray);
  //   //const children = newarray.concat(newarray);
  //   console.log("subtotal",merged)
  //  });  


  // -----------------by using for each total--------------
  //   let i = 0;
  //   this.bathrooms_cart.forEach((element,key:any) => {
  //   i = i + this.bathrooms_cart[key]['quantity'] * this.bathrooms_cart[key]['price']
  //   this.subTotal = i;
  //   console.log("total",this.subTotal)
  //  })



  //  ------------------by using for-loop------------

   let newt = 0;
   for(let n = 0; n < this.bathrooms_cart?.length; n++){
      newt = newt + this.bathrooms_cart[n]['addedqty'] * this.bathrooms_cart[n]['price']
      this.samTotal = "Total:" + newt
       //console.log("sam",this.bathrooms_cart[n]['addedqty'])
      console.log("newtotal",this.samTotal)
   }


  //  ---------------for of loop not working------------------

  //  let y= 0;
  //  for (const forofTotal of this.bathrooms_cart) {
  //     console.log("usingFor-Of ",forofTotal)
  //    y = y + this.bathrooms_cart[forofTotal]['quantity'] * this.bathrooms_cart[forofTotal]['price']
  //    console.log("usingFor-Of ",y)
  //  }

  //  ----------------added quantity--------------
  
  for(let n = 0; n < this.bathrooms_cart?.length; n++){
    let x = this.bathrooms_cart[n]['addedqty']
    this.countQuantity = x
    console.log("addedquantity and count quantity",   this.countQuantity)
    // let merged = [0].concat.call([], this.countQuantity);
    // console.log("addedquantity and count quantity",merged)
    // const mama = this.cubtotal_array?.push(merged);
    // console.log("addedquantity and count quantity",mama)
  }


  // -----------------only quantity--------------
  for(let n = 0; n < this.bathrooms_cart?.length; n++){
    let y = this.bathrooms_cart[n]['quantity']
      this.z = y
     console.log("totalquantity",this.z)
  }
  //console.log("localstora->",localStorage?.length)

  // if (localStorage?.length == 0) {
  //    console.log("sam->","local storgae is null")
  // }
  // if(localStorage.getItem('fooddetails')?.length == 0){
  //     console.log("mama->",localStorage.getItem('fooddetails')?.length)
  // }

  if(this.bathrooms_cart?.length  == 0){
    this.emptykaka = true;
    console.log("length",this.emptykaka)
  }

  }
  removeItem(index){
    
    this.bathrooms_cart.splice(index,1)
    let newt = 0;
    for(let n = 0; n < this.bathrooms_cart?.length; n++){
        newt = newt + this.bathrooms_cart[n]['addedqty'] * this.bathrooms_cart[n]['price'] 
        this.samTotal = "Total:" + newt
        console.log("newtotal",this.samTotal)   
    }
    if(this.bathrooms_cart?.length  == 0){
      this.emptykaka = true;
      this.samTotal = '';

      console.log("length",this.emptykaka)
    }
    //console.log("length",this.bathrooms_cart?.length)
    localStorage.setItem('fooddetails', JSON.stringify(this.bathrooms_cart));
  }

  updateAmount(){
    let newt = 0;
      for(let n = 0; n < this.bathrooms_cart?.length; n++){
        newt = newt + this.bathrooms_cart[n]['addedqty'] * this.bathrooms_cart[n]['price']
        this.samTotal = "Total:" + newt
        console.log("newtotal",this.samTotal)
    }
  }

  increase(index:number){

    let count_the_quantity = this.bathrooms_cart[index]['addedqty'];
   
    if(count_the_quantity < this.bathrooms_cart[index]['quantity']) {
      count_the_quantity++;
      //this.countQuantitynew = countQuantity;

      //  -----------updating the quantity--------------
      this.bathrooms_cart[index]['addedqty'] = count_the_quantity 
      // ------------setting the item again-------------
      localStorage.setItem('fooddetails', JSON.stringify(this.bathrooms_cart));
    
      // ---------------total amount--------------
      let newt = 0;
      for(let n = 0; n < this.bathrooms_cart?.length; n++){
        newt = newt + this.bathrooms_cart[n]['addedqty'] * this.bathrooms_cart[n]['price']
        this.samTotal = "Total:" + newt
        console.log("newtotal",this.samTotal)
    }
      console.log("addedquantity---increase",count_the_quantity)

    }
    else if(count_the_quantity == this.bathrooms_cart[index]['quantity']){
      alert("You have reached maximum quantity");
      
    }
  }

  derease(index:number){
    
    let count_the_quantity = this.bathrooms_cart[index]['addedqty'];

    if(count_the_quantity > 1){
      count_the_quantity--;

      this.bathrooms_cart[index]['addedqty'] =  count_the_quantity
    
      localStorage.setItem('fooddetails', JSON.stringify(this.bathrooms_cart));
      // ---------------total amount--------------
      let newt = 0;
        for(let n = 0; n < this.bathrooms_cart?.length; n++){
          newt = newt + this.bathrooms_cart[n]['addedqty'] * this.bathrooms_cart[n]['price']
          this.samTotal = "Total:" + newt
          console.log("newtotal",this.samTotal)
      }
      // this.countQuantitynew = count_the_quantity;
      console.log("addedquantity---decrease",count_the_quantity)
    }
    else if(count_the_quantity === 1){
      alert("You have reached minimun quantity")
    }

  
    
  }


  pay(amount:any){    
 
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51GsR2pJ5nUD5lXookG97EKDjc0ruuWctPcdRARz5Ir2EIC7hiuFyoV4IL1IuakOQlATYXzDRDkSuSqnUMrENBAwm00d4sIw7PF',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        alert('Token Created!!');
      }
    });
 
    handler.open({
      name: 'Peterbernard CheckOut',
      description: 'products',
      amount :  amount * 100,
      currency: 'INR'
    },
  
    console.log(this.samTotal));
  }


  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51GsR2pJ5nUD5lXookG97EKDjc0ruuWctPcdRARz5Ir2EIC7hiuFyoV4IL1IuakOQlATYXzDRDkSuSqnUMrENBAwm00d4sIw7PF',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }
       
      window.document.body.appendChild(s);
    }
  }

}
