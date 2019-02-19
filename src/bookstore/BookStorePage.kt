import kotlin.browser.document

class BookStorePage(private val presenter: BookStoreContract.Presenter) : BookStoreContract.View {
    private val loader = document.getDiv(LOADER)
    private val content = document.getDiv(CONTENT)

    override fun showBooks(books: List<Book>) {
        books.forEach { book ->
            CardBuilder().build(book).also { card ->
                content.appendChild(card)
            }
        }
    }

    override fun showLoader() { loader.style.visibility = VISIBLE }
    override fun hideLoader() { loader.style.visibility = HIDDEN }

    fun show() {
        presenter.apply {
            attach(this@BookStorePage)
            loadBooks()
        }
    }

}
