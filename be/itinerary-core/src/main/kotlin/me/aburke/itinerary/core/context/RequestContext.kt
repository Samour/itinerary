package me.aburke.itinerary.core.context

data class RequestContext(
    val userContext: UserContext,
    val loggingContext: LoggingContext,
)
