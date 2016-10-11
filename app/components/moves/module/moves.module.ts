import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';

import { GlobalModule } from '../../global/module/global.module'

import { routing } from '../route/moves.routing'

import { MovesInitComponent } from '../init/init.component'
import { MovesDailyComponent } from '../daily/daily.component'

import { MovesService } from '../service/moves.service'



@NgModule({
  imports:      [ routing, FormsModule, GlobalModule ],
  declarations: [ MovesInitComponent, MovesDailyComponent ],
  providers:    [ MovesService ]
})
export class MovesModule { }