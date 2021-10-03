package me.aburke.itinerary.converters.impl

import me.aburke.itinerary.converters.ItineraryConverter
import me.aburke.itinerary.dto.create.CreateItineraryRequest
import me.aburke.itinerary.dto.create.CreateItineraryResponse
import me.aburke.itinerary.model.Itinerary
import org.springframework.stereotype.Component
import java.util.*

@Component
class ItineraryConverterImpl : ItineraryConverter {

    override fun createModel(request: CreateItineraryRequest, userId: String): Itinerary {
        return Itinerary(
            UUID.randomUUID().toString(),
            userId,
            request.name,
            request.description,
            request.startTime,
            request.endTime,
            emptyList()
        )
    }

    override fun createResponse(itinerary: Itinerary): CreateItineraryResponse {
        return CreateItineraryResponse(
            itinerary.id
        )
    }
}