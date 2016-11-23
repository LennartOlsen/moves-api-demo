import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { GlobalModule } from '../../global/module/global.module'

import { routing } from '../route/eventodense.routing'

import { EventOdenseInitComponent } from '../init/init.component'
import { EventOdenseEventComponent } from '../event/event.component'

import { CreateEventComponent } from '../components/create.event/create.event'

import { EventOdenseService } from '../service/eventodense.service'

import { MapService } from '../../leaflet/service/map.service'


@NgModule({
  imports:      [ routing, GlobalModule ],
  declarations: [ EventOdenseInitComponent, CreateEventComponent, EventOdenseEventComponent ],
  providers:    [ EventOdenseService, MapService ]
})
export class EventOdenseModule { }