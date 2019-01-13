import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } 	 from '@angular/router';
import { DataService }       from '../data.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

	user: Object;

  constructor(private route: ActivatedRoute, private data: DataService) { }

  ngOnInit() {
  	this.getUserDetails();
  }

  getUserDetails(): void {
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.data.getUserById(id).subscribe(data => {
  		this.user = data;
  		console.log(this.user);
  	})
  }

}
