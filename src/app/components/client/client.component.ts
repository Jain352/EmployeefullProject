import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/interface/role';

@Component({
  selector: 'app-client',
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']  // Fixed typo here: should be styleUrls, not styleUrl
})
export class ClientComponent implements OnInit {
  
  clientservice = inject(ClientService);  // Using dependency injection
  clientObj: Client = new Client();  // Initialize client object
  clientList: Client[] = [];  // Initialize client list
  
  ngOnInit(): void {
    this.loadClient();  // Load clients when component initializes
  }

  // Method to load clients from the server
  loadClient() {
    this.clientservice.getAllClients().subscribe(
      (result: APIResponseModel) => {
        this.clientList = result.data;  // Update client list with the API response
      },
      error => {
        alert("Failed to load clients from the API");  // Improved error message
      }
    );
  }

  // Method to save or update client details
  onSaveClient() {
    debugger;
    this.clientservice.addUpdate(this.clientObj).subscribe(
      (res: APIResponseModel) => {
        if (res.result) {
          alert("Client Created Successfully");
          this.loadClient();  // Refresh client list after saving
          this.clientObj = new Client();  // Clear the form after saving
        } else {
          alert(res.message);  // Display message if saving fails
        }
      },
      error => {
        alert("Failed to save client. Please try again.");  // Handle any save errors
      }
    );
  }

  // Method to delete a client
 /* onDelete(id: number) {
    const isDelete = confirm("Are you sure you want to delete?");
    if (isDelete) {
      this.clientservice.deleteClientById(id).subscribe(
        (res: APIResponseModel) => {
          if (res.result) {
            alert("Client Deleted Successfully");
            this.loadClient();  // Reload client list after deletion
            this.clientObj = new Client();  // Reset the client form
          } else {
            alert(res.message);  // Display message if deletion fails
          }
        },
        error => {
          alert("Failed to delete client. Please try again.");  // Handle any delete errors
        }
      );
    }
  }*/


    onDelete(id: number) {
      const isDelete = confirm("Are you sure you want to delete?");
      if (isDelete) {
        this.clientservice.deleteClientById(id).subscribe(
          (res: APIResponseModel) => {
            if (res.result) {
              alert("Client Deleted Successfully");
              //this.removeClientFromList(id);  // Update client list locally
              this.clientObj = new Client();  // Reset the client form
            } else {
              alert(res.message || "Deletion failed. Please try again.");
            }
          },
          error => {
            // Handle different error statuses
            if (error.status === 404) {
              alert("Client not found.");
            } else if (error.status === 500) {
              alert("Server error. Please try again later.");
            } else {
              alert("Failed to delete client. Please try again.");
            }
          }
        );
      }
    }
    
    // Optionally, update client list locally without reloading from the server
  /*  removeClientFromList(id: number) {
      this.clientList = this.clientList.filter(client => client.id !== id);
    }*/
}
