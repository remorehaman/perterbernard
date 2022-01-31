import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'header', loadChildren: () => import('./modules/header/header.module').then(m => m.HeaderModule),
    pathMatch:'full'
  },
  { 
    path: 'footer', loadChildren: () => import('./modules/footer/footer.module').then(m => m.FooterModule),
    pathMatch:'full'
  }, 
  { 
    path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    pathMatch:'full'
  },
  {
    path: 'tvalcoves', loadChildren: () => import('./modules/tvalcoves/tvalcoves.module').then(m => m.TvalcovesModule),
    pathMatch:'full'
  },
  {
    path: 'tvalcovesdetails/:id', loadChildren: () => import('./modules/tvalcovesdetails/tvalcovesdetails.module').then(m => m.TvalcovesdetailsModule),
    pathMatch:'full'
  },
  { path: 'accessories', loadChildren: () => import('./modules/accessories/accessories.module').then(m => m.AccessoriesModule) },
  { path: 'bathrooms', loadChildren: () => import('./modules/bathrooms/bathrooms.module').then(m => m.BathroomsModule),
  },
  { path: 'contact', loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule) },
  {
    path: 'accessoriesdetails/:id', loadChildren: () => import('./modules/accessoriesdetails/accessoriesdetails.module').then(m => m.AccessoriesdetailsModule),
    pathMatch:'full'
  },
  { path: 'bathroomsdetails/:id', loadChildren: () => import('./modules/bathroomsdetails/bathroomsdetails.module').then(m => m.BathroomsdetailsModule) },
  { path: 'bedrooms', loadChildren: () => import('./modules/bedrooms/bedrooms.module').then(m => m.BedroomsModule) },
  {
    path: 'bedroomsdetails/:id', loadChildren: () => import('./modules/bedroomsdetails/bedroomsdetails.module').then(m => m.BedroomsdetailsModule)
  },
  { path: 'kitchens/:parent_id/:products_cat', loadChildren: () => import('./modules/kitchens/kitchens.module').then(m => m.KitchensModule) },
  { path: 'kitchensdetais/:products_cat/:id', loadChildren: () => import('./modules/kitchensdetails/kitchensdetails.module').then(m => m.KitchensdetailsModule) },
  { path: 'addtocart', loadChildren: () => import('./modules/addtocart/addtocart.module').then(m => m.AddtocartModule) },
  { path: 'video', loadChildren: () => import('./modules/video/video.module').then(m => m.VideoModule) },
  { path: 'search', loadChildren: () => import('./modules/search/search.module').then(m => m.SearchModule) }
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
