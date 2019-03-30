import {Component} from '@angular/core';
import {Event} from '../event.model';
import {EventsService} from '../events.service';

@Component({
  templateUrl: './events-list.component.html'
})
export class EventsListComponent {

  events: Event[];

  constructor(eventsService: EventsService) {
    eventsService.getEvents().subscribe(events => {
      this.events = events;
    });
  }

}
