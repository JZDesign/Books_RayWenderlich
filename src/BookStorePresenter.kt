import org.w3c.xhr.XMLHttpRequest

class BookStorePresenter : BookStoreContract.Presenter {
    private lateinit var view: BookStoreContract.View
    // @formatter:off
    override fun attach(view: BookStoreContract.View) { this.view = view }
    // @formatter:on

    override fun loadBooks() {
        view.showLoader()
        getAsync(API_URL) { response ->
            val books = JSON.parse<Array<Book>>(response)
            view.apply {
                hideLoader()
                showBooks(books.toList())
            }
        }
    }

    private fun getAsync(url: String, callback: (String) -> Unit) = XMLHttpRequest().apply {
        open("GET", url)
        onload = { if (successful()) callback.invoke(responseText) }
        send()
    }
}
