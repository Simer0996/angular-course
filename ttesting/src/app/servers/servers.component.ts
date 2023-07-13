import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: 'app-servers',
  selector: '.app-servers.',

  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  ServerName = "Test Server";
  ServerCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {

  }

  onCreateServer() {
    this.ServerCreated = true
    this.serverCreationStatus = "Server Created !" + this.ServerName
  }

  onUpdateServerName(event: Event) {
    this.ServerName = (<HTMLInputElement>event.target).value
  }
}
