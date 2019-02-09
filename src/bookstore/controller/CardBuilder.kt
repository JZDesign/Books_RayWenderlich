import kotlin.browser.window
import kotlin.dom.addClass

class CardBuilder {

    fun build(book: Book) = Card(div(), div(), div(), div(), img(), button()).let { card ->
        card.apply {
            bind(book, image, title, price, description, button)
            applyStyle(container, image, title, price, description, button)
            container.append(image, title, description, price, button)
        }
        card.container
    }

    private fun bind(book: Book, image: _IMAGE_, title: _DIV_, price: _DIV_, description: _DIV_, button: _BUTTON_) {
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

    private fun applyStyle(container: _DIV_, image: _IMAGE_, title: _DIV_, price: _DIV_, description: _DIV_, button: _BUTTON_) {
        container.addClass(CARD, CARD_SHADOW)
        image.addClass(COVER_IMAGE)
        title.addClass(TITLE, FLOAT_LEFT)
        description.addClass(DESCRIPTION, FLOAT_LEFT)
        price.addClass(PRICE, FLOAT_LEFT)
        button.addClass(DETAILS, RIPPLE, FLOAT_RIGHT)
    }

}