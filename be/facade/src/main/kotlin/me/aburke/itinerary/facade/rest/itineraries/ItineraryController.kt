package me.aburke.itinerary.facade.rest.itineraries

import me.aburke.itinerary.core.itinerary.service.CreateItineraryDetails
import me.aburke.itinerary.core.itinerary.service.ItineraryService
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/itineraries")
class ItineraryController(private val itineraryService: ItineraryService) {

    @GetMapping
    fun listItineraries(@RequestHeader("User-Id") userId: String): ItineraryListDto {
        return ItineraryListDto(
            itineraries = itineraryService.listItineraries(userId)
                .map {
                    ItinerarySummaryDto(
                        id = it.id,
                        name = it.name,
                        description = it.description,
                        startTime = it.startTime,
                        endTime = it.endTime,
                    )
                }
        )
    }

    @PostMapping
    fun createItinerary(
        @RequestHeader("User-Id") userId: String,
        @RequestBody itinerary: CreateItineraryRequest,
    ): CreateItineraryResponse {
        return itineraryService.createItinerary(
            userId, CreateItineraryDetails(
                name = itinerary.name,
                description = itinerary.description,
                startTime = itinerary.startTime,
                endTime = itinerary.endTime,
            )
        ).let {
            CreateItineraryResponse(
                id = it.id
            )
        }
    }

    @DeleteMapping("/{id}")
    fun deleteItinerary(
        @RequestHeader("User-Id") userId: String,
        @PathVariable id: String,
    ) {
        itineraryService.deleteItinerary(userId, id)
    }
}