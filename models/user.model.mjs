import { model, Schema } from "mongoose";

const userSchema = new Schema({

}, {
    timestamps: true
})

export const UserModel = model("users", userSchema)