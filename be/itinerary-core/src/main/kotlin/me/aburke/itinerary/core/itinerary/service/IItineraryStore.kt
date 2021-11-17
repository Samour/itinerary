package me.aburke.itinerary.core.itinerary.service

import me.aburke.itinerary.core.itinerary.Itinerary
import me.aburke.itinerary.core.itinerary.ItinerarySummary

interface IItineraryStore {

    fun getAllByUserId(userId: String): List<ItinerarySummary>

    fun storeItinerary(itinerary: Itinerary)

    fun deleteItinerary(userId: String, itineraryId: String)
}