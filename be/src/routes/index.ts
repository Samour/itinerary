import { Router } from 'express';
import { Bean, bean } from '@itinerary/ioc/bean';
import { FindItineraryFn, SaveItineraryFn, findItinerary, save } from 'repositories/itineraryRepository';
import { Itinerary } from 'models/Itinerary';

export type MountRoutesFn = (router: Router) => void;
export const mountRoutes: Bean<MountRoutesFn> = bean([
  findItinerary,
  save,
])((findItinerary: FindItineraryFn, save: SaveItineraryFn) => (router) => {
  const itineraryRouter = Router();
  itineraryRouter.get('/:id', (req, res) => {
    findItinerary(req.params.id).ifPresentOrElse(
      (i) => res.send(i),
      () => {
        res.status(404);
        res.end();
      },
    );
  }).put('/:id', (req, res) => {
    const itinerary: Itinerary = req.body;
    itinerary._id = req.params.id;
    save(itinerary);
    res.end();
  });

  router.use('/itinerary', itineraryRouter);
});
