package me.aburke.itinerary.app.config

import com.mongodb.client.MongoClient
import me.aburke.itinerary.facade.rest.interceptors.LoggingInterceptor
import me.aburke.itinerary.facade.rest.interceptors.RequestContextInterceptor
import me.aburke.itinerary.facade.rest.interceptors.UserAuthenticationInterceptor
import org.springframework.beans.factory.annotation.Value
import org.springframework.boot.SpringBootConfiguration
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.ComponentScan
import org.springframework.data.mongodb.core.MongoTemplate
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.DelegatingWebMvcConfiguration
import org.springframework.web.servlet.config.annotation.InterceptorRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

@SpringBootConfiguration
@ComponentScan("me.aburke.itinerary")
@EnableMongoRepositories("me.aburke.itinerary")
class AppConfig : DelegatingWebMvcConfiguration() {

    @Bean
    fun mongoTemplate(mongoClient: MongoClient, @Value("\${db.name}") dbName: String): MongoTemplate {
        return MongoTemplate(mongoClient, dbName)
    }

    @Bean
    fun corsConfigurer(): WebMvcConfigurer {
        return object : WebMvcConfigurer {
            override fun addCorsMappings(registry: CorsRegistry) {
                registry.addMapping("/**")
                    .allowedOrigins("*")
                    .allowedMethods("*")
                    .allowedHeaders("*")
            }
        }
    }

    override fun addInterceptors(registry: InterceptorRegistry) {
        registry.addInterceptor(UserAuthenticationInterceptor);
        registry.addInterceptor(LoggingInterceptor)
        registry.addInterceptor(RequestContextInterceptor)
    }
}
