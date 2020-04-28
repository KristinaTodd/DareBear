import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class RoomService {

  async getRoomByRoomCode(params) {
    let data = await dbContext.Rooms.findOne({ roomCode: params.roomCode })
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

  async getPlayersbyRoomId(id) {
    let data = await dbContext.Rooms.findById(id)
    if (!data) {
      throw new BadRequest("Invalid ID")
    }
    // @ts-ignore
    return data.players
  }

  async createRoom(rawData) {
    let data = await dbContext.Rooms.create(rawData)
    return data
  }
  async editRoom(id, update) {
    let data = await dbContext.Rooms.findOneAndUpdate({ _id: id }, update, { new: true })
    if (!data) {
      throw new BadRequest("Invalid ID")
    }
    return data;
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
    let data = await dbContext.Rooms.findOneAndUpdate({ _id: id }, { $addToSet: { dares: body } }, { new: true })
    // @ts-ignore
    if (!data.eligiblePlayers.length) {
      data = await this.resetEligible(id)
    }
    return data
  }

  async resetEligible(id) {
    let data = await dbContext.Rooms.findOne({ _id: id })

    // @ts-ignore
    data.eligiblePlayers = data.players

    return await dbContext.Rooms.findOneAndUpdate({ _id: id }, data, { new: true })
  }
  async clearEligible(id, body) {
    let data = await dbContext.Rooms.findOne({ _id: id })

    // @ts-ignore
    data.eligiblePlayers = []

    return await dbContext.Rooms.findOneAndUpdate({ _id: id }, data, { new: true })
  }

  // @ts-ignore
  async editPlayerScore(id, playerId, update) {
    let data = await dbContext.Rooms.findOne({ _id: id })
    // @ts-ignore
    let indexOfPlayer = data.players.findIndex(p => p.id == playerId)
    //@ts-ignore
    data.players[indexOfPlayer].playerScore += update.playerScore;
    data.markModified("players")
    return await dbContext.Rooms.findOneAndUpdate({ _id: id }, data, { new: true })
  }

  // @ts-ignore
  async deletePlayer(id, playerId, update) {
    return await dbContext.Rooms.findOneAndUpdate({ _id: id }, { $pull: { players: { _id: playerId } } }, { new: true })
  }

  editPlayer(id, playerId, update) {
    if (update.playerScore) {
      let data = this.editPlayerScore(id, playerId, update)
      return data
    } else if (!update.playerScore) {
      this.deletePlayer(id, playerId, update)
    }
  }
  // @ts-ignore
  // @ts-ignore
  async editEligible(id, update, data) {
    data = await dbContext.Rooms.findOne({ _id: id })
    // @ts-ignore
    if (data.eligiblePlayers.length == 0) {
      // @ts-ignore
      data.roundCount++;
      //@ts-ignore
      data.eligiblePlayers = data.players;
    } else {
      data.eligiblePlayers.pull(data.activePlayer[0]);

    }
    return await data.save()
  }
  // @ts-ignore
  // @ts-ignore
  async editActive(id, update) {
    let data = await dbContext.Rooms.findOne({ _id: id })
    // @ts-ignore
    data.activePlayer[0] = data.eligiblePlayers[Math.floor(Math.random() * (data.eligiblePlayers.length))]
    // @ts-ignore
    data.activeDare[0] = data.dares[Math.floor(Math.random() * (data.dares.length))]
    // @ts-ignore
    let index = data.dares.findIndex(d => d.id == data.activeDare[0]._id)

    // @ts-ignore

    data.dares.splice(index, 1)
    return await dbContext.Rooms.findOneAndUpdate({ _id: id }, data, { new: true })

  }
  async updateScored(id, playerCode) {
    let data = await dbContext.Rooms.findOne({ _id: id })
    // @ts-ignore
    let tempArr = data.players
    // @ts-ignore
    if ((data.players.length - 1) == data.scored.length) {
      // @ts-ignore
      data.scored = []
    } else {
      tempArr = tempArr.filter(p =>
        p.playerCode == playerCode
      )
      // @ts-ignore
      data.scored = data.scored.concat(tempArr)
    }
    return await dbContext.Rooms.findOneAndUpdate({ _id: id }, data, { new: true })
  }
  async clearScored(id) {
    let data = await dbContext.Rooms.findOne({ _id: id })
    // @ts-ignore
    data.scored = []
    return await dbContext.Rooms.findOneAndUpdate({ _id: id }, data, { new: true })
  }
}

export const roomService = new RoomService()