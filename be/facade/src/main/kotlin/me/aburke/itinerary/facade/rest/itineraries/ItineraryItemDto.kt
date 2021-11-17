package me.aburke.itinerary.facade.rest.itineraries

import me.aburke.itinerary.core.itinerary.ItineraryItemType
import me.aburke.itinerary.core.itinerary.Location
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
