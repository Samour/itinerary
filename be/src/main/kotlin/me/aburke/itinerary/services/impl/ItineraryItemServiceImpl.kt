package me.aburke.itinerary.services.impl

import me.aburke.itinerary.converters.ItineraryConverter
import me.aburke.itinerary.dto.create.CreateItineraryItemRequest
import me.aburke.itinerary.dto.create.CreateItineraryResponse
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
            if (model.startTime.isBefore(it.startTime)) {
                it.startTime = model.startTime
            }
            if (model.endTime.isAfter(it.endTime)) {
                it.endTime = model.endTime
            }

            it.items.add(model)
            sortItems(it.items)
        }

        return itineraryConverter.createResponse(model)
    }

    override fun deleteItem(itineraryId: String, userId: String, itemId: String) {
        itineraryService.updateItinerary(itineraryId, userId) {
            it.items.removeIf { i -> itemId == i.id }
        }
    }

    private fun sortItems(items: MutableList<ItineraryItem>) {
        items.sortWith(comparing(ItineraryItem::startTime))
    }
}
