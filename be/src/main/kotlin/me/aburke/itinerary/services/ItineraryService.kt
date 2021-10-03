package me.aburke.itinerary.services

import me.aburke.itinerary.dto.create.CreateItineraryRequest
import me.aburke.itinerary.dto.create.CreateItineraryResponse
import me.aburke.itinerary.dto.detail.ItineraryDto
import me.aburke.itinerary.dto.list.ItineraryListDto
import me.aburke.itinerary.model.Itinerary

interface ItineraryService {

    fun listItineraries(userId: String): ItineraryListDto

    fun createItinerary(itinerary: CreateItineraryRequest, userId: String): CreateItineraryResponse

    fun getItinerary(itineraryId: String, userId: String): ItineraryDto

    fun updateItinerary(itineraryId: String, userId: String, update: (itinerary: Itinerary) -> Unit): Unit
}