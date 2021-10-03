package me.aburke.itinerary.services.impl

import me.aburke.itinerary.dto.update.UpdateDescriptionRequest
import me.aburke.itinerary.dto.update.UpdateEndTimeRequest
import me.aburke.itinerary.dto.update.UpdateNameRequest
import me.aburke.itinerary.dto.update.UpdateStartTimeRequest
import me.aburke.itinerary.exceptions.BusinessException
import me.aburke.itinerary.services.ItineraryService
import me.aburke.itinerary.services.ItineraryUpdateService
import org.springframework.stereotype.Service

@Service
class ItineraryUpdateServiceImpl(val itineraryService: ItineraryService) : ItineraryUpdateService {

    override fun updateName(itineraryId: String, userId: String, update: UpdateNameRequest) {
        itineraryService.updateItinerary(itineraryId, userId) {
            it.name = update.name
        }
    }

    override fun updateDescription(itineraryId: String, userId: String, update: UpdateDescriptionRequest) {
        itineraryService.updateItinerary(itineraryId, userId) {
            it.description = update.description
        }
    }

    override fun updateStartTime(itineraryId: String, userId: String, update: UpdateStartTimeRequest) {
        itineraryService.updateItinerary(itineraryId, userId) {
            if (!update.startTime.isBefore(it.endTime)) {
                throw BusinessException("New start time may not occur after end time")
            }
            val newStartIsAfterItemStart = it.items
                .map { i -> i.startTime }
                .any { i -> i.isBefore(update.startTime) }
            if (newStartIsAfterItemStart) {
                throw BusinessException("There are itinerary events which start before the specified start time")
            }

            it.startTime = update.startTime
        }
    }

    override fun updateEndTime(itineraryId: String, userId: String, update: UpdateEndTimeRequest) {
        itineraryService.updateItinerary(itineraryId, userId) {
            if (!update.endTime.isAfter(it.startTime)) {
                throw BusinessException("New end time may not occur before start time")
            }
            val newEndIsBeforeItemEnd = it.items
                .map { i -> i.endTime }
                .any { i -> i.isAfter(update.endTime) }
            if (newEndIsBeforeItemEnd) {
                throw BusinessException("There are itinerary events which end after the specified end time")
            }

            it.endTime = update.endTime
        }
    }
}