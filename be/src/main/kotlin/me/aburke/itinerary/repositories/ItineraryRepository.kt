package me.aburke.itinerary.repositories

import me.aburke.itinerary.model.Itinerary
import org.springframework.data.mongodb.repository.MongoRepository

interface ItineraryRepository : MongoRepository<Itinerary, String>
