import { Component, OnInit } from '@angular/core';


@Component({
  //selector: 'app-servers',
  //selector:'[app-servers]', u can use a an attributes
  selector:'.app-servers', //u can use as a class
  templateUrl: './servers.component.html',
  //template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;

  serverCreationStatus = 'No server was created';

  serverName = 'Test Sever Name';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created' + this.serverName ;
  }

  onUpdatetoServerName(event: Event) {
    this.serverName =  (<HTMLInputElement>event.target).value;
  }

}
