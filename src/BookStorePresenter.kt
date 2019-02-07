import org.w3c.xhr.XMLHttpRequest

class BookStorePresenter : BookStoreContract.Presenter {
    private lateinit var view: BookStoreContract.View

    override fun attach(view: BookStoreContract.View) { this.view = view }

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
        onload = { if (readyState == READY && status == SUCCESS) callback.invoke(responseText) }
        send()
    }

    companion object {
        const val READY = 4.toShort()
        const val SUCCESS = 200.toShort()
    }
}
