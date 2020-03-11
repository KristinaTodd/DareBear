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

//CASCADE ON DELETE
Room.pre('deleteMany', function (next) {
  //lets find all the tasks and remove them
  Promise.all([
    //something like...
    //dbContext.Room.deleteMany({ taskId: this._conditions_id }),
  ])
    .then(() => next())
    .catch(err => next(err))
})

//CASCADE ON DELETE
Room.pre('findOneAndRemove', function (next) {
  //lets find all the tasks and remove them
  Promise.all([
    // dbContext.Room.deleteMany({ boardId: this._conditions._id })
  ])
    .then(() => next())
    .catch(err => next(err))
})

export default Room