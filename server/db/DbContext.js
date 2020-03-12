import mongoose from "mongoose";
import ProfileSchema from "../models/Profile";
import RoomSchema from "../models/Room";

class DbContext {
  Profile = mongoose.model("Profile", ProfileSchema);
  Rooms = mongoose.model("Room", RoomSchema);
}

export const dbContext = new DbContext();
