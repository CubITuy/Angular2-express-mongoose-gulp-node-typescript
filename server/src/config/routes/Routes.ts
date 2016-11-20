/**
 * Created by Martín Sabatella on 19-11-2016.
 */
 
import express = require('express');
import path = require('path');

import HeroRoutes = require('../routes/HeroRoutes');
import PersonaRoutes = require('../routes/PersonaRoutes');

var app = express();

class Routes {

    get routes() {

        app.use("/", new HeroRoutes().routes);
        app.use("/", new PersonaRoutes().routes);
        
        return app;
    }
}
export = Routes;