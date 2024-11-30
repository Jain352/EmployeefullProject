import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { IDesignation } from '../../model/interface/role';
import { APIResponseModel } from '../../model/interface/role';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {

  designationList:IDesignation[]=[];
  masterservice=inject(MasterService);

  ngOnInit(): void {
    this.masterservice.getDesignation().subscribe((result:APIResponseModel)=>
      {
        this.designationList=result.data         
      }
    ,
    error=>{alert("API Block")

    })
  }

 
}
