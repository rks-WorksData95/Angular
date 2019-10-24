import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserRegistrationServiceService } from '../service/user-registration-service.service';

export class User{
  constructor(
    public newFileName: String,
    public uploadFileName: string,
    public file:File
  ){}
}

@Component({
  selector: 'app-image-upload-server',
  templateUrl: './image-upload-server.component.html',
  styleUrls: ['./image-upload-server.component.css']
})
export class ImageUploadServerComponent implements OnInit {
  
  public file: any = File
  public url: string | ArrayBuffer = 'http://placehold.it/120';
  message: String
  public images: any
  blob: Blob

  constructor(
    private fb: FormBuilder,
    private service: UserRegistrationServiceService
  ) { }

  userInfo = this.fb.group({
    newFileName: ['', Validators.required],
    uploadFileName: ['', Validators.required],
    file: null
  })

  ngOnInit() {
    this.retriveImagesFromServer()
  }

  onSelectFile(event){
    if(event.target.files && event.target.files[0]){
      
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
          
        this.file = event.target.files[0]

        var reader = new FileReader()        
        reader.readAsDataURL(event.target.files[0])
        reader.onload = (event) => {
          this.url = reader.result
        }
        // alert("Url : "+this.url.slice(24))
    }
  }

  saveForm(){
    console.log('*** In SaveForm Method ***')
      // const formData = new FormData()
      // formData.append("file", this.file)
      // console.log("Form Data 1 : ", formData)

      // this.userInfo.setValue({
      //   newFileName:"",
      //   uploadFileName: this.file.name,
      //   file:this.url
      // })
      // this.userInfo.get('uploadFileName').setValue(this.file.name)
      this.userInfo.get('file').setValue(this.url)
      console.log("Form Data", this.file.name)
      console.log("Form Data", this.userInfo.value)
      this.service.uploadImageServer(this.userInfo.value).subscribe(
      response => {
          setTimeout(() => {
            console.log(response)
            this.message = "Image Uploaded Successfully!"
            this.retriveImagesFromServer()
            alert('Image Uploaded Successfully!');
          }, 1000);
        }
      )
  }

  retriveImagesFromServer(){
    // console.log("call retrive Image method")
    this.service.retriveImagesFromServer().subscribe(
      response => {
          console.log(response)
          this.images = response
      }
    )
  }

}
