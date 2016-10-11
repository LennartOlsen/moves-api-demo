"use strict";
var router_1 = require('@angular/router');
var init_component_1 = require('../init/init.component');
var daily_component_1 = require('../daily/daily.component');
var appRoutes = [
    { path: 'moves', component: init_component_1.MovesInitComponent },
    { path: 'moves/daily', component: daily_component_1.MovesDailyComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=moves.routing.js.map