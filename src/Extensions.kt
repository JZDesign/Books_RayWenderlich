import org.w3c.dom.Document
import org.w3c.xhr.XMLHttpRequest

fun XMLHttpRequest.successful() = (readyState == 4.toShort() && status == 200.toShort())
fun Document.getDiv(id: String) = getElementById(id) as _DIV_
