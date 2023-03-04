import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-mood-selection',
  templateUrl: './user-mood-selection.component.html',
  styleUrls: ['./user-mood-selection.component.scss']
})



export class UserMoodSelectionComponent implements OnInit {

  @Input() emittedData: any;
  @Output() emittedDetail = new EventEmitter<any>()
  @Output() gotToMoods = new EventEmitter<any>()

  constructor() { }


  happyArr =
    [
      { id: 1, mood: "Pleasent", bgclr: "#FFE90040", src: "../../assets/img/Happy.svg" },
      { id: 2, mood: "Grateful", bgclr: "#FFE90061", src: "../../assets/img/Happy.svg" },
      { id: 3, mood: "Joyful", bgclr: "#FFE90070", src: "../../assets/img/Happy.svg" },
      { id: 4, mood: "Excited", bgclr: "#FFE90094", src: "../../assets/img/Happy.svg" },
      { id: 5, mood: "Ecstatic", bgclr: "#FFE900FF", src: "../../assets/img/Happy.svg" }
    ]
  sadArr = [
    { id: 1, mood: "Disappointed", bgclr: "#FFE90040", src: "../../assets/img/sad.svg" },
    { id: 2, mood: "Hopeless", bgclr: "#FFE90061", src: "../../assets/img/sad.svg" },
    { id: 3, mood: "Hurt", bgclr: "#FFE90070", src: "../../assets/img/sad.svg" },
    { id: 4, mood: "Despair", bgclr: "#FFE90094", src: "../../assets/img/sad.svg" },
    { id: 5, mood: "Depressed", bgclr: "#FFE900FF", src: "../../assets/img/sad.svg" }
  ]

  angryArr = [
    { id: 1, mood: "Let down", bgclr: "#FFE90040", src: "../../assets/img/Group 3 (7).svg" },
    { id: 2, mood: "Bitter", bgclr: "#FFE90061", src: "../../assets/img/Group 3 (7).svg" },
    { id: 3, mood: "Frustrated", bgclr: "#FFE90070", src: "../../assets/img/Group 3 (7).svg" },
    { id: 4, mood: "Resentful", bgclr: "#FFE90094", src: "../../assets/img/Group 3 (7).svg" },
    { id: 5, mood: "Furious", bgclr: "#FFE900FF", src: "../../assets/img/Group 3 (7).svg" }
  ]

  scaredArr = [
    { id: 1, mood: "Insecure", bgclr: "#FFE90040", src: "../../assets/img/scared.svg" },
    { id: 2, mood: "Nervous", bgclr: "#FFE90061", src: "../../assets/img/scared.svg" },
    { id: 3, mood: "Helpless", bgclr: "#FFE90070", src: "../../assets/img/scared.svg" },
    { id: 4, mood: "Overwhelmed", bgclr: "#FFE90094", src: "../../assets/img/scared.svg" },
    { id: 5, mood: "Threatened", bgclr: "#FFE900FF", src: "../../assets/img/scared.svg" }
  ]

  disgustedArr = [
    { id: 1, mood: "Disapproving", bgclr: "#FFE90040", src: "../../assets/img/disgusted.svg" },
    { id: 2, mood: "Nauseated", bgclr: "#FFE90061", src: "../../assets/img/disgusted.svg" },
    { id: 3, mood: "Repelled", bgclr: "#FFE90070", src: "../../assets/img/disgusted.svg" },
    { id: 4, mood: "Revolted", bgclr: "#FFE90094", src: "../../assets/img/disgusted.svg" },
    { id: 5, mood: "Horrified", bgclr: "#FFE900FF", src: "../../assets/img/disgusted.svg" }
  ]

  surpriseArr = [
    { id: 1, mood: "confused", bgclr: "#FFE90040", src: "../../assets/img/surprised.svg" },
    { id: 2, mood: "startled", bgclr: "#FFE90061", src: "../../assets/img/surprised.svg" },
    { id: 3, mood: "amazed", bgclr: "#FFE90070", src: "../../assets/img/surprised.svg" },
    { id: 4, mood: "perplexed", bgclr: "#FFE90094", src: "../../assets/img/surprised.svg" },
    { id: 5, mood: "Astonished", bgclr: "#FFE900FF", src: "../../assets/img/surprised.svg" }
  ]

  ngOnInit(): void {
    // console.log(this.selectedEmoji);
    console.log(this.emittedData, "aaaa");
    this.showSelectedMood();
  }

  selectedArr:any
  showSelectedMood() {
    if (this.emittedData.mood == mood.Happy){
      this.selectedArr = this.happyArr
    }else if(this.emittedData.mood == mood.Sad){
      this.selectedArr = this.sadArr
    }else if(this.emittedData.mood == mood.Angry){
      this.selectedArr = this.angryArr
    }else if(this.emittedData.mood == mood.Scared){
      this.selectedArr = this.scaredArr
    }else if(this.emittedData.mood == mood.Disgusted){
      this.selectedArr = this.disgustedArr
    }else if(this.emittedData.mood == mood.Surprise){
      this.selectedArr = this.surpriseArr
    }
    console.log(this.selectedArr);
  }


  emitMoodDetail() {
    this.emittedDetail.emit(this.selectedArr)
  }

  gotToAllMoods(){
    this.gotToMoods.emit(true);
  }

}


export enum mood {
  Happy = 'Happy',
  Sad = 'Sad',
  Scared = 'Scared',
  Angry = 'Angry',
  Disgusted = 'Disgusted',
  Surprise = 'Surprise',
}