package me.aburke.itinerary.dto.list

import java.time.Instant

data class ItinerarySummaryDto(
    val id: String,
    val name: String,
    val description: String,
    val startTime: Instant,
    val endTime: Instant,
)
