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

    @GetMapping("/{id}")
    fun getItinerary(
        @RequestHeader("User-Id") userId: String,
        @PathVariable id: String,
    ): ItineraryDto {
        return itineraryService.loadItinerary(userId, id)
            .let {
                ItineraryDto(
                    id = it.id,
                    name = it.name,
                    description = it.description,
                    startTime = it.startTime,
                    endTime = it.endTime,
                    items = it.items.map { item ->
                        ItineraryItemDto(
                            id = item.id,
                            name = item.name,
                            description = item.description,
                            type = item.type,
                            primaryLocation = item.primaryLocation,
                            secondaryLocations = item.secondaryLocations,
                            startTime = item.startTime,
                            endTime = item.endTime
                        )
                    }
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