package me.aburke.itinerary.config

import com.mongodb.client.MongoClient
import org.springframework.beans.factory.annotation.Value
import org.springframework.boot.SpringBootConfiguration
import org.springframework.context.annotation.Bean
import org.springframework.data.mongodb.core.MongoTemplate
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories

@SpringBootConfiguration
@EnableMongoRepositories("me.aburke.itinerary")
class AppConfig {

    @Bean
    fun mongoTemplate(mongoClient: MongoClient, @Value("\${db.name}") dbName: String): MongoTemplate {
        return MongoTemplate(mongoClient, dbName)
    }
}
