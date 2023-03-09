import { Component, OnInit,AfterViewInit} from '@angular/core';
import { Validators } from '@angular/forms';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent  implements OnInit,AfterViewInit{

  constructor(private api : ApiService){}


  recipentEmail = "mxolisi1205@gmail.com";
  isEnabled : boolean = false;
  response : any;
  role: any;
  name: any;
  email:any;
  phoneNumber:any;
  company: any;

  topStories : any[]=[];
  articles : any[] = [];

  flag : boolean= false;
  artFlag : boolean =false;


  //send email 
  sendEmail(emailAddress: any): void {

  }

  // email validation

  // get the top stories
  getStory(){
    this.api.getTopStories().subscribe(data=>{
      this.topStories= data;
      
    });
  }


// init
  ngOnInit(): void {
    this.api.getTopStories().subscribe(data=>{
      this.topStories= data;
      this.topStories = this.topStories.slice(0,3);
      this.flag = true;
      console.log(this.topStories);
    });
    //this.topStories = this.topStories.slice(0,3);
    
    // artciles
    //this.getArticles() ;
   }


   ngAfterViewInit() {
    setTimeout(()=>{
      if(this.flag){
        console.log(this.topStories);
        for (let i = 0; i < this.topStories.length; i++) {
          this.api.getArticle(this.topStories[i]).subscribe(data=>{
            this.artFlag = true;
            this.articles.push(data)   ;
            // this.articles= JSON.parse(JSON.stringify(data));
            console.log(this.articles);
          }); 
        }
      }
    },4000)
                   
   }

   // populate articles 
   getArticles() : void{
    for(let story of this.topStories){
      this.api.getArticle(story).subscribe(data=>{
        this.articles = data
      });
    }
   }
 
}
