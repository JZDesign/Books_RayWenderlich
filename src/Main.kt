fun main(args: Array<String>) {
    BookStorePresenter().apply { BookStorePage(this).show() }
}
