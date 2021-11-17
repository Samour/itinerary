package me.aburke.itinerary.facade.rest.itineraries

import java.time.Instant

data class ItinerarySummaryDto(
    val id: String,
    val name: String,
    val description: String,
    val startTime: Instant,
    val endTime: Instant,
)
