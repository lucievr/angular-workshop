import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {EventsListComponent} from './events-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {path: 'events', component: EventsListComponent}
    ])
  ],
  declarations: [
    EventsListComponent
  ]
})
export class EventsListModule {

}
