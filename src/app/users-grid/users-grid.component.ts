import { Component, OnInit } from '@angular/core';
import { DataService }       from '../data.service';

@Component({
  selector: 'app-users-grid',
  templateUrl: './users-grid.component.html',
  styleUrls: ['./users-grid.component.scss']
})
export class UsersGridComponent implements OnInit {

	users: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
  	this.data.getUsers().subscribe(data => {
  		this.users = data;
  		console.log(this.users);
  	})
  }
  
}
