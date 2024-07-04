import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';

const app: Application = express();
app.use(express.json());
app.use(
  cors({
    origin: 'smartment-management-frontend-suvo.vercel.app',
    // origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  }),
);

//application route
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  const htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to My Project</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: 'Arial', sans-serif;
          background-color: #f4f4f4;
        }
        .welcome-container {
          text-align: center;
          padding: 50px;
          margin: 50px auto;
          background-color: #fff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          border-radius: 5px;
        }

        h1 {
          color: #333;
        }

        p {
          color: #666;
        }
      </style>
    </head>
    <body>
      <div class="welcome-container">
        <h1>Welcome to Smartphone Management Backend</h1>
        <p>This is a simple crud application built with Express, TypeScript and Mongoose , authentication and authorization with login and register ,and also role based authentication.</p>
      </div>
    </body>
  </html>
`;
  res.send(htmlContent);
});
app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
