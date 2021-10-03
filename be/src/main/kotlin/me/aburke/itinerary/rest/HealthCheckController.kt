package me.aburke.itinerary.rest

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/health")
class HealthCheckController {

    @GetMapping
    fun healthCheck(): Map<String, String> {
        val response = mutableMapOf<String, String>()
        response.put("healthy", "true")

        return response
    }
}