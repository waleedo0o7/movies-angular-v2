import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MovieDetails, MovieList } from '../models/main-models';

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  apiKey = "83fe1a54d4bb2106a602073bc9642ca2";
  baseUrl = "https://api.themoviedb.org/3/";
  imagesSmUrl = "https://image.tmdb.org/t/p/w500/";
  imagesLgUrl = "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/";
  movieDetails!:MovieDetails;
  movieList!: MovieList;

  constructor(private http:HttpClient) {}

  getMoviesList(url:string , pageNum:string = "1" ,  searchedWord:string=""){
    return this.http.get(url , {
      params : {
        api_key : this.apiKey,
        page : pageNum,
        query : searchedWord
      }
    });
  }

  getMovieVideo(id:any){
    let url = `${this.baseUrl}/movie/${id}/videos`;
    return this.http.get(url , {
      params :{
        api_key : this.apiKey
      }
    })
  }

  getMovieDetailsById(id:any){
    let url = `https://api.themoviedb.org/3/movie/${id}`;
    return this.http.get(url , {
      params : {
        api_key : this.apiKey
      }
    })
  }

  getGenreList(){
    let url = `${this.baseUrl}/genre/movie/list`;
    return this.http.get(url , {
      params :{
        api_key : this.apiKey
      }
    })
  }

  ngOnInit(){
    this.getGenreList();
  }

}
