import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor(
    private router: Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
  }

  userReload(){
    // Steps to use router programatically
    // 1.The purpose of this method is to test the router programatically.
    // 2.First import the router,
    // 3.Inject the router
    // 4.now, navigate to required path and this navigate accepts array.
    this.router.navigate(['users']);

    // if required to use relative path the use the below commented code,
    // 1. import the ActivatedRoute
    // 2. inject the ActivatedRoute as route
    // 3. provide the configuration as JS object as shown below : 
    this.router.navigate(
      ['home'],
      {relativeTo : this.route}
    );
    

  }
}
