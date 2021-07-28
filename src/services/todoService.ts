import { Todo } from "models/todo";
import Service from "services/service";

class TodoSerivce extends Service {
  getAll = async (): Promise<Todo[]> => {
    const response = await this.api.get<Todo[]>("/todos");
    return response.data;
  };
}

const threadService = new TodoSerivce();
export default threadService;
