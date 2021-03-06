import { Request, Response } from 'express'
import { CreateMessageService } from '../services/CreateMessageService';


class CreateMessageController {
  async handle(request: Request, response: Response) {
    const { message } = request.body;
    const { userId } = request;
    try {

      const service = new CreateMessageService();

      const result = await service.execute(message, userId);

      return response.json(result);

    } catch (err) {
      return response.json({ error: err.message });
    }

  }
}

export { CreateMessageController }