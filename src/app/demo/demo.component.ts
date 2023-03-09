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


  recipentEmail = "neels@luckybeard.com";
  isEnabled : boolean = true;
  response : any ;
  role: any;
  name: any;
  email:any;
  phoneNumber:any;
  company: any;

  topStories : any[]=[];
  articles : any[] = [];

  flag : boolean= false;
  artFlag : boolean =false;

  emailData : any;


  //send email 
  sendEmail(): void {
    this.emailData = {
      "role":this.role,
      "name": this.name,
      "company":this.company,
      "phone":this.phoneNumber,
      "email":this.email
    }

    this.api.sendEmail(this.recipentEmail,this.emailData).subscribe(data=>{
      this.response = data;
      console.log(this.response)
    }, error => {
      console.error(error);
    });

  }

  // email validation

  // get the top stories
  getStory(){
    this.api.getTopStories().subscribe(data=>{
      this.topStories = data;  
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
