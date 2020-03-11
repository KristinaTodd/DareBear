import mongoose from "mongoose"
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

const SubDare = new Schema({
  title: { type: String, required: true },
  playerId: { type: ObjectId, ref: 'Room.players', required: true },
}, { timestamps: true, toJSON: { virtuals: true } })

const SubPlayer = new Schema({
  playerName: { type: String, required: true },
  playerScore: { type: Number, required: true },
  creator: { type: Boolean, required: true, default: false },
  imgUrl: { type: String, required: false }
}, { timestamps: true, toJSON: { virtuals: true } })


const Room = new Schema({
  title: { type: String, required: true },
  roundTotal: { type: Number, required: true },
  roomCode: { type: Number, required: true },
  dares: [SubDare],
  players: [SubPlayer],
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