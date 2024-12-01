import { Component, inject, OnInit } from '@angular/core';
import {Client} from '../../model/class/Client';import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/interface/role';

@Component({
  selector: 'app-client',
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{

  clientservice=inject(ClientService);

clientObj:Client= new Client();
clientList:Client[]=[];

ngOnInit(): void {
  this.loadClient();
}

loadClient()
{
  this.clientservice.getAllClients().subscribe((result:APIResponseModel)=>
    {
      this.clientList=result.data;
     // this.isLoader=false;         
    }
  ,
  error=>{alert("API Block")

  })
  
}

onSaveClient()
{
  debugger;
  this.clientservice.addUpdate
  (this.clientObj).subscribe((res:APIResponseModel)=>{
    if(res.result)
    {
      alert("Client Created Sucess")
      this.loadClient();
    }
    else{
    alert(res.message)
    }
  })
}
deleteClientById()
{
  
}

}
