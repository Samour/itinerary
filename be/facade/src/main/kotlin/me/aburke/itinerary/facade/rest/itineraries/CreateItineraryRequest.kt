package me.aburke.itinerary.facade.rest.itineraries

import java.time.Instant

data class CreateItineraryRequest(
    val name: String,
    val description: String,
    val startTime: Instant,
    val endTime: Instant,
)
