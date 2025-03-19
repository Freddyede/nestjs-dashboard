export const corsConfig = {
  cors: {
    origin: ['http://localhost:4200/', 'http://localhost:4200/*'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    exposedHeaders: [
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Authorization',
    ],
    allowedHeaders: [
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Authorization',
    ],
    maxAge: Infinity,
  },
};
