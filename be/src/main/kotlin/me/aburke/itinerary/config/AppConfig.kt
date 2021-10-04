package me.aburke.itinerary.config

import com.mongodb.client.MongoClient
import org.springframework.beans.factory.annotation.Value
import org.springframework.boot.SpringBootConfiguration
import org.springframework.context.annotation.Bean
import org.springframework.data.mongodb.core.MongoTemplate
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

@SpringBootConfiguration
@EnableMongoRepositories("me.aburke.itinerary")
class AppConfig {

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
                    .allowedHeaders("*")
            }
        }
    }
}
