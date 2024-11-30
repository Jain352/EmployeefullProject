import { Component } from '@angular/core';
import { DesignationComponent } from '../designation/designation.component';
import { RolesComponent } from '../roles/roles.component';

@Component({
  selector: 'app-master',
  imports: [DesignationComponent,RolesComponent],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {
currentComponent:string="";

}
