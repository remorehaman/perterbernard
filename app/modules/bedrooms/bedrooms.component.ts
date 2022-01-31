import { Component, OnInit } from '@angular/core';
import { CustomservicesService } from 'src/app/service/customservices.service';
//import 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-bedrooms',
  templateUrl: './bedrooms.component.html',
  styleUrls: ['./bedrooms.component.css']
})
export class BedroomsComponent implements OnInit {

  bedrooms:any;

  constructor(private bedroomsList:CustomservicesService) { }

  ngOnInit(): void {

    this.bedroomsList.getBathrooms().subscribe(
      res =>{
        this.bedrooms = res;
        console.log(this.bedrooms)
      }
    )
  }

}
