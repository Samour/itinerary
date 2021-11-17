package me.aburke.itinerary.app.config

import me.aburke.itinerary.core.itinerary.service.IItineraryStore
import me.aburke.itinerary.core.itinerary.service.ItineraryService
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class AppBeans {

    @Bean
    fun itineraryService(itineraryStore: IItineraryStore): ItineraryService =
        ItineraryService(itineraryStore)
}
