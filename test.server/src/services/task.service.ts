import { TaskModel } from '../models'

export const taskService = {
  getAll: async (filter: any) => {
    if (Object.keys(filter).length === 0) {
      // Si no se le envia algun parametro se hara la petiicon en general
      return await TaskModel.find();
    }
    // Si ahy un parametro por buscar se hara la peticion con ese parametro
    return await TaskModel.find({ nombre: filter.nombre });
  },

  create: async (entity: object) => {
    return await TaskModel.create(entity);
  },

  update: async (id: string, body: object) => {
    return await TaskModel.findByIdAndUpdate(id, body);
  },

  delete: async (id: string) => {
    return await TaskModel.findByIdAndDelete(id);
  }
}