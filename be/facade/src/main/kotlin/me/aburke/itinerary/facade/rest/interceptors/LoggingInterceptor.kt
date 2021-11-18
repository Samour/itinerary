package me.aburke.itinerary.facade.rest.interceptors

import me.aburke.itinerary.core.context.LoggingContext
import me.aburke.itinerary.core.context.UserContext
import org.slf4j.LoggerFactory
import org.springframework.web.servlet.HandlerInterceptor
import java.time.Duration
import java.time.Instant
import java.util.*
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

object LoggingInterceptor : HandlerInterceptor {

    private val logger = LoggerFactory.getLogger(LoggingInterceptor::class.java)

    override fun preHandle(request: HttpServletRequest, response: HttpServletResponse, handler: Any): Boolean {
        val userContext = request.getAttribute("userContext") as UserContext
        val canonicalLogDetails = mutableMapOf<String, String?>()
        val loggingContext = LoggingContext(canonical = { canonicalLogDetails.putAll(it) })
            .withCanonical(
                "user-id" to userContext.userId,
                "url" to request.servletPath,
                "request-id" to UUID.randomUUID().toString(),
            )

        request.setAttribute("requestStartTime", Instant.now())
        request.setAttribute("canonicalLog", LoggingContext(canonicalLogDetails))
        request.setAttribute("loggingContext", loggingContext)

        return true
    }

    override fun afterCompletion(
        request: HttpServletRequest,
        response: HttpServletResponse,
        handler: Any,
        ex: Exception?
    ) {
        val canonicalLog = request.getAttribute("canonicalLog") as LoggingContext
        val requestStartTime = request.getAttribute("requestStartTime") as Instant
        logger.info(
            canonicalLog.with(
                "response-code" to response.status.toString(),
                "request-time" to Duration.between(requestStartTime, Instant.now()).toMillis().toString()
            ).format("canonical-log")
        )
    }
}