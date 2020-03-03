import { Component, OnInit } from '@angular/core';
import { NavToolComponent } from '../nav-tool/nav-tool.component';
import { EventService } from '@parvathyg/services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private eventService: EventService) { }

  public navTools:any;

  ngOnInit(): void {
    this.navTools = [{"name": "App1", "component": NavToolComponent, icon: "notifications.svg" },{"name": "App2", "component": NavToolComponent, icon: "help.svg"}];
    this.eventService.on('show_notification', (data => this.filterNotification(data)));
    this.eventService.on('nav_action', (data => this.externalAction(data)));
  }

  public onNavAction(action) {
    console.log("Received event from nav-component - " + action);
    if(action === 'home') {
      window.open('http://localhost:4200/', "_self");
    }
  }

  filterNotification(data) {
    console.log('filter notifications for : '+ data.name);
  }

  externalAction(data) {
    console.log('event from external component : '+ data);
  }

}
