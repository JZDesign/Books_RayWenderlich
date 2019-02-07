import kotlin.browser.document

class BookStorePage(private val presenter: BookStoreContract.Presenter) : BookStoreContract.View {
    private val loader = document.getElementById("loader") as DIV
    private val content = document.getElementById("content") as DIV
    private val cardBuilder = CardBuilder()

    override fun showBooks(books: List<Book>) = books.forEach { book ->
        cardBuilder.build(book).also { card ->
            content.appendChild(card)
        }
    }

    override fun showLoader() { loader.style.visibility = "visible" }

    override fun hideLoader() { loader.style.visibility = "hidden" }

    fun show() = presenter.apply {
        attach(this@BookStorePage)
        loadBooks()
    }

}