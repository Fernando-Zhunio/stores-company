// const express = require('express');
import express from 'express';
import {routes} from './api/routes/routes';
import { ConnectionDB } from './connection';
const hostname = '127.0.0.1';
const port = 3000;
const app = express();

// const routes = require('./routes/routes');

app.use(express.static('public'));
app.use('/', routes)

app.listen(port, hostname, () => {
    const connection = ConnectionDB.open();
    
    console.log(`Server running at  http://${hostname}:${port}/`);
});