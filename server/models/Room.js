import mongoose from "mongoose"
import { array } from "mongoose/lib/utils"
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

const SubDare = new Schema({
  dare: { type: String, required: true },
  playerId: { type: ObjectId, ref: 'Room.players', required: true },
}, { timestamps: true, toJSON: { virtuals: true } })

const SubPlayer = new Schema({
  playerName: { type: String, required: true },
  playerScore: { type: Number, required: true, default: 0 },
  creator: { type: Boolean, required: true },
  imgUrl: { type: String, required: false },
  playerCode: { type: String, required: true }
}, { timestamps: true, toJSON: { virtuals: true } })



const Room = new Schema({
  roomName: { type: String, required: false },
  roundTotal: { type: Number },
  roomCode: { type: Number, required: true },
  dares: [SubDare],
  players: [SubPlayer],
  eligiblePlayers: [SubPlayer],
  activePlayer: [],
  activeDare: [],
  scored: [],
  dareComplete: { type: Boolean, required: true, default: false },
  started: { type: Boolean, required: true, default: false }
}, { timestamps: true, toJSON: { virtuals: true } })


SubPlayer.virtual("playerImg",
  {
    localField: "imgUrl",
    ref: "Profile",
    foreignField: "picture",
    justOne: true
  })

export default Room