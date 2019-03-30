import {Component} from '@angular/core';
import {Event} from '../event.model';
import {EventsService} from '../events.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './events-upsert.component.html'
})
export class EventsUpsertComponent {
  name: string;
  location: string;
  free: boolean;

  constructor(private eventsService: EventsService, private router: Router) {

  }

  saveEvent() {
    const event: Event = {
      id: new Date().getTime(),
      name: this.name,
      location: this.location,
      free: this.free
    };

    this.eventsService.createEvent(event).subscribe(() => {
      this.router.navigate(['/events']);
    });
  }
}
