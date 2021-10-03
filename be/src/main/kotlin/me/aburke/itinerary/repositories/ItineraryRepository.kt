package me.aburke.itinerary.repositories

import me.aburke.itinerary.dto.list.ItinerarySummaryDto
import me.aburke.itinerary.model.Itinerary
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.mongodb.repository.Query

interface ItineraryRepository : MongoRepository<Itinerary, String> {

    @Query(fields = "{" +
            "'id': 1," +
            "'name': 1," +
            "'description': 1," +
            "'startTime': 1," +
            "'endTime': 1" +
            "}")
    fun findAllByUserId(userId: String): List<ItinerarySummaryDto>

    fun findByIdAndUserId(id: String, userId: String): Itinerary?
}
