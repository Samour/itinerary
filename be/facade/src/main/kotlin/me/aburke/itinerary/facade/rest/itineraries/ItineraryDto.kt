package me.aburke.itinerary.facade.rest.itineraries

import java.time.Instant

data class ItineraryDto(
    val id: String,
    val name: String,
    val description: String,
    val startTime: Instant,
    val endTime: Instant,
    val items: List<ItineraryItemDto>,
)
