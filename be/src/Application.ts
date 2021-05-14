import * as express from 'express';
import { mountRoutes } from './routes';

export interface IApplication {
  start(): void;
}

export class Application implements IApplication {

  start(): void {
    const app = express();

    mountRoutes()(app);

    app.listen(8080, () => console.log('HTTP listener started'));
  }
}
