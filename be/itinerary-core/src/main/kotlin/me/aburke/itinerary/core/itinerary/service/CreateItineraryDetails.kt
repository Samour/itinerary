package me.aburke.itinerary.core.itinerary.service

import java.time.Instant

data class CreateItineraryDetails(
    val name: String,
    val description: String,
    val startTime: Instant,
    val endTime: Instant,
)
