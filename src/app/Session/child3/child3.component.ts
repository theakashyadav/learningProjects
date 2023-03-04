import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {


  @Input() moodData:any;
  @Output () step3 = new EventEmitter<string>();
  @Output () backStep3 = new EventEmitter<boolean>();
  thankYouPage:string="Thank You!!";
  constructor() { }

  ngOnInit(): void {
  }

  goToNext(){
   this.step3.emit(this.thankYouPage);
  }
  goToBack(){
    this.backStep3.emit(true);
  }

}
