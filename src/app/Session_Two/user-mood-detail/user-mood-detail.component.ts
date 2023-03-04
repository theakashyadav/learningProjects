import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-mood-detail',
  templateUrl: './user-mood-detail.component.html',
  styleUrls: ['./user-mood-detail.component.scss']
})
export class UserMoodDetailComponent implements OnInit {

  @Input() emittedMoodData!:any;
  @Output() emitForThankYou = new EventEmitter<boolean>()
  @Output() emitForMoodDetail = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
    console.log(this.emittedMoodData);
  }

  forThankYou(){
    this.emitForThankYou.emit(true)
  }

  forMoodSelection(){
    this.emitForMoodDetail.emit(true)
  }

}
