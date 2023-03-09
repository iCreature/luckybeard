import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly APIUrl = "https://hacker-news.firebaseio.com/v0/item/";
  private sendUrl = 'http://localhost:3000/send-email';
  readonly storiesUrl = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
  constructor(private http: HttpClient) { }

  // get articles
  // 9129911.json?print=pretty
  getArticle(article:any): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+article+".json?print=pretty");
  }

  // get top stories id
  getTopStories(): Observable<any[]>{
    return this.http.get<any[]>(this.storiesUrl);
  }


  // send email 
  sendEmail(recipentEmail: any, emailData : any){
    const body ={
      recipentEmail, emailData
    };
    return this.http.post(this.sendUrl,body);
  }

  // get the top storie first use the first 3 id's to pass 
  // into the main api call for the stories
}
