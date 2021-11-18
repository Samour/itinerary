package me.aburke.itinerary.core.context

typealias CanonicalLogDetails = (values: Map<String, String?>) -> Unit;

class LoggingContext(
    private val propagated: Map<String, String?> = emptyMap(),
    private val canonical: CanonicalLogDetails? = null,
) {

    fun format(): String =
        propagated.entries
            .joinToString(
                prefix = "[",
                postfix = "]",
                separator = " | ",
                transform = { "${it.key}=${it.value}" }
            )

    fun format(msg: String): String = "${format()} ${msg}"

    fun withCanonical(vararg values: Pair<String, String?>): LoggingContext {
        canonical?.invoke(mapOf(*values))
        return with(*values)
    }

    fun with(vararg values: Pair<String, String?>): LoggingContext =
        LoggingContext(propagated + mapOf(*values), canonical)
}