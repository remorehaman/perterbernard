import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { data } from 'jquery';
import { Subscription } from 'rxjs';
import { find } from 'rxjs/operators';
// import "rxjs/add/operator/debounceTime";
// import  'rxjs/add/operator/distinctUntilChanged';
//import  'rxjs/add/operator/filter';
import { concatMap, debounceTime, distinctUntilChanged, filter, pluck, switchMap } from 'rxjs/operators';
import { Search } from 'src/app/interface/search.interface';
import { CustomservicesService } from 'src/app/service/customservices.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements AfterViewInit {

  constructor( private search_service:CustomservicesService, private loadingBar:LoadingBarService) { }

  results:Array<Search>
  searchResults : any;
  outputdata:any
  serachCount:any;
  subscription:Subscription
  //searchControl : FormControl = new FormControl()
 
  // searchForm:FormGroup;
 
  @ViewChild('searchForm') searchForm:NgForm

  ngAfterViewInit(): void {


    const formValue = this.searchForm.valueChanges
    

        formValue?.pipe(
        //filter( () => this.searchForm.valid), 
        pluck('searchTerm'),
        debounceTime(700),
        distinctUntilChanged(),
        // concatMap(data => this.search_service.search(data) ) , 
        switchMap(
          (data:any) =>  this.search_service.search(data) 
        )
        
       ).subscribe(
        res =>{        
          this.searchResults = res
          this.results = this.searchResults
          // this.loadingBar.start()
          console.log("video",this.results)
          this.serachCount = this.searchResults?.length
          console.log("len",this.searchResults?.length)
          
        

         
        }
      
      )
        
     
      
      
    

      
    }

    
    
    
      
}
   
   
     
   
      
  



 // this.term.valueChanges
    // .debounceTime(400)
    // .distinctUntilChanged()
    // this.route.params.subscribe(
    //   (param:Params) =>{
    //     this.searchTerm = param['searchTerm']
    //     this.se.searchh(this.searchTerm).subscribe(
    //       data =>{
    //         this.results = data
    //         console.log("new http request", this.results)
    //       }
    //     )
    //   }
    // )