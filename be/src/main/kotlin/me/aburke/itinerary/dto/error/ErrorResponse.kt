package me.aburke.itinerary.dto.error

import java.time.Instant

data class ErrorResponse(
    val status: Int,
    val timestamp: Instant,
    val path: String,
    val error: String,
)
