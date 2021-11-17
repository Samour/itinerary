package me.aburke.itinerary.app

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class ItineraryApplication

fun main(args: Array<String>) {
    runApplication<ItineraryApplication>(*args)
}
