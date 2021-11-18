package me.aburke.itinerary.core.itinerary.service

import me.aburke.itinerary.core.context.RequestContext
import me.aburke.itinerary.core.exceptions.BusinessException
import me.aburke.itinerary.core.exceptions.NotFoundException
import me.aburke.itinerary.core.itinerary.Itinerary
import me.aburke.itinerary.core.itinerary.ItinerarySummary
import java.util.*

class ItineraryService(private val itineraryStore: IItineraryStore) {

    fun listItineraries(requestContext: RequestContext): List<ItinerarySummary> =
        itineraryStore.getAllByUserId(requestContext.userContext.userId);

    fun createItinerary(requestContext: RequestContext, itineraryDetails: CreateItineraryDetails): Itinerary {
        val itinerary = Itinerary(
            id = UUID.randomUUID().toString(),
            userId = requestContext.userContext.userId,
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

    fun loadItinerary(requestContext: RequestContext, itineraryId: String): Itinerary =
        itineraryStore.loadItinerary(requestContext.userContext.userId, itineraryId) ?: throw NotFoundException()

    fun deleteItinerary(requestContext: RequestContext, itineraryId: String) {
        itineraryStore.deleteItinerary(requestContext.userContext.userId, itineraryId)
    }
}