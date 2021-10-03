package me.aburke.itinerary.model

import java.time.Instant

data class ItineraryItem(
    val id: String,
    var name: String,
    var description: String,
    var type: ItineraryItemType,
    var primaryLocation: Location,
    var secondaryLocations: List<Location>,
    var startTime: Instant,
    var endTime: Instant,
)
