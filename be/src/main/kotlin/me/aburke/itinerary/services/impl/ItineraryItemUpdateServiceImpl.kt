package me.aburke.itinerary.services.impl

import me.aburke.itinerary.dto.update.*
import me.aburke.itinerary.exceptions.BusinessException
import me.aburke.itinerary.model.ItineraryItemType
import me.aburke.itinerary.services.ItineraryItemService
import me.aburke.itinerary.services.ItineraryItemUpdateService
import org.springframework.stereotype.Service

@Service
class ItineraryItemUpdateServiceImpl(val itineraryItemService: ItineraryItemService) : ItineraryItemUpdateService {

    override fun updateName(itineraryId: String, userId: String, itemId: String, update: UpdateNameRequest) {
        itineraryItemService.updateItem(itineraryId, userId, itemId, false) {
            it.name = update.name
        }
    }

    override fun updateDescription(
        itineraryId: String,
        userId: String,
        itemId: String,
        update: UpdateDescriptionRequest
    ) {
        itineraryItemService.updateItem(itineraryId, userId, itemId, false) {
            it.description = update.description
        }
    }

    override fun updatePrimaryLocation(
        itineraryId: String,
        userId: String,
        itemId: String,
        update: UpdatePrimaryLocationRequest
    ) {
        itineraryItemService.updateItem(itineraryId, userId, itemId, false) {
            it.primaryLocation = update.primaryLocation
        }
    }

    override fun updateSecondaryLocations(
        itineraryId: String,
        userId: String,
        itemId: String,
        update: UpdateSecondaryLocationsRequest
    ) {
        itineraryItemService.updateItem(itineraryId, userId, itemId, false) {
            if (it.type == ItineraryItemType.LOCATION && update.secondaryLocations.isNotEmpty()) {
                throw BusinessException("Secondary location not applicable for this event type")
            }
            if (it.type == ItineraryItemType.TRAVEL && update.secondaryLocations.size != 1) {
                throw BusinessException("Exactly 1 secondary location required for this event type")
            }

            it.secondaryLocations = update.secondaryLocations
        }
    }

    override fun updateStartTime(itineraryId: String, userId: String, itemId: String, update: UpdateStartTimeRequest) {
        itineraryItemService.updateItem(itineraryId, userId, itemId, true) {
            it.startTime = update.startTime
        }
    }

    override fun updateEndTime(itineraryId: String, userId: String, itemId: String, update: UpdateEndTimeRequest) {
        itineraryItemService.updateItem(itineraryId, userId, itemId, true) {
            it.endTime = update.endTime
        }
    }
}