package me.aburke.itinerary.rest

import me.aburke.itinerary.dto.create.CreateItineraryItemRequest
import me.aburke.itinerary.dto.create.CreateItineraryRequest
import me.aburke.itinerary.dto.create.CreateItineraryResponse
import me.aburke.itinerary.dto.detail.ItineraryDto
import me.aburke.itinerary.dto.list.ItineraryListDto
import me.aburke.itinerary.dto.update.UpdateDescriptionRequest
import me.aburke.itinerary.dto.update.UpdateEndTimeRequest
import me.aburke.itinerary.dto.update.UpdateNameRequest
import me.aburke.itinerary.dto.update.UpdateStartTimeRequest
import me.aburke.itinerary.services.ItineraryItemService
import me.aburke.itinerary.services.ItineraryService
import me.aburke.itinerary.services.ItineraryUpdateService
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/itineraries")
class ItineraryController(
    val itineraryUpdateService: ItineraryUpdateService,
    val itineraryService: ItineraryService,
    val itineraryItemService: ItineraryItemService,
) {

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

    @DeleteMapping("/{id}")
    fun deleteItinerary(@PathVariable id: String, @RequestHeader("User-Id") userId: String): Unit {
        itineraryService.deleteItinerary(id, userId)
    }

    @PutMapping("/{id}/name")
    fun updateItineraryName(
        @PathVariable id: String,
        @RequestBody update: UpdateNameRequest,
        @RequestHeader("User-Id") userId: String
    ): Unit {
        itineraryUpdateService.updateName(id, userId, update)
    }

    @PutMapping("/{id}/description")
    fun updateItineraryDescription(
        @PathVariable id: String,
        @RequestBody update: UpdateDescriptionRequest,
        @RequestHeader("User-Id") userId: String
    ): Unit {
        itineraryUpdateService.updateDescription(id, userId, update)
    }

    @PutMapping("/{id}/startTime")
    fun updateItineraryStartTime(
        @PathVariable id: String,
        @RequestBody update: UpdateStartTimeRequest,
        @RequestHeader("User-Id") userId: String
    ): Unit {
        itineraryUpdateService.updateStartTime(id, userId, update)
    }

    @PutMapping("/{id}/endTime")
    fun updateItineraryEndTime(
        @PathVariable id: String,
        @RequestBody update: UpdateEndTimeRequest,
        @RequestHeader("User-Id") userId: String
    ): Unit {
        itineraryUpdateService.updateEndTime(id, userId, update)
    }

    @PostMapping("/{id}/items")
    fun createItineraryItem(
        @PathVariable id: String,
        @RequestBody item: CreateItineraryItemRequest,
        @RequestHeader("User-Id") userId: String
    ): CreateItineraryResponse {
        return itineraryItemService.createItem(id, userId, item)
    }

    @DeleteMapping("/{id}/items/{itemId}")
    fun deleteItineraryItem(
        @PathVariable id: String,
        @PathVariable itemId: String,
        @RequestHeader("User-Id") userId: String
    ): Unit {
        itineraryItemService.deleteItem(id, userId, itemId)
    }
}