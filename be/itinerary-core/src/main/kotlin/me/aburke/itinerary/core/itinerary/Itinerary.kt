package me.aburke.itinerary.core.itinerary

import java.time.Instant

data class Itinerary(
    val id: String,
    val userId: String,
    val name: String,
    val description: String,
    val startTime: Instant,
    val endTime: Instant,
    val items: List<ItineraryItem>,
)
