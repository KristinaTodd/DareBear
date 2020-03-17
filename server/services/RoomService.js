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
    return data.players
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
    let tempArr = data.players
    //take the player that scored out of the original array
    data.players.filter(p => { p.id != playerId })
    //take every other player out of this array
    tempArr.filter(p => { p.id == playerId })
    //this is the player that scored
    let found = tempArr[0]
    //update that player's score
    found.playerScore = update.playerScore
    //now find out where to put it back
    for (let i = 0; i < data.players.length; i++) {
      //starting from 0, is this player's score less than the player who scored?
      if (data.players[i] < found.playerScore) {
        //if so, put the player who scored here, pushing every other player down. 
        data.players.splice(i, 0, found)
        //exit the loop by making i greater than its constraint
        i = data.players.length
        //in the event that this score is the lowest, put it at the end
      } else if (i == data.players.length - 1) {
        data.players.push(found)
      }
    }
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
      data.roundCount++;
      //@ts-ignore
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
    // @ts-ignore
    data.activeDare[0] = data.dares[Math.floor(Math.random() * (data.dares.length))]
    // @ts-ignore
    let index = data.dares.findIndex(d => d.id == data.activeDare[0]._id)
    // @ts-ignore
    data.dares.splice(index, 1)
        await this.editEligible(id, update)
    return await dbContext.Rooms.findOneAndUpdate({ id: id }, data, { new: true })
  }
  async updateScored(id, playerCode) {
    let data = await dbContext.Rooms.findOne({ id: id })
    let tempArr = data.players
    tempArr = tempArr.filter(p => {
      p.playerCode == playerCode
    })
    data.scored = data.scored.concat(tempArr)
    return await dbContext.Rooms.findOneAndUpdate({ id: id }, data, { new: true })
  }
}

export const roomService = new RoomService()