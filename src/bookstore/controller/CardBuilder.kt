import kotlin.browser.window
import kotlin.dom.addClass

class CardBuilder {

    fun build(book: Book) = Card().let { card ->
        card.apply {
            bind(book)
            applyStyle()
            container.append(image, title, description, price, button)
        }
        card.container
    }

    private fun Card.bind(book: Book) = apply {
        image.src = book.coverUrl
        title.innerHTML = book.title
        price.innerHTML = book.price
        description.innerHTML = book.description
        button.apply {
            innerHTML = BUTTON_TEXT
            addEventListener(CLICK, { window.open(book.url) })
        }
    }

    private fun Card.applyStyle() = apply {
        container.addClass(CARD, CARD_SHADOW)
        image.addClass(COVER_IMAGE)
        title.addClass(TITLE, FLOAT_LEFT)
        description.addClass(DESCRIPTION, FLOAT_LEFT)
        price.addClass(PRICE, FLOAT_LEFT)
        button.addClass(DETAILS, RIPPLE, FLOAT_RIGHT)
    }

}
