import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.addClass

class CardBuilder {

    private fun div() = document.createElement(_DIV) as DIV
    private fun img() = document.createElement(_IMG) as IMAGE
    private fun button() = document.createElement(_BUTTON) as BUTTON

    fun build(book: Book) = Card(div(), div(), div(), div(), img(), button()).let { card ->
        card.apply {
            bind(book, image, title, price, description, button)
            applyStyle(container, image, title, price, description, button)
            container.append(image, title, description, price, button)
        }
        card.container
    }

    private fun bind(book: Book, image: IMAGE, title: DIV, price: DIV, description: DIV, button: BUTTON) {
        image.src = book.coverUrl
        title.innerHTML = book.title
        price.innerHTML = book.price
        description.innerHTML = book.description
        button.apply {
            innerHTML = BUTTON_TEXT
            addEventListener(CLICK, {
                window.open(book.url)
            })
        }
    }

    private fun applyStyle(container: DIV, image: IMAGE, title: DIV, price: DIV, description: DIV, button: BUTTON) {
        container.addClass(CARD, CARD_SHADOW)
        image.addClass(COVER_IMAGE)
        title.addClass(TITLE, FLOAT_LEFT)
        description.addClass(DESCRIPTION, FLOAT_LEFT)
        price.addClass(PRICE, FLOAT_LEFT)
        button.addClass(DETAILS, RIPPLE, FLOAT_RIGHT)
    }

    companion object {
        // @formatter:off
        // content
        const val BUTTON_TEXT = "view details"
        const val FLOAT_LEFT  = "float-left"
        // style classes
        const val FLOAT_RIGHT = "float-right"
        const val CARD        = "card"
        const val CARD_SHADOW = "card-shadow"
        const val COVER_IMAGE = "cover-image"
        const val TITLE       = "text-title"
        const val DESCRIPTION = "text-description"
        const val PRICE       = "text-price"
        const val DETAILS     = "view-details"
        const val RIPPLE      = "ripple"
        // elements
        const val _DIV        = "div"
        const val _IMG        = "img"
        const val _BUTTON     = "button"
        // @formatter:on
    }

}