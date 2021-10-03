package me.aburke.itinerary.dto.detail

import me.aburke.itinerary.model.ItineraryItemType
import me.aburke.itinerary.model.Location
import java.time.Instant

data class ItineraryItemDto(
    val id: String,
    val name: String,
    val description: String,
    val type: ItineraryItemType,
    val primaryLocation: Location,
    val secondaryLocations: List<Location>,
    val startTime: Instant,
    val endTime: Instant,
)
