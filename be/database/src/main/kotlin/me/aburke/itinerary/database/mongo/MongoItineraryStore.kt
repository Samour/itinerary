package me.aburke.itinerary.database.mongo

import me.aburke.itinerary.core.itinerary.Itinerary
import me.aburke.itinerary.core.itinerary.ItinerarySummary
import me.aburke.itinerary.core.itinerary.service.IItineraryStore
import org.springframework.stereotype.Service

@Service
class MongoItineraryStore(private val mongoItineraryRepository: MongoItineraryRepository) : IItineraryStore {

    override fun getAllByUserId(userId: String): List<ItinerarySummary> {
        return mongoItineraryRepository.findAllByUserId(userId)
    }

    override fun storeItinerary(itinerary: Itinerary) {
        mongoItineraryRepository.save(itinerary)
    }

    override fun loadItinerary(userId: String, itineraryId: String): Itinerary? =
        mongoItineraryRepository.findByIdAndUserId(itineraryId, userId)

    override fun deleteItinerary(userId: String, itineraryId: String) {
        mongoItineraryRepository.deleteByIdAndUserId(itineraryId, userId)
    }
}