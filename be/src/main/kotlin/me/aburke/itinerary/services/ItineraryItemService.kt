package me.aburke.itinerary.services

import me.aburke.itinerary.dto.create.CreateItineraryItemRequest
import me.aburke.itinerary.dto.create.CreateItineraryResponse

interface ItineraryItemService {

    fun createItem(itineraryId: String, userId: String, item: CreateItineraryItemRequest): CreateItineraryResponse

    fun deleteItem(itineraryId: String, userId: String, itemId: String): Unit
}
