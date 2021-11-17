package me.aburke.itinerary.facade.rest.advice

import me.aburke.itinerary.core.exceptions.NotFoundException
import me.aburke.itinerary.facade.rest.ErrorResponse
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import java.time.Instant
import javax.servlet.http.HttpServletRequest

@ControllerAdvice
class NotFoundAdvice {

    @ExceptionHandler(NotFoundException::class)
    fun handleNotFound(ex: NotFoundException, request: HttpServletRequest): ResponseEntity<ErrorResponse> {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
            .contentType(MediaType.APPLICATION_PROBLEM_JSON)
            .body(
                ErrorResponse(
                    404,
                    Instant.now(),
                    request.servletPath,
                    "Resource not found"
                )
            )
    }
}