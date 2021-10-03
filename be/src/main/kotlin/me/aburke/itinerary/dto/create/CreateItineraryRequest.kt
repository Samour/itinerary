package me.aburke.itinerary.dto.create

import java.time.Instant

data class CreateItineraryRequest(
    val name: String,
    val description: String,
    val startTime: Instant,
    val endTime: Instant,
)
