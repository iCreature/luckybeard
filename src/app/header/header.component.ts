import {  Component,ElementRef, OnInit,EventEmitter, Output ,Input, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router, private el: ElementRef){

  }
  externalUrl = 'https://www.luckybeard.com/';

 // @Input() buyerSectionRef: ElementRef = null;
  @Output() btnBuyer = new EventEmitter();
 

   // dealership login
  dealershipLogin(): void {
    window.open(this.externalUrl,'_blank');
  }

  // scroll to buyers
  emitButtonClick(){
    this.btnBuyer.emit();
    this.onButtonClick();
    }

    onButtonClick(){


      this.btnBuyer.emit();
    }



  // scroll to private seller
  onSellerButton(): void{
    const section = this.el.nativeElement.querySelector('#buyer-id');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // scroll to immediate response
  onResponseButton(): void {
    const section = this.el.nativeElement.querySelector('#buyer-id');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}
