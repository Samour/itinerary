package me.aburke.itinerary.services

import me.aburke.itinerary.dto.create.CreateItineraryRequest
import me.aburke.itinerary.dto.create.CreateItineraryResponse

interface ItineraryService {

    fun createItinerary(itinerary: CreateItineraryRequest, userId: String): CreateItineraryResponse
}