package me.aburke.itinerary.converters.impl

import me.aburke.itinerary.converters.ItineraryConverter
import me.aburke.itinerary.dto.create.CreateItineraryRequest
import me.aburke.itinerary.dto.create.CreateItineraryResponse
import me.aburke.itinerary.dto.detail.ItineraryDto
import me.aburke.itinerary.dto.detail.ItineraryItemDto
import me.aburke.itinerary.model.Itinerary
import me.aburke.itinerary.model.ItineraryItem
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

    override fun toDto(itinerary: Itinerary): ItineraryDto {
        return ItineraryDto(
            itinerary.id,
            itinerary.name,
            itinerary.description,
            itinerary.startTime,
            itinerary.endTime,
            itinerary.items.map(this::toDto)
        )
    }

    private fun toDto(item: ItineraryItem): ItineraryItemDto {
        return ItineraryItemDto(
            item.id,
            item.name,
            item.description,
            item.type,
            item.primaryLocation,
            item.secondaryLocations,
            item.startTime,
            item.endTime
        )
    }
}