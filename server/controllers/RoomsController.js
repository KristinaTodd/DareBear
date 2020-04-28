import express from "express";
import BaseController from "../utils/BaseController";
import { roomService } from "../services/RoomService";
import socketService from "../services/SocketService"

export class RoomsController extends BaseController {
  constructor() {
    super("api/room");
    this.router = express
      .Router()
      .get("/:roomCode", this.getRoomByRoomCode)
      .get("/roomId/:id", this.getRoomById)
      .get("/:roomId/players", this.getPlayersbyRoomId)
      .post("", this.createRoom)
      .put("/:id", this.editRoom)
      .delete("/:id", this.deleteRoom)
      .post("/:id/creator", this.createCreator)
      .post("/:id/newPlayer", this.createPlayer)
      .put("/:id/players/:playerId", this.editPlayer)
      .put("/:id/eligiblePlayers", this.editEligible)
      .put("/:id/active", this.editActive)
      .put("/:id/start", this.startGame)
      .post("/:id/dares", this.createDare)
      .put("/:id/updatescored", this.updateScored)
      .put("/:id/endgame", this.endGame)
      .put("/:id/endround", this.endRound)
      .put("/:id/endturn", this.endTurn)
      .put("/:id/modal", this.modal)
      .put("/:id/clearEligible", this.clearEligible)
  }
  async getRoomByRoomCode(req, res, next) {
    try {
      let data = await roomService.getRoomByRoomCode(req.params)
      socketService.messageRoom(`room${req.params.roomCode}`, "getRoom", data)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async getRoomById(req, res, next) {
    try {
      let data = await roomService.getRoomById(req.params.id)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async getPlayersbyRoomId(req, res, next) {
    try {
      let data = await roomService.getPlayersbyRoomId(req.params.id)
      res.send(data)
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
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async deleteRoom(req, res, next) {
    try {
      // @ts-ignore
      let data = await roomService.deleteRoom(req.params.id)
      res.send("deleted");
    } catch (error) {
      next(error);
    }
  }
  async editEligible(req, res, next) {
    try {
      let data = await roomService.editEligible(req.params.id, req.body)
      socketService.messageRoom(`room${data.roomCode}`, "updateRoom", data)
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async clearEligible(req, res, next) {
    try {
      let data = await roomService.clearEligible(req.params.id, req.body)
      socketService.messageRoom(`room${data.roomCode}`, "updateRoom", data)
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async editActive(req, res, next) {
    try {
      let data = await roomService.editActive(req.params.id, req.body)
      // @ts-ignore
      socketService.messageRoom(`room${data.roomCode}`, "updateRoom", data)
      // @ts-ignore
      socketService.messageRoom(`room${data.roomCode}`, "startRound", data)

      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async createPlayer(req, res, next) {
    try {
      req.body.creator = false
      let data = await roomService.createPlayer(req.params.id, req.body)
      if (data) {
        res.send(data)
      }
    } catch (error) {
      next(error)
    }
  }
  async startGame(req, res, next) {
    try {
      req.body.started = true
      let data = await roomService.editRoom(req.params.id, req.body)
      // @ts-ignore
      socketService.messageRoom(`room${data.roomCode}`, "start", data)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async createCreator(req, res, next) {
    try {
      req.body.creator = true
      let data = await roomService.createPlayer(req.params.id, req.body)
      if (data) {
        res.send(data)
      }
    } catch (error) {
      next(error)
    }
  }
  async createDare(req, res, next) {
    try {
      let data = await roomService.createDare(req.params.id, req.body)
      // @ts-ignore
      socketService.messageRoom(`room${data.roomCode}`, "updateRoom", data)
      if (data) {
        res.send(data)
      }
    } catch (error) {
      next(error)
    }
  }
  async editPlayer(req, res, next) {
    try {
      let data = await roomService.editPlayer(req.params.id, req.params.playerId, req.body)
      socketService.messageRoom(`room${data.roomCode}`, "updateRoom", data)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async updateScored(req, res, next) {
    try {
      let data = await roomService.updateScored(req.params.id, req.body.me)
      // @ts-ignore
      socketService.messageRoom(`room${data.roomCode}`, "updateRoom", data)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  // @ts-ignore
  async endGame(req, res, next) {
    try {
      socketService.messageRoom(`room${req.body.roomCode}`, "endGame", req.body)
    } catch (error) {
      next(error)
    }
  }
  async endRound(req, res, next) {
    try {
      // @ts-ignore
      let data = await roomService.editEligible(req.params.id, req.body)
      // @ts-ignore
      let data2 = await roomService.clearScored(req.params.id, req.body)
      socketService.messageRoom(`room${req.body.roomCode}`, "endRound", req.body)
      res.send("worked")
    } catch (error) {
      next(error)
    }
  }
  async endTurn(req, res, next) {
    try {
      // @ts-ignore
      let data = await roomService.clearScored(req.params.id, req.body)
      socketService.messageRoom(`room${req.body.roomCode}`, "endTurn", req.body)
      res.send("worked")
    } catch (error) {
      next(error)
    }
  }
  // @ts-ignore
  async modal(req, res, next) {
    try {
      socketService.messageRoom(`room${req.body.roomCode}`, "modal", req.body)
      res.send("modaled")
    } catch (error) {
      next(error)
    }
  }
}
