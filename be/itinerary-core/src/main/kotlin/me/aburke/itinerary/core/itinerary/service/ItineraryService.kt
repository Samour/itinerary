package me.aburke.itinerary.core.itinerary.service

import me.aburke.itinerary.core.exceptions.BusinessException
import me.aburke.itinerary.core.itinerary.Itinerary
import me.aburke.itinerary.core.itinerary.ItinerarySummary
import java.util.*

class ItineraryService(private val itineraryStore: IItineraryStore) {

    fun listItineraries(userId: String): List<ItinerarySummary> = itineraryStore.getAllByUserId(userId);

    fun createItinerary(userId: String, itineraryDetails: CreateItineraryDetails): Itinerary {
        val itinerary = Itinerary(
            id = UUID.randomUUID().toString(),
            userId = userId,
            name = itineraryDetails.name,
            description = itineraryDetails.description,
            startTime = itineraryDetails.startTime,
            endTime = itineraryDetails.endTime,
            items = emptyList(),
        )
        if (!itinerary.startTime.isBefore(itinerary.endTime)) {
            throw BusinessException("End time must be after start time");
        }

        itineraryStore.storeItinerary(itinerary)

        return itinerary;
    }

    fun deleteItinerary(userId: String, itineraryId: String) {
        itineraryStore.deleteItinerary(userId, itineraryId)
    }
}