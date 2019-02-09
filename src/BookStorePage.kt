import kotlin.browser.document

class BookStorePage(private val presenter: BookStoreContract.Presenter) : BookStoreContract.View {
    private val loader = document.getElementById(LOADER) as _DIV_
    private val content = document.getElementById(CONTENT) as _DIV_

    override fun showBooks(books: List<Book>) = books.forEach { book ->
        CardBuilder().build(book).also { card ->
            content.appendChild(card)
        }
    }

    // @formatter:off
    override fun showLoader() { loader.style.visibility = VISIBLE }

    override fun hideLoader() { loader.style.visibility = HIDDEN }
    // @formatter:on

    fun show() {
        presenter.apply {
            attach(this@BookStorePage)
            loadBooks()
        }
    }

}
