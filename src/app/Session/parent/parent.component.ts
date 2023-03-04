import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {



moodFromParent:string='';
moodData:any;
thanksGiving:string='';
child_one:boolean=true;
child_two:boolean=false;
child_three:boolean=false;
child_four:boolean=false;
  constructor() { }


  ngOnInit(): void {
   
  }


  getNextData(mood:string){
    this.moodFromParent=mood;
    this.child_one=false;
    this.child_two=true;
  }

  moodWiseData(moodData:any){
    this.child_one=false;
    this.child_two=false;
    this.child_three=true;
    this.moodData=moodData;
  }

  thankyou(data:string){
    this.thanksGiving=data;
    this.child_one=false;
    this.child_two=false;
    this.child_three=false;
    this.child_four=true;
  }
  goToBack(e:boolean){
    this.child_one=true;
    this.child_two=false;
    this.child_three=false;
    this.child_four=false;
  }

  backStep3(e:boolean){
    this.child_one=false;
    this.child_two=true;
    this.child_three=false;
    this.child_four=false;
  }

}
