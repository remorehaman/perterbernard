import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomservicesService } from 'src/app/service/customservices.service';

@Component({
  selector: 'app-accessoriesdetails',
  templateUrl: './accessoriesdetails.component.html',
  styleUrls: ['./accessoriesdetails.component.css']
})
export class AccessoriesdetailsComponent implements OnInit {

  accDetails : any;

  id: any;

  constructor(private customser : CustomservicesService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params["id"];

    this.customser.getAccessoriesDetails(this.id).subscribe(
      data =>{
        this.accDetails = data;
        console.log(this.accDetails);
      }
    )

  }

}
