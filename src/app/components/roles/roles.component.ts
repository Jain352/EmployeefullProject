import { HttpClient } from '@angular/common/http';
import { Component,inject,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Interface } from 'readline';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{

  roleList:Interface[]=[];

  http=inject(HttpClient);

  ngOnInit(): void 
  {
    this.getAllRoles()
    //alert("nter into ngin");
  }

  getAllRoles()
  {
this.http.get("https://freeapi.miniprojectideas.com/api/EmployeeApp/GetAllRoles").subscribe((res:any)=>{
  this.roleList=res.data;
  
});



//alert("nter into ngtwon");
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
