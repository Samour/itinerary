package me.aburke.itinerary.facade.rest

import java.time.Instant

data class ErrorResponse(
    val status: Int,
    val timestamp: Instant,
    val path: String,
    val error: String,
)
