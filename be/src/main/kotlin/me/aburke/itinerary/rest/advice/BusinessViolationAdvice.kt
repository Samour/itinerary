package me.aburke.itinerary.rest.advice

import me.aburke.itinerary.dto.error.ErrorResponse
import me.aburke.itinerary.exceptions.BusinessException
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import java.time.Instant
import javax.servlet.http.HttpServletRequest

@ControllerAdvice
class BusinessViolationAdvice {

    @ExceptionHandler(BusinessException::class)
    fun handleNotFound(ex: BusinessException, request: HttpServletRequest): ResponseEntity<ErrorResponse> {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
            .contentType(MediaType.APPLICATION_PROBLEM_JSON)
            .body(
                ErrorResponse(
                    400,
                    Instant.now(),
                    request.servletPath,
                    ex.message ?: "Invalid parameters"
                )
            )
    }
}