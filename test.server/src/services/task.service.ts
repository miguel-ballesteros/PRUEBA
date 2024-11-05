import {TaskModel} from '../models'

export const taskService = {
  getAll: async(filter: any)=>{
    return await TaskModel.find({name: filter.nombre});
  },

  create: async(entity: object)=>{
    return await TaskModel.create(entity);
  },

  update: async(id:string, body:object)=>{
    return await TaskModel.findByIdAndUpdate(id, body);
  },

  delete: async(id:string)=>{
    return await TaskModel.findByIdAndDelete(id);
  }
}