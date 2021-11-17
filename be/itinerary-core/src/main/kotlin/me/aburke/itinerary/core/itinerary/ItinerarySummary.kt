package me.aburke.itinerary.core.itinerary

import java.time.Instant

data class ItinerarySummary(
    val id: String,
    val name: String,
    val description: String,
    val startTime: Instant,
    val endTime: Instant,
)
