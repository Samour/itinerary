package me.aburke.itinerary.services

import me.aburke.itinerary.dto.update.UpdateDescriptionRequest
import me.aburke.itinerary.dto.update.UpdateEndTimeRequest
import me.aburke.itinerary.dto.update.UpdateNameRequest
import me.aburke.itinerary.dto.update.UpdateStartTimeRequest

interface ItineraryUpdateService {

    fun updateName(itineraryId: String, userId: String, update: UpdateNameRequest): Unit

    fun updateDescription(itineraryId: String, userId: String, update: UpdateDescriptionRequest): Unit

    fun updateStartTime(itineraryId: String, userId: String, update: UpdateStartTimeRequest): Unit

    fun updateEndTime(itineraryId: String, userId: String, update: UpdateEndTimeRequest): Unit
}
