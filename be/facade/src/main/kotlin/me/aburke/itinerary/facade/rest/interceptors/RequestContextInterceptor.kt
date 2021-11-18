package me.aburke.itinerary.facade.rest.interceptors

import me.aburke.itinerary.core.context.LoggingContext
import me.aburke.itinerary.core.context.RequestContext
import me.aburke.itinerary.core.context.UserContext
import org.springframework.web.servlet.HandlerInterceptor
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

object RequestContextInterceptor : HandlerInterceptor {

    override fun preHandle(request: HttpServletRequest, response: HttpServletResponse, handler: Any): Boolean {
        val userContext = request.getAttribute("userContext") as UserContext
        val loggingContext = request.getAttribute("loggingContext") as LoggingContext
        val requestContext = RequestContext(
            userContext = userContext,
            loggingContext = loggingContext,
        )

        request.setAttribute("requestContext", requestContext)

        return true
    }
}