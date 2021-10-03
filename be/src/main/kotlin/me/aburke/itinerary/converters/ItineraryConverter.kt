package me.aburke.itinerary.converters

import me.aburke.itinerary.dto.create.CreateItineraryRequest
import me.aburke.itinerary.dto.create.CreateItineraryResponse
import me.aburke.itinerary.dto.detail.ItineraryDto
import me.aburke.itinerary.model.Itinerary

interface ItineraryConverter {

    fun createModel(request: CreateItineraryRequest, userId: String): Itinerary

    fun createResponse(itinerary: Itinerary): CreateItineraryResponse

    fun toDto(itinerary: Itinerary): ItineraryDto
}