import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userInformation } from '../list-user/list-user.component';
import { User } from '../image-upload-server/image-upload-server.component';
import { movieShowsDetails } from '../dynamic-form/dynamic-form.component';
import { showsArray } from '../dynamic-full-form/dynamic-full-form.component';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationServiceService {

  constructor(
    private httpClient: HttpClient
  ) { }

  saveNewUser(formData: FormData){
    return this.httpClient.post("http://localhost:8080/saveNewUser", formData)
  }

  retriveUser(){
    return this.httpClient.get<userInformation[]>("http://localhost:8080/retriveUser")
  }

  uploadImage(formData: FormData){
    return this.httpClient.post("http://localhost:8080/upload", formData)
  }

  uploadImages(formData: FormData){
    return this.httpClient.post("http://localhost:8080/uploadmultipleFiles", formData)
  }

  retriveImages(){
    return this.httpClient.get("http://localhost:8080/retriveImages")
  }

  uploadImageServer(userInfo: User){
    return this.httpClient.post("http://localhost:8080/saveUser",userInfo)
  }

  downloadImage(downloadImageName: String){
    return this.httpClient.get(`http://localhost:8080/downloadFile/${downloadImageName}`, {responseType: 'blob'})
  }

  retriveImagesFromServer(){
    return this.httpClient.get("http://localhost:8080/retriveImagesFromServer")
  }

  saveMovieShows(movieShowsDetails: movieShowsDetails){
    return this.httpClient.post("http://localhost:8080/saveMovieShows", movieShowsDetails)
  }

  saveAllMovieShows(movieShowsAllDetails: showsArray){
    return this.httpClient.post("http://localhost:8080/saveAllMovieShows", movieShowsAllDetails)
  }

}
