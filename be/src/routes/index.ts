import { Router, Request, Response } from 'express';
import { bean } from '@itinerary/ioc/bean';
import { ApplicationContext } from '@itinerary/ioc/ApplicationContext';
import { ApplicationContextStrategyHolder } from '@itinerary/ioc/ApplicationContextHolder';

const hwHandler = bean(() => {
  let callCount = 0;

  return (req: Request, res: Response) => {
    res.send({
      message: 'Hello World!',
      callCount: callCount++,
    });
  };
});

export const mountRoutes = bean(() => (router: Router) => {
  router.get('/hello', (req, res) => hwHandler()(req, res));

  router.post('/reset-context', (req, res) => {
    ApplicationContextStrategyHolder.getApplicationContextStrategy().setApplicatonContext(new ApplicationContext());
    res.end();
  });
});
