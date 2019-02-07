if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'Books_RayWenderlich'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Books_RayWenderlich'.");
}
var Books_RayWenderlich = function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Unit = Kotlin.kotlin.Unit;
  var throwCCE = Kotlin.throwCCE;
  var throwUPAE = Kotlin.throwUPAE;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var toShort = Kotlin.toShort;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  function Book(title, price, description, url, coverUrl) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.url = url;
    this.coverUrl = coverUrl;
  }
  Book.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Book',
    interfaces: []
  };
  Book.prototype.component1 = function () {
    return this.title;
  };
  Book.prototype.component2 = function () {
    return this.price;
  };
  Book.prototype.component3 = function () {
    return this.description;
  };
  Book.prototype.component4 = function () {
    return this.url;
  };
  Book.prototype.component5 = function () {
    return this.coverUrl;
  };
  Book.prototype.copy_x0a6t6$ = function (title, price, description, url, coverUrl) {
    return new Book(title === void 0 ? this.title : title, price === void 0 ? this.price : price, description === void 0 ? this.description : description, url === void 0 ? this.url : url, coverUrl === void 0 ? this.coverUrl : coverUrl);
  };
  Book.prototype.toString = function () {
    return 'Book(title=' + Kotlin.toString(this.title) + (', price=' + Kotlin.toString(this.price)) + (', description=' + Kotlin.toString(this.description)) + (', url=' + Kotlin.toString(this.url)) + (', coverUrl=' + Kotlin.toString(this.coverUrl)) + ')';
  };
  Book.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.price) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    result = result * 31 + Kotlin.hashCode(this.coverUrl) | 0;
    return result;
  };
  Book.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.title, other.title) && Kotlin.equals(this.price, other.price) && Kotlin.equals(this.description, other.description) && Kotlin.equals(this.url, other.url) && Kotlin.equals(this.coverUrl, other.coverUrl)))));
  };
  function BookStoreContract() {
  }
  function BookStoreContract$View() {
  }
  BookStoreContract$View.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'View',
    interfaces: []
  };
  function BookStoreContract$Presenter() {
  }
  BookStoreContract$Presenter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Presenter',
    interfaces: []
  };
  BookStoreContract.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BookStoreContract',
    interfaces: []
  };
  function BookStorePage(presenter) {
    this.presenter_0 = presenter;
    var tmp$, tmp$_0;
    this.loader_0 = Kotlin.isType(tmp$ = document.getElementById('loader'), HTMLDivElement) ? tmp$ : throwCCE();
    this.content_0 = Kotlin.isType(tmp$_0 = document.getElementById('content'), HTMLDivElement) ? tmp$_0 : throwCCE();
    this.cardBuilder_0 = new CardBuilder();
  }
  BookStorePage.prototype.showBooks_4uy0vy$ = function (books) {
    var tmp$;
    tmp$ = books.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.content_0.appendChild(this.cardBuilder_0.build_18i6h$(element));
    }
  };
  BookStorePage.prototype.showLoader = function () {
    this.loader_0.style.visibility = 'visible';
  };
  BookStorePage.prototype.hideLoader = function () {
    this.loader_0.style.visibility = 'hidden';
  };
  BookStorePage.prototype.show = function () {
    var $receiver = this.presenter_0;
    $receiver.attach_dj0p5j$(this);
    $receiver.loadBooks();
    return $receiver;
  };
  BookStorePage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BookStorePage',
    interfaces: [BookStoreContract$View]
  };
  function BookStorePresenter() {
    BookStorePresenter$Companion_getInstance();
    this.view_b4p43b$_0 = this.view_b4p43b$_0;
  }
  Object.defineProperty(BookStorePresenter.prototype, 'view_0', {
    get: function () {
      if (this.view_b4p43b$_0 == null)
        return throwUPAE('view');
      return this.view_b4p43b$_0;
    },
    set: function (view) {
      this.view_b4p43b$_0 = view;
    }
  });
  BookStorePresenter.prototype.attach_dj0p5j$ = function (view) {
    this.view_0 = view;
  };
  function BookStorePresenter$loadBooks$lambda(this$BookStorePresenter) {
    return function (response) {
      var books = JSON.parse(response);
      var $receiver = this$BookStorePresenter.view_0;
      $receiver.hideLoader();
      $receiver.showBooks_4uy0vy$(toList(books));
      return Unit;
    };
  }
  BookStorePresenter.prototype.loadBooks = function () {
    this.view_0.showLoader();
    this.getAsync_0(API_URL, BookStorePresenter$loadBooks$lambda(this));
  };
  function BookStorePresenter$getAsync$lambda$lambda(this$, closure$callback) {
    return function (it) {
      if (this$.readyState === BookStorePresenter$Companion_getInstance().READY && this$.status === BookStorePresenter$Companion_getInstance().SUCCESS)
        closure$callback(this$.responseText);
      return Unit;
    };
  }
  BookStorePresenter.prototype.getAsync_0 = function (url, callback) {
    var $receiver = new XMLHttpRequest();
    $receiver.open('GET', url);
    $receiver.onload = BookStorePresenter$getAsync$lambda$lambda($receiver, callback);
    $receiver.send();
    return $receiver;
  };
  function BookStorePresenter$Companion() {
    BookStorePresenter$Companion_instance = this;
    this.READY = toShort(4);
    this.SUCCESS = toShort(200);
  }
  BookStorePresenter$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BookStorePresenter$Companion_instance = null;
  function BookStorePresenter$Companion_getInstance() {
    if (BookStorePresenter$Companion_instance === null) {
      new BookStorePresenter$Companion();
    }
    return BookStorePresenter$Companion_instance;
  }
  BookStorePresenter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BookStorePresenter',
    interfaces: [BookStoreContract$Presenter]
  };
  function Card(container, title, description, price, image, button) {
    this.container = container;
    this.title = title;
    this.description = description;
    this.price = price;
    this.image = image;
    this.button = button;
  }
  Card.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Card',
    interfaces: []
  };
  Card.prototype.component1 = function () {
    return this.container;
  };
  Card.prototype.component2 = function () {
    return this.title;
  };
  Card.prototype.component3 = function () {
    return this.description;
  };
  Card.prototype.component4 = function () {
    return this.price;
  };
  Card.prototype.component5 = function () {
    return this.image;
  };
  Card.prototype.component6 = function () {
    return this.button;
  };
  Card.prototype.copy_vqnrc1$ = function (container, title, description, price, image, button) {
    return new Card(container === void 0 ? this.container : container, title === void 0 ? this.title : title, description === void 0 ? this.description : description, price === void 0 ? this.price : price, image === void 0 ? this.image : image, button === void 0 ? this.button : button);
  };
  Card.prototype.toString = function () {
    return 'Card(container=' + Kotlin.toString(this.container) + (', title=' + Kotlin.toString(this.title)) + (', description=' + Kotlin.toString(this.description)) + (', price=' + Kotlin.toString(this.price)) + (', image=' + Kotlin.toString(this.image)) + (', button=' + Kotlin.toString(this.button)) + ')';
  };
  Card.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.container) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    result = result * 31 + Kotlin.hashCode(this.price) | 0;
    result = result * 31 + Kotlin.hashCode(this.image) | 0;
    result = result * 31 + Kotlin.hashCode(this.button) | 0;
    return result;
  };
  Card.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.container, other.container) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.description, other.description) && Kotlin.equals(this.price, other.price) && Kotlin.equals(this.image, other.image) && Kotlin.equals(this.button, other.button)))));
  };
  function CardBuilder() {
    CardBuilder$Companion_getInstance();
  }
  CardBuilder.prototype.div_0 = function () {
    var tmp$;
    return Kotlin.isType(tmp$ = document.createElement(CardBuilder$Companion_getInstance()._DIV), HTMLDivElement) ? tmp$ : throwCCE();
  };
  CardBuilder.prototype.img_0 = function () {
    var tmp$;
    return Kotlin.isType(tmp$ = document.createElement(CardBuilder$Companion_getInstance()._IMG), HTMLImageElement) ? tmp$ : throwCCE();
  };
  CardBuilder.prototype.button_0 = function () {
    var tmp$;
    return Kotlin.isType(tmp$ = document.createElement(CardBuilder$Companion_getInstance()._BUTTON), HTMLButtonElement) ? tmp$ : throwCCE();
  };
  CardBuilder.prototype.build_18i6h$ = function (book) {
    var card = new Card(this.div_0(), this.div_0(), this.div_0(), this.div_0(), this.img_0(), this.button_0());
    this.bind_0(book, card.image, card.title, card.price, card.description, card.button);
    this.applyStyle_0(card.container, card.image, card.title, card.price, card.description, card.button);
    card.container.append(card.image, card.title, card.description, card.price, card.button);
    return card.container;
  };
  function CardBuilder$bind$lambda$lambda(closure$book) {
    return function (it) {
      window.open(closure$book.url);
      return Unit;
    };
  }
  CardBuilder.prototype.bind_0 = function (book, image, title, price, description, button) {
    image.src = book.coverUrl;
    title.innerHTML = book.title;
    price.innerHTML = book.price;
    description.innerHTML = book.description;
    button.innerHTML = CardBuilder$Companion_getInstance().BUTTON_TEXT;
    button.addEventListener(CLICK, CardBuilder$bind$lambda$lambda(book));
  };
  CardBuilder.prototype.applyStyle_0 = function (container, image, title, price, description, button) {
    addClass(container, [CardBuilder$Companion_getInstance().CARD, CardBuilder$Companion_getInstance().CARD_SHADOW]);
    addClass(image, [CardBuilder$Companion_getInstance().COVER_IMAGE]);
    addClass(title, [CardBuilder$Companion_getInstance().TITLE, CardBuilder$Companion_getInstance().FLOAT_LEFT]);
    addClass(description, [CardBuilder$Companion_getInstance().DESCRIPTION, CardBuilder$Companion_getInstance().FLOAT_LEFT]);
    addClass(price, [CardBuilder$Companion_getInstance().PRICE, CardBuilder$Companion_getInstance().FLOAT_LEFT]);
    addClass(button, [CardBuilder$Companion_getInstance().DETAILS, CardBuilder$Companion_getInstance().RIPPLE, CardBuilder$Companion_getInstance().FLOAT_RIGHT]);
  };
  function CardBuilder$Companion() {
    CardBuilder$Companion_instance = this;
    this.BUTTON_TEXT = 'view details';
    this.FLOAT_LEFT = 'float-left';
    this.FLOAT_RIGHT = 'float-right';
    this.CARD = 'card';
    this.CARD_SHADOW = 'card-shadow';
    this.COVER_IMAGE = 'cover-image';
    this.TITLE = 'text-title';
    this.DESCRIPTION = 'text-description';
    this.PRICE = 'text-price';
    this.DETAILS = 'view-details';
    this.RIPPLE = 'ripple';
    this._DIV = 'div';
    this._IMG = 'img';
    this._BUTTON = 'button';
  }
  CardBuilder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CardBuilder$Companion_instance = null;
  function CardBuilder$Companion_getInstance() {
    if (CardBuilder$Companion_instance === null) {
      new CardBuilder$Companion();
    }
    return CardBuilder$Companion_instance;
  }
  CardBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CardBuilder',
    interfaces: []
  };
  function main(args) {
    (new BookStorePage(new BookStorePresenter())).show();
  }
  var API_URL;
  var CLICK;
  _.Book = Book;
  BookStoreContract.View = BookStoreContract$View;
  BookStoreContract.Presenter = BookStoreContract$Presenter;
  _.BookStoreContract = BookStoreContract;
  _.BookStorePage = BookStorePage;
  Object.defineProperty(BookStorePresenter, 'Companion', {
    get: BookStorePresenter$Companion_getInstance
  });
  _.BookStorePresenter = BookStorePresenter;
  _.Card = Card;
  Object.defineProperty(CardBuilder, 'Companion', {
    get: CardBuilder$Companion_getInstance
  });
  _.CardBuilder = CardBuilder;
  _.main_kand9s$ = main;
  Object.defineProperty(_, 'API_URL', {
    get: function () {
      return API_URL;
    }
  });
  Object.defineProperty(_, 'CLICK', {
    get: function () {
      return CLICK;
    }
  });
  var tmp$;
  API_URL = typeof (tmp$ = getApiUrl()) === 'string' ? tmp$ : throwCCE();
  CLICK = 'click';
  main([]);
  Kotlin.defineModule('Books_RayWenderlich', _);
  return _;
}(typeof Books_RayWenderlich === 'undefined' ? {} : Books_RayWenderlich, kotlin);
