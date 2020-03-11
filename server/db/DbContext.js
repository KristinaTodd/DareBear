import mongoose from "mongoose";
import ValueSchema from "../models/Value";
import ProfileSchema from "../models/Profile";
import RoomSchema from "../models/Room";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Profile = mongoose.model("Profile", ProfileSchema);
  Rooms = mongoose.model("Room", RoomSchema);
}

export const dbContext = new DbContext();
