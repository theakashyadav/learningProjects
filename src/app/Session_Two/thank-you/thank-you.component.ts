import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {

  @Output() goOnDetail = new EventEmitter<any>()

  constructor(private route:Router) { }

  ngOnInit(): void {
    setTimeout(() => {
       this.onMoodDetail();
    }, 2000);
  }

  onMoodDetail(){
    this.goOnDetail.emit(true)
  }

}
