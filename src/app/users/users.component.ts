import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userId : string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

     this.userId =  this.route.snapshot.params['id'];
  }


}
