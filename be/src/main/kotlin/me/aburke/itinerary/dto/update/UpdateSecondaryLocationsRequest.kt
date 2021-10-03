package me.aburke.itinerary.dto.update

import me.aburke.itinerary.model.Location

data class UpdateSecondaryLocationsRequest(val secondaryLocations: List<Location>)
