import { Schema, model } from 'mongoose';

const usuarioSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  segundoNombre: {
    type: String,
    required: false, // Este campo es opcional
  },
  primerApellido: {
    type: String,
    required: true,
  },
  segundoApellido: {
    type: String,
    required: false, // Este campo es opcional
  },
  correo: {
    type: String,
    required: true,
    unique: true, // Esto garantiza que el correo sea único en la colección
  }
}, { timestamps: true }); // Agregar timestamps para createdAt y updatedAt automáticamente

export const UsuarioModel = model('usuarios', usuarioSchema);
