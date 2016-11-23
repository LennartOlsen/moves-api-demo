import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventOdenseInitComponent } from '../init/init.component'
import { EventOdenseEventComponent } from '../event/event.component'

const appRoutes: Routes = [
  { path: 'events', component: EventOdenseInitComponent },
  { path: 'events/:id', component: EventOdenseEventComponent}
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);