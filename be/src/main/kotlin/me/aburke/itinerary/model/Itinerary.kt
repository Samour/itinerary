package me.aburke.itinerary.model

import org.springframework.data.mongodb.core.mapping.Document
import java.time.Instant

@Document
data class Itinerary(
    val id: String,
    var userId: String,
    var name: String,
    var description: String,
    var startTime: Instant,
    var endTime: Instant,
    var items: MutableList<ItineraryItem>,
)
