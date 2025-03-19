import { Transport } from '@nestjs/microservices';

export const rabbitConfig = {
  transport: Transport.RMQ,
  options: {
    urls: ['amqp://localhost:5672'],
    queue: 'dashboard_queue',
    queueOptions: {
      durable: false,
    },
  },
};
