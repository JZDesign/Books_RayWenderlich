import org.w3c.xhr.XMLHttpRequest

fun XMLHttpRequest.successful() = (readyState == 4.toShort() && status == 200.toShort())
