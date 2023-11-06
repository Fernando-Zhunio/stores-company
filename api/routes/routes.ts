// const express = require('express');
import express from "express";
import { AppController } from "../controllers/appController";

export const routes = express.Router();
const appController = new AppController();

routes.get("/", appController.index);
