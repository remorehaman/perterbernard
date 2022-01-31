import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { debounceTime, distinctUntilChanged, filter, map, pluck, switchMap } from 'rxjs/operators'
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Search } from '../interface/search.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomservicesService {

  public term = new FormControl()

  siteUrl = environment.siteUrl

  constructor(private httpClient : HttpClient) { }

  getTvalcovesList(){
    return this.httpClient.get(this.siteUrl + "frontapi/tv_alcoves_List")
  }
  getTvalcovesDetails(id:any){
    const formData = new FormData()
    formData.append("id",id);
    return this.httpClient.post(this.siteUrl + "frontapi/single_tv_alcoves",formData)
  }

  search(searchTerm):Observable<Search>{
  
    return this.httpClient.get<Search>('http://my-json-server.typicode.com/Uxtrendz/apis/videoList'+ '?q=' + searchTerm).pipe(
      filter( () => searchTerm.length > 0 )
    )
    
  }

  // ----------------you can use pipe or map
  // getBathrooms(){
  //   return this.httpClient.get(this.siteUrl + "frontapi/bathrooms_List").pipe()
  //     .map((res:any) => 
  //       res.map((data) => {
  //         return {
  //           id:data.id,
  //           name:data.banner_name
  //         }
  //       })
  //     ) 
    
  // }
  // -----------------by using pipe --------------
  getBathrooms(){
    return this.httpClient.get(this.siteUrl + "frontapi/bathrooms_List").pipe(
        map((res:any) => 
        res.map((data) => {
          return {
            id:data.id,
            name:data.banner_name,
            image:data.image,
            price:data.price,
            quantity:data.quantity     
          }
        })  
      )
    )
  }
  getVideos(){
    return this.httpClient.get("https://www.eclickprojects.com/griffith-funeral/code/apiservice/funeral-recordings/");
  }
  getonlyVideos(){
    return this.httpClient.get("https://www.eclickprojects.com/griffith-funeral/code/apiservice/funeral-recordings/").pipe(
    map((res:any) =>
      res.data.map((data) =>{
        return {
          video:data.videoLink
        }
      })
    )
    )
  
    
  }
 
  getBathroomsDetails(id:any){
    const formData = new FormData()
    formData.append("id",id)
    return this.httpClient.post(this.siteUrl + "frontapi/single_bathrooms",formData)
  }

  getBannersList(){
    return this.httpClient.get(this.siteUrl + "frontapi/banner_List")
  }

  getpeterBernard(){
    return this.httpClient.get(this.siteUrl + "frontapi/peter")
  }

  getServices(){
    return this.httpClient.get(this.siteUrl + "frontapi/service_list")
  }
  getCategories(){
    return this.httpClient.get(this.siteUrl + "frontapi/categories_List")
  }
  getchildCategories(){
    return this.httpClient.get(this.siteUrl + "frontapi/child_categories_List")
  }
  getnewchildCatagories(){
    return this.httpClient.get(this.siteUrl + "frontapi/new_child_categories_List")
  }
  getaccessories(){
    return this.httpClient.get(this.siteUrl + "frontapi/accessories_List")
  }
  getAccessoriesDetails(id:any){
    const formData = new FormData()
    formData.append("id",id);
    return this.httpClient.post(this.siteUrl + "frontapi/single_accessories",formData)
  }
  adduser(is_users:any){
    return this.httpClient.post(this.siteUrl+'frontapi/signup_users',is_users);
  }


  getproductsList(products_cat:any){
    const formdata = new FormData()
    formdata.append("products_cat",products_cat)
    return this.httpClient.post(this.siteUrl + "frontapi/productsList",formdata)
  }
  getProductsDetails(id:any){
    const formdata = new FormData()
    formdata.append("id",id)
    return this.httpClient.post(this.siteUrl + "frontapi/productsdetails",formdata)
  }
 
 
  manageState:any;
  managenewState:any;
}




//  //-====================== Handle API errors====================
//  handleError(error: HttpErrorResponse) {
//   if (error.error instanceof ErrorEvent) {
//     // A client-side or network error occurred. Handle it accordingly.
//     console.error('An error occurred:', error.error.message);
//   } else {
//     // The backend returned an unsuccessful response code.
//     // The response body may contain clues as to what went wrong,
//     console.error(
//       `API returned code ${error.status}, ` +
//       `body was: ${error.error}`);
//   }
//   // return an observable with a user-facing error message
//   return throwError(
//     'Something bad happened; please try again later.');
// };

// //================= Get menu list=================
// getMenuList(): Observable<Servicedata> {
//   return this.http
//     .get<Servicedata>(this.env.API_BASE_URL+ '/menulist/')
//     .pipe(
//       retry(2),
//       catchError(this.handleError)
//     )
// }
