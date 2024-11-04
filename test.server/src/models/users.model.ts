import {Schema, model} from 'mongoose';

const userSchema = new Schema({
  nombres:{
    type: String
  },
  apellidos:{
    type: String
  },
  edad: {
    type: Number
  },
  correo: {
    type: String
  }
});
 

export const TaskModel = model('users', userSchema);