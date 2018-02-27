import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServers: boolean = false;
  serverCreationStatus: string = 'No server has been created yet';
  serverName: string = '';
  serverCreated: boolean = false;
  servers = ['TESTSERVER1', 'TESTSERVER2'];
  serverId: number = 0;

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverId = this.servers.length + 1;
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = 'Server ID ' + this.serverId + ', named ' + this.serverName + ', was created';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
