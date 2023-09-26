import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';


interface Department {
  id: string;
  names: string;
}

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})


export class DeptListComponent implements OnInit{
  public selectedId:number=0;
  
  departments:Department[]=[
    {id:"1", names:"Angular"},
    {id:"2",names:"dotnet"},
    {id:"3",names:"React js"},
    {id:"4",names:"Java"}
  ]
  ngOnInit(){
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')??'0');
      this.selectedId = id;
    
    } );
  }
  constructor(private route:ActivatedRoute,private router:Router){}
  onselect(departments:Department)
  {
    this.router.navigate(['/departments', departments.id])
  }
}
