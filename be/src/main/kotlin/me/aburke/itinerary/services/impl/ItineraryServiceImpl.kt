package me.aburke.itinerary.services.impl

import me.aburke.itinerary.converters.ItineraryConverter
import me.aburke.itinerary.dto.create.CreateItineraryRequest
import me.aburke.itinerary.dto.create.CreateItineraryResponse
import me.aburke.itinerary.dto.detail.ItineraryDto
import me.aburke.itinerary.dto.list.ItineraryListDto
import me.aburke.itinerary.exceptions.BusinessException
import me.aburke.itinerary.exceptions.NotFoundException
import me.aburke.itinerary.model.Itinerary
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
        if (!model.startTime.isBefore(model.endTime)) {
            throw BusinessException("End time must be after start time")
        }

        itineraryRepository.save(model)

        return itineraryConverter.createResponse(model)
    }

    override fun getItinerary(itineraryId: String, userId: String): ItineraryDto {
        return itineraryConverter.toDto(loadItinerary(itineraryId, userId))
    }

    override fun deleteItinerary(itineraryId: String, userId: String) {
        val deletedCount = itineraryRepository.deleteByIdAndUserId(itineraryId, userId)
        if (deletedCount < 1) {
            throw NotFoundException()
        }
    }

    override fun updateItinerary(itineraryId: String, userId: String, update: (itinerary: Itinerary) -> Unit) {
        // NOTE: We should probably be locking the Itinerary record here; especially later on when we do
        // updates to itinerary items
        // Not going to spend time on that rn though
        val itinerary = loadItinerary(itineraryId, userId)
        update(itinerary)
        itineraryRepository.save(itinerary)
    }

    private fun loadItinerary(itineraryId: String, userId: String): Itinerary {
        val itinerary = itineraryRepository.findByIdAndUserId(itineraryId, userId)
        if (itinerary == null) {
            throw NotFoundException()
        }

        return itinerary
    }
}