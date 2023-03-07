import {  Component,ElementRef, OnInit,EventEmitter, Output ,Input} from '@angular/core';
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
  @Input()
  onButtonClick!: Function;
  @Output() btnBuyer = new EventEmitter();

   // dealership login
  dealershipLogin(): void {
    window.open(this.externalUrl,'_blank');
  }

  // scroll to buyers
  scrollToBuyer() {
    this.btnBuyer.emit();
    this.onButtonClick();
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
