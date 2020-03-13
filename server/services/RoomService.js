import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class RoomService {
  async getRoomByRoomCode(params) {
    let data = await dbContext.Rooms.find({ roomCode: params.roomCode })
    if (!data) {
      throw new BadRequest("Invalid roomCode")
    }
    return data
  }

  async getRoomById(id) {
    let data = await dbContext.Rooms.findById(id)
    if (!data) {
      throw new BadRequest("Invalid ID")
    }
    return data
  }

  async createRoom(rawData) {
    let data = await dbContext.Rooms.create(rawData)
    return data
  }
  async editRoom(id, update) {
    // let creator = await dbContext.Rooms.players.findById(id)
    //if (creator.creator) {
    let data = await dbContext.Rooms.findOneAndUpdate({ _id: id }, update, { new: true })
    if (!data) {
      throw new BadRequest("Invalid ID")
    }
    return data;
    // }
  }
  async deleteRoom(id) {
    let data = await dbContext.Rooms.findOneAndRemove({ _id: id })
    if (!data) {
      throw new BadRequest("Invalid ID")
    }
  }
  async createPlayer(id, body) {
    return await dbContext.Rooms.findOneAndUpdate({ _id: id }, { $addToSet: { players: body } }, { new: true })
  }
  async createDare(id, body) {
    return await dbContext.Rooms.findOneAndUpdate({ _id: id }, { $addToSet: { dares: body } }, { new: true })
  }
  async editPlayerScore(id, playerId, update) {
    let data = await dbContext.Rooms.findOne({ _id: id })
    // @ts-ignore
    data.players.forEach(p => {
      if (playerId == p._id) {
        p.playerScore = update.playerScore
      }
    });
    return await dbContext.Rooms.findOneAndUpdate({ _id: id }, data, { new: true })
  }
  async deletePlayer(id, playerId, update) {
    return await dbContext.Rooms.findOneAndUpdate({ _id: id }, { $pull: { players: { _id: playerId } } }, { new: true })

  }

  editPlayer(id, playerId, update) {
    if (update.playerScore) {
      this.editPlayerScore(id, playerId, update)
    } else if (!update.playerScore) {
      this.deletePlayer(id, playerId, update)
    }

  }
  // @ts-ignore
  async editEligible(id, update) {//NOTE always call after editActive
    let data = await dbContext.Rooms.findOne({ _id: id })
    // @ts-ignore
    if (data.eligiblePlayers.length == 0) {
      // @ts-ignore
      data.eligiblePlayers = data.players;
    } else {
      // @ts-ignore
      data.eligiblePlayers.filter(p => {
        // @ts-ignore
        p.id == data.activePlayer[0].id;
      })
    }
    return await dbContext.Rooms.findOneAndUpdate({ _id: id }, data, { new: true })
  }
  // @ts-ignore
  async editActive(id, update) {
    let data = await dbContext.Rooms.findOne({ _id: id })
    // @ts-ignore
    data.activePlayer[0] = data.eligiblePlayers[Math.floor(Math.random() * (data.eligiblePlayers.length))]
    //NOTE Will have to edit eligible after this call, otherwise active player will not be accurate (activeplayer will be outdated)
    // @ts-ignore
    data.activeDare[0] = data.dares[Math.floor(Math.random() * (data.dares.length))]
    // @ts-ignore
    let index = data.dares.findIndex(d => d.id == data.activeDare[0]._id)
    // @ts-ignore
    data.dares.splice(index, 1)
    return await dbContext.Rooms.findOneAndUpdate({ _id: id }, data, { new: true })
  }
}

export const roomService = new RoomService()