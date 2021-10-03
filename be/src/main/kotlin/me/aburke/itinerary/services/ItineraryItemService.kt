package me.aburke.itinerary.services

import me.aburke.itinerary.dto.create.CreateItineraryItemRequest
import me.aburke.itinerary.dto.create.CreateItineraryResponse
import me.aburke.itinerary.model.ItineraryItem

interface ItineraryItemService {

    fun createItem(itineraryId: String, userId: String, item: CreateItineraryItemRequest): CreateItineraryResponse

    fun deleteItem(itineraryId: String, userId: String, itemId: String): Unit

    fun updateItem(
        itineraryId: String,
        userId: String,
        itemId: String,
        updatesTime: Boolean,
        update: (item: ItineraryItem) -> Unit,
    ): Unit
}
