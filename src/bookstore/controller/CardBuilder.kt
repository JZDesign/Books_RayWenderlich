import kotlin.browser.window
import kotlin.dom.addClass

class CardBuilder {

    fun build(book: Book) = Card(div(), div(), div(), div(), img(), button()).let { card ->
        card.apply {
            bind(book, card)
            applyStyle(card)
            container.append(image, title, description, price, button)
        }
        card.container
    }

    private fun bind(book: Book, card: Card) {
        card.apply {
            image.src = book.coverUrl
            title.innerHTML = book.title
            price.innerHTML = book.price
            description.innerHTML = book.description
            button.apply {
                innerHTML = BUTTON_TEXT
                // @formatter:off
            addEventListener(CLICK, { window.open(book.url) })
            // @formatter:on
            }
        }
    }

    private fun applyStyle(card: Card) {
        card.apply {
            container.addClass(CARD, CARD_SHADOW)
            image.addClass(COVER_IMAGE)
            title.addClass(TITLE, FLOAT_LEFT)
            description.addClass(DESCRIPTION, FLOAT_LEFT)
            price.addClass(PRICE, FLOAT_LEFT)
            button.addClass(DETAILS, RIPPLE, FLOAT_RIGHT)
        }
    }

}
