import { Component,ElementRef, OnInit  } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

   constructor(private el: ElementRef, private router: Router){

  }
  externalUrl = 'https://www.luckybeard.com/';
  ngOnInit() {}

     // dealership login
  dealershipLogin(): void {
      window.open(this.externalUrl,'_blank');
  }

  //scroll to buyer section
   // scroll to buyers
   scrollToBuyer(){
    const section = this.el.nativeElement.querySelector('#buyer-id');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // navigate to the submit form here
  requestDemo(): void{
    //
    this.router.navigateByUrl('/demo');
  }

  //scroll to seccurity section

  scrollToSecurity(): void{
    const section = this.el.nativeElement.querySelector('#security');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // scroll to private seller
  scrollToPrivateSeller(): void{
    const section = this.el.nativeElement.querySelector('#private-seller');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // scroll to immediate response
  scrollToResponse(): void {
    const section = this.el.nativeElement.querySelector('#Response-id');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollToDealerShip():void {
    const section = this.el.nativeElement.querySelector('#dealership');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}
