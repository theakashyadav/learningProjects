import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Output() step1 = new EventEmitter<string>();

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

  selectMood: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  selectedId!: number;
  selectedMood(mood: string, id: number) {
    this.selectMood = mood;
    this.selectedId = id
    console.log(this.selectMood);
    
  }

  goToNext() {
    this.step1.emit(this.selectMood);
  }

}
