package me.aburke.itinerary.rest

import me.aburke.itinerary.dto.create.CreateItineraryRequest
import me.aburke.itinerary.dto.create.CreateItineraryResponse
import me.aburke.itinerary.dto.detail.ItineraryDto
import me.aburke.itinerary.dto.list.ItineraryListDto
import me.aburke.itinerary.services.ItineraryService
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/itineraries")
class ItineraryController(val itineraryService: ItineraryService) {

    @GetMapping
    fun listItineraries(@RequestHeader("User-Id") userId: String): ItineraryListDto {
        return itineraryService.listItineraries(userId)
    }

    @PostMapping
    fun createItinerary(
        @RequestBody itinerary: CreateItineraryRequest,
        @RequestHeader("User-Id") userId: String
    ): CreateItineraryResponse {
        return itineraryService.createItinerary(itinerary, userId)
    }

    @GetMapping("/{id}")
    fun getItinerary(@PathVariable id: String, @RequestHeader("User-Id") userId: String): ItineraryDto {
        return itineraryService.getItinerary(id, userId)
    }
}