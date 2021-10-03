package me.aburke.itinerary.services

import me.aburke.itinerary.dto.create.CreateItineraryRequest
import me.aburke.itinerary.dto.create.CreateItineraryResponse
import me.aburke.itinerary.dto.detail.ItineraryDto
import me.aburke.itinerary.dto.list.ItineraryListDto

interface ItineraryService {

    fun listItineraries(userId: String): ItineraryListDto

    fun createItinerary(itinerary: CreateItineraryRequest, userId: String): CreateItineraryResponse

    fun getItinerary(itineraryId: String, userId: String): ItineraryDto
}