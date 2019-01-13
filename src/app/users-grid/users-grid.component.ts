import { Component, OnInit } from '@angular/core';
import { DataService }       from '../data.service';
import { User }              from '../user';

@Component({
  selector: 'app-users-grid',
  templateUrl: './users-grid.component.html',
  styleUrls: ['./users-grid.component.scss']
})
export class UsersGridComponent implements OnInit {

  users: User[] = [];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    var obj: Object;
    this.data.getUsersByPageNumber(1).subscribe(data1 => {
      obj = Object.assign({}, data1);
      this.data.getUsersByPageNumber(2).subscribe(data2 => {
        obj = Object.assign({}, data2);
        this.data.getUsersByPageNumber(3).subscribe(data3 => {
          obj = Object.assign({}, data3);
          this.data.getUsersByPageNumber(4).subscribe(data4 => {
            this.pushUserFromObjectArray(data1);
            this.pushUserFromObjectArray(data2);
            this.pushUserFromObjectArray(data3);
            this.pushUserFromObjectArray(data4);
          })
        })
      })
    })
  }

  pushUserFromObjectArray(obj:Object) {
    for (let user of obj['data']) {
      this.users.push({ 
        id: user.id, first_name: user.first_name, 
        last_name: user.last_name, 
        avatar: user.avatar
      });
    }
  }
}
