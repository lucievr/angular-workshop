import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {EventsUpsertComponent} from './events-upsert.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {path: 'events/new', component: EventsUpsertComponent}
    ])
  ],
  declarations: [
    EventsUpsertComponent
  ]
})
export class EventsUpsertModule {

}
