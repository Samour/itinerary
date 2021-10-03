package me.aburke.itinerary.rest.advice

import me.aburke.itinerary.dto.error.ErrorResponse
import me.aburke.itinerary.exceptions.UpdateFailedException
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import java.time.Instant
import javax.servlet.http.HttpServletRequest

@ControllerAdvice
class UpdateFailedAdvice {

    @ExceptionHandler(UpdateFailedException::class)
    fun handleNotFound(ex: UpdateFailedException, request: HttpServletRequest): ResponseEntity<ErrorResponse> {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
            .contentType(MediaType.APPLICATION_PROBLEM_JSON)
            .body(
                ErrorResponse(
                    500,
                    Instant.now(),
                    request.servletPath,
                    ex.message ?: "Failure occurred while performing action"
                )
            )
    }
}
