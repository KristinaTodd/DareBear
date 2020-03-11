import express from "express";
import BaseController from "../utils/BaseController";
import { roomService } from "../services/RoomService";

export class RoomsController extends BaseController {
  constructor() {
    super("api/room");
    this.router
      .get("/id", this.getRoomById)
      .post("", this.createRoom)
      .put("/id", this.editRoom)
      .delete("/id", this.deleteRoom)
  }
  async getRoomById(req, res, next) {
    try {
      let data = await roomService.getRoomById(req.params.id)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async createRoom(req, res, next) {
    try {
      let data = await roomService.createRoom(req.params)
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async editRoom(req, res, next) {
    try {
      let data = await roomService.editRoom(req.params.id, req.body)
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async deleteRoom(req, res, next) {
    try {
      let data = await roomService.deleteRoom(req.params.id)
      res.send("deleted");
    } catch (error) {
      next(error);
    }
  }
}
