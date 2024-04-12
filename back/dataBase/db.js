import mongoose from 'mongoose';
import { User } from '../models/authModels.js'; // Importa el modelo de usuarios
import { Todo } from '../models/todo.model.js'; // Importa el modelo de tareas

export const db = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        //esto lo sacamos de los 3 puntos de mongo compas y añadimos el /todolist
        console.log("Connected");
        const UserModel = mongoose.model('User', User.schema);
        const TodoModel = mongoose.model('Todo', Todo.schema);

    } catch (error) {
        console.log(error)
        
    }
}