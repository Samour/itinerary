package me.aburke.itinerary.services.impl

import me.aburke.itinerary.converters.ItineraryConverter
import me.aburke.itinerary.dto.create.CreateItineraryItemRequest
import me.aburke.itinerary.dto.create.CreateItineraryResponse
import me.aburke.itinerary.exceptions.NotFoundException
import me.aburke.itinerary.model.Itinerary
import me.aburke.itinerary.model.ItineraryItem
import me.aburke.itinerary.services.ItineraryItemService
import me.aburke.itinerary.services.ItineraryService
import org.springframework.stereotype.Service
import java.util.Comparator.comparing

@Service
class ItineraryItemServiceImpl(
    val itineraryConverter: ItineraryConverter,
    val itineraryService: ItineraryService,
) : ItineraryItemService {

    override fun createItem(
        itineraryId: String,
        userId: String,
        item: CreateItineraryItemRequest
    ): CreateItineraryResponse {
        val model = itineraryConverter.createModel(item)
        itineraryService.updateItinerary(itineraryId, userId) {
            it.items.add(model)
            updateTimes(it, model)
        }

        return itineraryConverter.createResponse(model)
    }

    override fun deleteItem(itineraryId: String, userId: String, itemId: String) {
        itineraryService.updateItinerary(itineraryId, userId) {
            it.items.removeIf { i -> itemId == i.id }
        }
    }

    override fun updateItem(
        itineraryId: String,
        userId: String,
        itemId: String,
        updatesTime: Boolean,
        update: (item: ItineraryItem) -> Unit
    ) {
        itineraryService.updateItinerary(itineraryId, userId) {
            val item = it.items.find { i -> i.id == itemId } ?: throw NotFoundException()
            update(item)
            if (updatesTime) {
                updateTimes(it, item)
            }
        }
    }

    private fun updateTimes(itinerary: Itinerary, item: ItineraryItem) {
        if (item.startTime.isBefore(itinerary.startTime)) {
            itinerary.startTime = item.startTime
        }
        if (item.endTime.isAfter(itinerary.endTime)) {
            itinerary.endTime = item.endTime
        }

        itinerary.items.sortWith(comparing(ItineraryItem::startTime))
    }
}
