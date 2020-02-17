import { Injectable } from '@angular/core';
import {Profile} from '../app/profile';
// import { Http, res} from '@angular/http';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
// import {httpHeaders} from @angular/common/http
import 'rxjs/Rx';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  getprofile_url = 'https://api.bodysky.com/search/top';
  getimage_url='https://api.bodysky.com/content/profile-picture/'
  constructor(private http:HttpClient)
   {

   };
  
//getting the profiles from the api
getProfiles():Observable<Profile[]>{
  return this.http.get<Profile[]>(this.getprofile_url)
}
//getting the profile blob data for image
getImage(imageuid:string){
 let imageurl=this.getimage_url+imageuid;
 console.log(imageurl);
  return this.http.get(this.getimage_url+imageuid
  ,{
  responseType:'blob' as 'json'
  }
  
  );

}  

}
