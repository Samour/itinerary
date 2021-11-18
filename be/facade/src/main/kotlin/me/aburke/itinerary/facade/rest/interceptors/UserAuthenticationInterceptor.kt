package me.aburke.itinerary.facade.rest.interceptors

import me.aburke.itinerary.core.context.UserContext
import org.springframework.web.servlet.HandlerInterceptor
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

object UserAuthenticationInterceptor : HandlerInterceptor {

    override fun preHandle(request: HttpServletRequest, response: HttpServletResponse, handler: Any): Boolean {
        val userContext = UserContext(
            userId = request.getHeader("User-Id")
        )
        request.setAttribute("userContext", userContext)

        return true
    }
}
