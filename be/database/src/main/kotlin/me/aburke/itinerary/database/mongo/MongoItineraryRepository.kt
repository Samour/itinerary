package me.aburke.itinerary.database.mongo

import me.aburke.itinerary.core.itinerary.Itinerary
import me.aburke.itinerary.core.itinerary.ItinerarySummary
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.mongodb.repository.Query

interface MongoItineraryRepository : MongoRepository<Itinerary, String> {

    @Query(
        fields = """
            {
                id: 1,
                name: 1,
                description: 1,
                startTime: 1,
                endTime: 1
            }
        """,
        sort = "{ startTime: 1, endTime: 1 }"
    )
    fun findAllByUserId(userId: String): List<ItinerarySummary>

    fun findByIdAndUserId(id: String, userId: String): Itinerary?

    fun deleteByIdAndUserId(id: String, userId: String)
}