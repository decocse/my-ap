import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-dept-detail',
  templateUrl: './dept-detail.component.html',
  styleUrls: ['./dept-detail.component.css']
})
export class DeptDetailComponent implements OnInit {
  public departmentid:number=0;
  constructor(private route:ActivatedRoute,private router:Router){}
  ngOnInit()
  {
    console.log('heyy')
    this.route.paramMap.subscribe((params:ParamMap)=>{
      console.log('letssee')
      let id=parseInt(params.get('id')??'0');
      console.log(id)
      this.departmentid=id;
    })
    console.log('Byee')
  }
  onnext()
  {
    
    let nid=this.departmentid+1;
    
    this.router.navigate(['/departments',nid]);
    
  }
}
