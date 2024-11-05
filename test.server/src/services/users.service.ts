import { UsuarioModel } from '../models'; // Asegúrate de que la ruta sea correcta

export const userService = {
  getAll: async (filter: any) => {
    if (Object.keys(filter).length === 0) {
      // Si no se le envía algún parámetro, se hará la petición para obtener todos los usuarios
      return await UsuarioModel.find();
    }
    // Si hay un parámetro por buscar (ej. correo), se hará la petición con ese parámetro
    return await UsuarioModel.find({ correo: filter.correo });
  },

  create: async (entity: object) => {
    return await UsuarioModel.create(entity);
  },

  update: async (id: string, body: object) => {
    return await UsuarioModel.findByIdAndUpdate(id, body, { new: true }); // Devuelve el documento actualizado
  },

  delete: async (id: string) => {
    return await UsuarioModel.findByIdAndDelete(id);
  }
}
