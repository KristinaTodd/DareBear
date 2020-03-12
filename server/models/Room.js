import mongoose from "mongoose"
import { array } from "mongoose/lib/utils"
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

const SubDare = new Schema({
  title: { type: String, required: true },
  playerId: { type: ObjectId, ref: 'Room.players', required: true },
}, { timestamps: true, toJSON: { virtuals: true } })

const SubPlayer = new Schema({
  playerName: { type: String, required: true },
  playerScore: { type: Number, required: true, default: 0 },
  creator: { type: Boolean, required: true },
  imgUrl: { type: String, required: false }
}, { timestamps: true, toJSON: { virtuals: true } })



const Room = new Schema({
  title: { type: String, required: false },
  roundTotal: { type: Number, default: 1 },
  roomCode: { type: Number, required: true },
  dares: [SubDare],
  players: [SubPlayer],
  eligiblePlayers: [SubPlayer],
  activePlayer: [],
  activeDare: []
}, { timestamps: true, toJSON: { virtuals: true } })


SubPlayer.virtual("playerImg",
  {
    localField: "imgUrl",
    ref: "Profile",
    foreignField: "picture",
    justOne: true
  })

export default Room