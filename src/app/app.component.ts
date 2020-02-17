import { Component ,OnInit} from '@angular/core';
import {ProfileService} from './profile.service';
import {Profile} from '../app/profile';
import { Observable, Observer } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BODYSKY';
  profiles: Profile[];
  error:string;
  isImageLoading:boolean;
  data:Blob;
  imageurl :any;
  imageToShow:any;
  
  constructor(private profileService: ProfileService,private sanitizer:DomSanitizer) {
 
   }

//gettng profiles from the api
  getProfiles():void{  
    this.profileService.getProfiles().subscribe(profiles=>
      {
        this.profiles=profiles;
        for (let trainerprofile of this.profiles)
         {
           this.isImageLoading = true;
           this.profileService.getImage(trainerprofile.imageUid).subscribe((data:any) => {
           this.data=data;
           this.createImageFromBlob(data,trainerprofile); //creating image from blob data
           this.isImageLoading = false;
            }, error => {
              this.isImageLoading = false;
              console.log(error);
            });
           }
     });
  }


 
ngOnInit()
{
    this.getProfiles();//calling the getprofiles 
}


//creating the image from Blob data
createImageFromBlob(image: Blob,trainerprofile:Profile) {
     let reader = new FileReader();
     reader.addEventListener("load", () => {
     this.imageToShow= reader.result;
     this.imageToShow = this.sanitizer.bypassSecurityTrustUrl(this.imageToShow)
      trainerprofile.image=this.imageToShow;
      }, false);

   if (image) {
      reader.readAsDataURL(image);
      }
  }

  
  }