import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLImageElement

fun main(args: Array<String>) {
    BookStorePresenter().apply { BookStorePage(this).show() }
}

// GLOBAL

val API_URL = js("getApiUrl()") as String

typealias DIV = HTMLDivElement
typealias BUTTON = HTMLButtonElement
typealias IMAGE = HTMLImageElement

const val CLICK = "click"