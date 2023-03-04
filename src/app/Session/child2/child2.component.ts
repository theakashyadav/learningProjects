import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {


  @Input() moodFromParent:string='';
  @Output() step2 =new EventEmitter<any>();
  @Output() backStep2 =new EventEmitter<any>();



  happyArr = [{id:1, mood:"Pleasent", bgclr:"#FFE90040", src:"../../assets/img/happy.svg"},
  {id:2, mood:"Grateful", bgclr:"#FFE90061", src:"../../assets/img/happy.svg"},
  {id:3, mood:"Joyful", bgclr:"#FFE90070", src:"../../assets/img/happy.svg"},
  {id:4, mood:"Excited", bgclr:"#FFE90094", src:"../../assets/img/happy.svg"},
  {id:5, mood:"Ecstatic", bgclr:"#FFE900FF", src:"../../assets/img/happy.svg"}
  ]
  
  sadArr = [{id:1, mood:"Disappointed", bgclr:"#FFE90040", src:"../../assets/img/sad.svg"},
  {id:2, mood:"Hopeless", bgclr:"#FFE90061", src:"../../assets/img/sad.svg"},
  {id:3, mood:"Hurt", bgclr:"#FFE90070", src:"../../assets/img/sad.svg"},
  {id:4, mood:"Despair", bgclr:"#FFE90094", src:"../../assets/img/sad.svg"},
  {id:5, mood:"Depressed", bgclr:"#FFE900FF", src:"../../assets/img/sad.svg"}
  ]
  
  angryArr = [{id:1, mood:"Let down", bgclr:"#FFE90040", src:"../../assets/img/angry.svg"},
  {id:2, mood:"Bitter", bgclr:"#FFE90061", src:"../../assets/img/angry.svg"},
  {id:3, mood:"Frustrated", bgclr:"#FFE90070", src:"../../assets/img/angry.svg"},
  {id:4, mood:"Resentful", bgclr:"#FFE90094", src:"../../assets/img/angry.svg"},
  {id:5, mood:"Furious", bgclr:"#FFE900FF", src:"../../assets/img/angry.svg"}
  ]
  
  scaredArr = [{id:1, mood:"Insecure", bgclr:"#FFE90040", src:"../../assets/img/scared.svg"},
  {id:2, mood:"Nervous", bgclr:"#FFE90061", src:"../../assets/img/scared.svg"},
  {id:3, mood:"Helpless", bgclr:"#FFE90070", src:"../../assets/img/scared.svg"},
  {id:4, mood:"Overwhelmed", bgclr:"#FFE90094", src:"../../assets/img/scared.svg"},
  {id:5, mood:"Threatened", bgclr:"#FFE900FF", src:"../../assets/img/scared.svg"}
  ]
  
  disgustedArr = [{id:1, mood:"Disapproving", bgclr:"#FFE90040", src:"../../assets/img/Disgusted.svg"},
  {id:2, mood:"Nauseated", bgclr:"#FFE90061", src:"../../assets/img/Disgusted.svg"},
  {id:3, mood:"Repelled", bgclr:"#FFE90070", src:"../../assets/img/Disgusted.svg"},
  {id:4, mood:"Revolted", bgclr:"#FFE90094", src:"../../assets/img/Disgusted.svg"},
  {id:5, mood:"Horrified", bgclr:"#FFE900FF", src:"../../assets/img/Disgusted.svg"}
  ]
  
  surpriseArr = [{id:1, mood:"confused", bgclr:"#FFE90040", src:"../../assets/img/surprised.svg"},
  {id:2, mood:"startled", bgclr:"#FFE90061", src:"../../assets/img/surprised.svg"},
  {id:3, mood:"amazed", bgclr:"#FFE90070", src:"../../assets/img/surprised.svg"},
  {id:4, mood:"perplexed", bgclr:"#FFE90094", src:"../../assets/img/surprised.svg"},
  {id:5, mood:"Astonished", bgclr:"#FFE900FF", src:"../../assets/img/surprised.svg"}
  ]

  constructor() { }

  ngOnInit(): void {
    this.userDataBasedOnMood();
  }
noData:string="No Data Found";
  userDataBasedOnMood(){
   if(this.moodFromParent == 'Sad'){
      this.step2.emit(this.sadArr);
   }else if(this.moodFromParent == 'Happy'){
    this.step2.emit(this.happyArr);
   }else if(this.moodFromParent == 'Angry'){
    this.step2.emit(this.angryArr);
   }else if(this.moodFromParent == 'Disgusted'){
    this.step2.emit(this.disgustedArr);
   }else if(this.moodFromParent == 'Scared'){
    this.step2.emit(this.scaredArr);
   }else if(this.moodFromParent == 'Surprise'){
    this.step2.emit(this.surpriseArr);
   }
   else {
    this.step2.emit(this.noData);
   }
  }

  back(){
  this.backStep2.emit(true);
  }

}
