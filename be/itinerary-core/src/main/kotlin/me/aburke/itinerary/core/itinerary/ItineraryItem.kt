package me.aburke.itinerary.core.itinerary

import java.time.Instant

data class ItineraryItem(
    val id: String,
    val name: String,
    val description: String,
    val type: ItineraryItemType,
    val primaryLocation: Location,
    val secondaryLocations: List<Location>,
    val startTime: Instant,
    val endTime: Instant,
)
