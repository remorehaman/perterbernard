import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomservicesService } from 'src/app/service/customservices.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private customeServices:CustomservicesService,private route:ActivatedRoute) { }

  parentCat:any;
  childCat:any;
  newchildcat:any;
  ngOnInit(): void {

    this.customeServices.getCategories().subscribe(
      data => {
        this.parentCat = data;
        console.log(data);
      }
    )

    this.customeServices.getchildCategories().subscribe(
      data=>{
        this.childCat = data;
        console.log("hi",this.childCat);
      }
    )

    this.customeServices.getnewchildCatagories().subscribe(
      data=>{
        this.newchildcat = data;
        console.log("newchildcat",this.newchildcat)
      }
    )
  }

}
