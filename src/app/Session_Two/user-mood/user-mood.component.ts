import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-mood',
  templateUrl: './user-mood.component.html',
  styleUrls: ['./user-mood.component.scss']
})
export class UserMoodComponent implements OnInit {

  @Output() isNextPage = new EventEmitter<string>()
  @Output() emittedData = new EventEmitter<any>()

  constructor() { }


  moodArr = [
    { id: 1, mood: "Happy", bgclr: "#FFE900FF", src: "../../assets/img/Happy.svg" },
    { id: 2, mood: "Sad", bgclr: "#05C3E285", src: "../../assets/img/sad.svg" },
    { id: 3, mood: "Angry", bgclr: "#EA59595E", src: "../../assets/img/Group 3 (7).svg" },
    { id: 4, mood: "Disgusted", bgclr: "#5CDD785E", src: "../../assets/img/disgusted.svg" },
    { id: 5, mood: "Scared", bgclr: "#0003E94D", src: "../../assets/img/sad.svg" },
    { id: 5, mood: "Surprise", bgclr: "#0003E94D", src: "../../assets/img/ecstatic.svg" },
    { id: 6, mood: "Bored", bgclr: "#FFE900FF", src: "../../assets/img/Group 3.svg" },
    { id: 7, mood: "Guilty", bgclr: "#05C3E285", src: "../../assets/img/Group 3 (7).svg" },
    { id: 8, mood: "Lonely", bgclr: "#EA59595E", src: "../../assets/img/disgusted.svg" },
    { id: 9, mood: "Content", bgclr: "#5CDD785E", src: "../../assets/img/Happy.svg" },
    { id: 10, mood: "Anxious", bgclr: "#0003E94D", src: "../../assets/img/ecstatic.svg" },
    { id: 11, mood: "Negative", bgclr: "#0003E94D", src: "../../assets/img/disgusted.svg" },
    { id: 12, mood: "Proud", bgclr: "#0003E94D", src: "../../assets/img/happy-full.svg" }
  ]


  ngOnInit(): void {
    console.log(
      this.moodArr
    );
  }

  selectedData:any;
  forbg:any;
  emitData(data:any,id:number){
    // this.emittedData.emit(data)
    this.forbg = id
    this.emittedData.emit(data)
    this.selectedData = data
  }
  emojiSelected(){
    this.isNextPage.emit(this.selectedData);
    console.log(this.selectedData);
  }
}
