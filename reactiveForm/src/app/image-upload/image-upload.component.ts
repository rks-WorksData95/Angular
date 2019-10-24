import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { saveAs } from 'file-saver';
import { UserRegistrationServiceService } from '../service/user-registration-service.service';
import { MatSlideToggleChange } from '@angular/material';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  color = 'primary';
  checked = false;
  disabled = false;
  singleImage=true;
  multipleImage=false;
  
  urls = []
  public file: any = File
  public files: any = []
  public url: string | ArrayBuffer = 'http://placehold.it/120';
  message: String
  public images: any
  blob: Blob

  constructor(
    private fb: FormBuilder,
    private service: UserRegistrationServiceService
  ) { }

  ngOnInit() {
    this.retriveImages()
  }

  onSliderChnage(event: MatSlideToggleChange){
    // alert("Slider Value : "+event.checked)
    if(event.checked){
      this.singleImage = false
      this.multipleImage = true
      this.message=""
      this.urls=[]
    }else{
      this.singleImage = true
      this.multipleImage = false;
      this.message=""
      this.url='http://placehold.it/120'
    }
  }

  onSelectFile(event){
    if(event.target.files && event.target.files[0]){
      if(this.singleImage){
        var name = event.target.files[0].name
        var type = event.target.files[0].type
        var size = event.target.files[0].size
        var lastModifiedDate = event.target.files[0].lastModifiedDate
        
        alert(
            "Name : "+name +"\n"+
            "Type : "+type +"\n"+
            "Size : "+Math.round(size/1000) +" KB \n"+
            "Last Modified Date : "+lastModifiedDate
          )
      
        var reader = new FileReader()
        this.file = event.target.files[0]
        reader.readAsDataURL(event.target.files[0])
        reader.onload = (event) => {
          this.url = reader.result
        }
      }else{
        this.files = event.target.files
        // console.log("Files :::::::=>", this.files)
        for(let file of event.target.files){
          
          alert(
            "Name : "+file.name +"\n"+
            "Type : "+file.type +"\n"+
            "Size : "+Math.round(file.size/1000) +" KB \n"+
            "Last Modified Date : "+file.lastModifiedDate
          )

          // this.files.push(file)

          var reader = new FileReader()
          
          reader.readAsDataURL(file)
          reader.onload = (event: any) => {
            this.urls.push(event.target.result)
            console.log(this.urls)
          }
        }
      }
    }
  }

  saveForm(){
    console.log('*** In SaveForm Method ***')
    if(this.singleImage){
      const formData = new FormData()
      formData.append("file", this.file)
      // console.log("Form Data 1 : ", formData)
      this.service.uploadImage(formData).subscribe(
      response => {
          console.log(response)
          this.message = "Image Uploaded Successfully!"
          this.retriveImages()
        }
      )
    }else{
      const formData = new FormData()
      for(let file of this.files){
        formData.append("files", file)
      }
      // console.log("FIles : ", this.files)
      // console.log("Form Data 2 : ", formData)
      this.service.uploadImages(formData).subscribe(
      response => {
          console.log(response)
          this.message = "All Images Uploaded Successfully!"
          this.retriveImages()
        }
      )
    }
  }

  retriveImages(){
    // console.log("call retrive Image method")
    this.service.retriveImages().subscribe(
      response => {
          console.log(response)
          this.images = response
      }
    )
  }

  downloadImage(downloadImageName){
    console.log("******* In Download Image Method *******")
    console.log("Download Image Name : ", downloadImageName)
    this.service.downloadImage(downloadImageName).subscribe(
      response => {
        console.log("Response : ", response)
        // this.blob = new Blob([response]);
        // var downloadUrl = window.URL.createObjectURL(this.blob);
        // var a = document.createElement('a');
        // document.body.appendChild(a);
        // a.href = downloadUrl;
        // a.download = downloadImageName;
        // a.click();
        // window.URL.revokeObjectURL(downloadUrl);
        // a.remove();

        saveAs(new Blob([response]), downloadImageName)

      },
      error => {
        console.log("Error : ", error)
        // var a = document.createElement('a');
        // document.body.appendChild(a);
        // a.href = error.url;
        // a.click();
        // a.remove();
        // const blob = new Blob([error.error.text], { type: "image/*"});
        // var url = window.URL.createObjectURL(blob);
        // var a = document.createElement('a');
        // document.body.appendChild(a);
        // a.href = error.url;
        // a.download = "filename.jpg";
        // a.click();
        // window.URL.revokeObjectURL(error.url);
        // a.remove();
      }
    )
  }

}
