import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {

  firstName: string ="Angular Tutorial";
  angularVersion="version 18";
  version:number=18;
  isActive:boolean=false;
  currentDate: Date =new Date;
  inputType:string="radio";

  showWelcomeAlert()
  {
    alert("dsds")

  }

  showMessage(message:string)
  {
    alert(message)

  }

}
