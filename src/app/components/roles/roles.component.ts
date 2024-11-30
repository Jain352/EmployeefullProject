import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component,inject,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Interface } from 'readline';
import { Irole } from '../../model/interface/role';

@Component({
  selector: 'app-roles',
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{

  roleList:Irole[]=[];

  http=inject(HttpClient);

  ngOnInit(): void 
  {
    this.getAllRoles()
    alert("nter into ngin");
  }

  getAllRoles()
  {
this.http.get("https://freeapi.miniprojectideas.com/api/EmployeeApp/GetAllRoles").subscribe((res:any)=>{
  this.roleList=res.data;
  
});



alert("nter into ngtwon");
  }

































  // firstName: string ="Angular Tutorial";
  // angularVersion="version 18";
  // version:number=18;
  // isActive:boolean=false;
  // currentDate: Date =new Date;
  // inputType:string="radio";

  // showWelcomeAlert()
  // {
  //   alert("dsds")

  // }

  // showMessage(message:string)
  // {
  //   alert(message)

  // }

}
