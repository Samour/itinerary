package me.aburke.itinerary.services

import me.aburke.itinerary.dto.update.*

interface ItineraryItemUpdateService {

    fun updateName(itineraryId: String, userId: String, itemId: String, update: UpdateNameRequest)

    fun updateDescription(itineraryId: String, userId: String, itemId: String, update: UpdateDescriptionRequest)

    fun updatePrimaryLocation(itineraryId: String, userId: String, itemId: String, update: UpdatePrimaryLocationRequest)

    fun updateSecondaryLocations(
        itineraryId: String,
        userId: String,
        itemId: String,
        update: UpdateSecondaryLocationsRequest,
    )

    fun updateStartTime(itineraryId: String, userId: String, itemId: String, update: UpdateStartTimeRequest)

    fun updateEndTime(itineraryId: String, userId: String, itemId: String, update: UpdateEndTimeRequest)
}