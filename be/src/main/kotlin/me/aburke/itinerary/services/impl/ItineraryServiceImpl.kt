package me.aburke.itinerary.services.impl

import me.aburke.itinerary.converters.ItineraryConverter
import me.aburke.itinerary.dto.create.CreateItineraryRequest
import me.aburke.itinerary.dto.create.CreateItineraryResponse
import me.aburke.itinerary.dto.detail.ItineraryDto
import me.aburke.itinerary.dto.list.ItineraryListDto
import me.aburke.itinerary.exceptions.NotFoundException
import me.aburke.itinerary.repositories.ItineraryRepository
import me.aburke.itinerary.services.ItineraryService
import org.springframework.stereotype.Service

@Service
class ItineraryServiceImpl(
    val itineraryConverter: ItineraryConverter,
    val itineraryRepository: ItineraryRepository
) : ItineraryService {

    override fun listItineraries(userId: String): ItineraryListDto {
        val itineraries = itineraryRepository.findAllByUserId(userId)

        return ItineraryListDto(
            itineraries
        )
    }

    override fun createItinerary(itinerary: CreateItineraryRequest, userId: String): CreateItineraryResponse {
        val model = itineraryConverter.createModel(itinerary, userId)
        itineraryRepository.save(model)

        return itineraryConverter.createResponse(model)
    }

    override fun getItinerary(itineraryId: String, userId: String): ItineraryDto {
        val itinerary = itineraryRepository.findByIdAndUserId(itineraryId, userId)
        if (itinerary == null) {
            throw NotFoundException()
        }

        return itineraryConverter.toDto(itinerary)
    }
}