import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '@parvathyg/services';
import { EventData } from '@parvathyg/services';

@Component({
  selector: 'app-nav-tool',
  templateUrl: './nav-tool.component.html',
  styleUrls: ['./nav-tool.component.css']
})
export class NavToolComponent implements OnInit {

  @Input() data: any = {};

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }

  public navAction() {
    console.log(this.data);
    this.eventService.emit(
      new EventData('show_notification', this.data)
    );
  }

}
