import { Router } from 'express';
import { bean } from '@itinerary/ioc/bean';
import { findItinerary, save } from 'repositories/itineraryRepository';
import { Itinerary } from 'models/Itinerary';

export const mountRoutes = bean(() => (router: Router) => {
  const itineraryRouter = Router();
  itineraryRouter.get('/:id', (req, res) => {
    findItinerary()(req.params.id).ifPresentOrElse(
      (i) => res.send(i),
      () => {
        res.status(404);
        res.end();
      },
    );
  }).put('/:id', (req, res) => {
    const itinerary: Itinerary = req.body;
    itinerary._id = req.params.id;
    save()(itinerary);
    res.end();
  });

  router.use('/itinerary', itineraryRouter);
});
