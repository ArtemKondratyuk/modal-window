(() => {
    const refs = {
      openCardBtn: document.querySelector("[data-card-open]"),
      closeCardBtn: document.querySelector("[data-card-close]"),
      card: document.querySelector("[data-card]"),
    };
  
    refs.openCardBtn.addEventListener("click", toggleCard);
    refs.closeCardBtn.addEventListener("click", toggleCard);
        function toggleCard() {
      refs.card.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();

  export function fetchBook(bookId) {
    return fetch(
      `https://books-backend.p.goit.global/books/search?book_ids=${bookId}`,
      {
        headers: {
          'x-api-key':
            'live_8iFJ0bMrHFUFWpFRitEuYrSXz8ohqNsUgTO4QDa1A0a93kKesyd5PokSqrb2ntrV',
        },
      }
    )
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch book by books');
        }
        return response.json();
      })
      .then(data => {
      const book = data[0];
      renderBookCard(book);
      return book;
  })
  .catch(error => {
      console.error(error);
      throw error;
  });
  }
  
  function renderBookCard(book) {
    const backdrop = document.querySelector('[data-card]');
    backdrop.classList.remove('is-hidden');
  
    const bookTitle = document.querySelector('.book-title');
    bookTitle.textContent = book.title;
  
    const authorName = document.querySelector('.author');
    authorName.textContent = book.author;
  
    const bookDescription = document.querySelector('.info-book');
    bookDescription.textContent = book.description;
    
    const bookShopImages = document.querySelectorAll('.book-shop img');
    bookShopImages.forEach((image, index) => {
      image.src = book.shopLogos[index];
    });
  
  }
  
  
  
  
  
 