package me.aburke.itinerary.model

import org.springframework.data.mongodb.core.mapping.Document
import java.time.Instant

@Document
data class Itinerary(
    val id: String,
    val userId: String,
    val name: String,
    val description: String,
    val startTime: Instant,
    val endTime: Instant,
    val items: List<ItineraryItem>,
)
