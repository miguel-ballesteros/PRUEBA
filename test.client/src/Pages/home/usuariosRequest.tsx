import {http } from "../../axios/axios"
import { Task } from "../data/models/models"

const usuarioApi = '/api/task/';

interface FilterTask {
    name: string,
}
export const TaskRequest = {
    InfoTask: async (p0: {}, TaskData: FilterTask | undefined | null, undefined: undefined): Promise<Task> => {
        try {
            const response = await http.get<Task>(`${usuarioApi}`, TaskData as undefined);
            return response;
        } catch (error) {
            console.error("Error fetching users:", error);
            throw error;
        }
    }
};

