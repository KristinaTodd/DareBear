import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class RoomService {
  async getRoomById(id) {
    let data = await dbContext.Rooms.findOne({ _id: id })
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
    let creator = await dbContext.Rooms.players.findById(id)
    if (creator.creator) {
      let data = await dbContext.Rooms.findOneAndUpdate({ _id: id }, update, { new: true })
      if (!data) {
        throw new BadRequest("Invalid ID")
      }
    }
  }
  async deleteRoom(id) {
    let data = await dbContext.Rooms.findOneAndRemove({ _id: id })
    if (!data) {
      throw new BadRequest("Invalid ID")
    }
  }
}