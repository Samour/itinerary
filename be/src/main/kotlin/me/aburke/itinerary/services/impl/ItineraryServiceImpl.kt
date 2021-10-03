package me.aburke.itinerary.services.impl

import me.aburke.itinerary.converters.ItineraryConverter
import me.aburke.itinerary.dto.create.CreateItineraryRequest
import me.aburke.itinerary.dto.create.CreateItineraryResponse
import me.aburke.itinerary.repositories.ItineraryRepository
import me.aburke.itinerary.services.ItineraryService
import org.springframework.stereotype.Service

@Service
class ItineraryServiceImpl(
    val itineraryConverter: ItineraryConverter,
    val itineraryRepository: ItineraryRepository
) : ItineraryService {

    override fun createItinerary(itinerary: CreateItineraryRequest, userId: String): CreateItineraryResponse {
        val model = itineraryConverter.createModel(itinerary, userId)
        itineraryRepository.save(model)

        return itineraryConverter.createResponse(model)
    }
}