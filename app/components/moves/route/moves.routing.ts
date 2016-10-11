import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovesInitComponent } from '../init/init.component'
import { MovesDailyComponent } from '../daily/daily.component'

const appRoutes: Routes = [
  { path: 'moves', component: MovesInitComponent },
  { path: 'moves/daily', component: MovesDailyComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);