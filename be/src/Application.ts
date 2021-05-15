import * as express from 'express';
import { Bean, bean } from '@itinerary/ioc/bean';
import { MountRoutesFn, mountRoutes } from './routes';

export const runApplication: Bean<() => void> = bean([mountRoutes])((mountRoutes: MountRoutesFn) => () => {
  const app = express();
  app.use(express.json());

  mountRoutes(app);

  app.listen(8080, () => console.log('HTTP listener started'));
});
