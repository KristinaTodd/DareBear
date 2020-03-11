import express from "express";
import BaseController from "../utils/BaseController";
import { roomService } from "../services/RoomService";

export class RoomsController extends BaseController {
  constructor() {
    super("api/room");
    this.router = express
      .Router()
      .get("/:id", this.getRoomById) //good
      .post("", this.createRoom) //good
      .put("/:id", this.editRoom)//good
      .delete("/:id", this.deleteRoom) //good
      .post("/:id/creator", this.createCreator) //good
      .post("/:id/players", this.createPlayer) //good
      .put("/:id/players/:playerId", this.editPlayer) // works doesn't return yet
      .put("/:id/eligiblePlayers", this.editEligible)
      .put("/:id/active", this.editActive)
      .post("/:id/dares", this.createDare) //good
  }
  async getRoomById(req, res, next) {
    try {
      let data = await roomService.getRoomById(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async createRoom(req, res, next) {
    try {
      let data = await roomService.createRoom(req.body)
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async editRoom(req, res, next) {
    try {
      let data = await roomService.editRoom(req.params.id, req.body)
      return res.send(data);
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

  async editEligible(req, res, next) {
    try {
      let data = await roomService.editEligible(req.params.id, req.body)
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async editActive(req, res, next) {
    try {
      let data = await roomService.editActive(req.params.id, req.body)
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async createPlayer(req, res, next) {
    try {
      req.body.creator = false
      let data = await roomService.createPlayer(req.params.id, req.body)
      if (data) {
        return res.send(data)
      }
    } catch (error) {
      next(error)
    }
  }
  async createCreator(req, res, next) {
    try {
      req.body.creator = true
      let data = await roomService.createPlayer(req.params.id, req.body)
      if (data) {
        return res.send(data)
      }
    } catch (error) {
      next(error)
    }
  }
  async createDare(req, res, next) {
    try {
      let data = await roomService.createDare(req.params.id, req.body)
      if (data) {
        return res.send(data)
      }
    } catch (error) {
      next(error)
    }
  }
  async editPlayer(req, res, next) {

    try {
      let data = await roomService.editPlayer(req.params.id, req.params.playerId, req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}
