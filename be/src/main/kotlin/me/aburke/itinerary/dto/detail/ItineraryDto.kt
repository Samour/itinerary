package me.aburke.itinerary.dto.detail

import java.time.Instant

data class ItineraryDto(
    val id: String,
    val name: String,
    val description: String,
    val startTime: Instant,
    val endTime: Instant,
    val items: List<ItineraryItemDto>,
)
