import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  constructor() { }

  user_mood:boolean = false
  user_mood_selected:boolean = false
  user_mood_selected_detail:boolean = false
  user_thank_you:boolean = false


  //for getting user mood selection
  emittedDataInParent:any

  ngOnInit(): void {
  }

  newNavigation(s:any){
    console.log(s,"sss");
    this.user_mood = true
    this.user_mood_selected = true;
  }
  getEmittedData(d:any){
    this.emittedDataInParent = d;
    console.log(this.emittedDataInParent,"ddddd");
  }

  moodDetailData:any
  getEmittedMoodDetail(detail:string){
    this.moodDetailData = detail
    this.user_mood_selected = false
    this.user_mood_selected_detail = true
  }

  forMoodDetail(){
    this.user_mood_selected_detail = false
    this.user_mood_selected = true
  }


  forThankYou(){
    this.user_mood_selected_detail  = false
    this.user_thank_you = true
  }

  goOnDetail(){
    this.user_mood = false
  this.user_mood_selected = false
  this.user_mood_selected_detail = false
  this.user_thank_you = false
  }

  goToMood(){
    this.user_mood_selected = false
    this.user_mood = false
  }
  

}
