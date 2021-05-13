import { Schema, model, Document } from 'mongoose'

interface UserInterface extends Document {
  name: string;
  email: string;
  password: string;
  account: Number;
  dtTest: Date;
  dtLicence: Date;
}
const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  account: Number,
  dtTest: Date,
  dtLicence: Date,
})

export default model<UserInterface>('user', UserSchema)
