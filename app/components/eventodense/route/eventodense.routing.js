"use strict";
var router_1 = require('@angular/router');
var init_component_1 = require('../init/init.component');
var event_component_1 = require('../event/event.component');
var appRoutes = [
    { path: 'events', component: init_component_1.EventOdenseInitComponent },
    { path: 'events/:id', component: event_component_1.EventOdenseEventComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=eventodense.routing.js.map