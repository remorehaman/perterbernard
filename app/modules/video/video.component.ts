import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CustomservicesService } from 'src/app/service/customservices.service';



@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor(private cs:CustomservicesService, private sanitizer: DomSanitizer, ) { }
  video:any
  videos:any;
  newvideo:any;
  ngOnInit(): void {

      this.cs.getVideos().subscribe(
        data=>{
          this.videos = data;
          console.log("videos",this.videos);
        }
      )
    this.getVideosOnly()
  }
  getVideosOnly(){
    this.cs.getonlyVideos().subscribe(
      data => {   
        this.video = data
        this.newvideo =  this.sanitizer.bypassSecurityTrustResourceUrl(this.video)
        console.log("onlyvideos",this.newvideo)  
      }
    )
  }
}

