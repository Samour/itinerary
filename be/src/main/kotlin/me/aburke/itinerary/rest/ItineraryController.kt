package me.aburke.itinerary.rest

import me.aburke.itinerary.dto.create.CreateItineraryRequest
import me.aburke.itinerary.dto.create.CreateItineraryResponse
import me.aburke.itinerary.services.ItineraryService
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/itineraries")
class ItineraryController(val itineraryService: ItineraryService) {

    @PostMapping
    fun createItinerary(@RequestBody itinerary: CreateItineraryRequest,
                        @RequestHeader("User-Id") userId: String): CreateItineraryResponse {
        return itineraryService.createItinerary(itinerary, userId)
    }
}