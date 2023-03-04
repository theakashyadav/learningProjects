import { Component, OnInit } from '@angular/core';
import { empMENU } from '../JSON_DATA/data';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }
  emp_Detail = empMENU
  userBtn!: string;
  selectedEmp:any;
  message:any;
  ngOnInit(): void {
    console.log(this.emp_Detail);
  }

  onSelectEmp(id: any) {
      this.emp_Detail.filter(res => {
        if(res){
          if(res.emp_Id == id) {
            this.selectedEmp = res
            this.message = res.emp_desig
          }
        }
      })
  }


  btnColor(empDesig: any): any {
    if (empDesig === 'Software Developer') {
      return 'dev'
    } else if (empDesig === 'Business Analyst') {
      return 'ba'
    } else if (empDesig === 'Human Resource') {
      return 'hr'
    } else if(empDesig === 'Quality Analyst'){
      return 'qa'
    }
  }
}
