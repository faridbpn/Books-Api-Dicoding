const apiUrl = 'http://localhost:9000/books';

// Fungsi untuk menambah buku
document.getElementById('addBookForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const author = document.getElementById('author').value;
  const publisher = document.getElementById('publisher').value;
  const year = document.getElementById('year').value;
  const pageCount = document.getElementById('pageCount').value;
  const readPage = document.getElementById('readPage').value;
  const reading = document.getElementById('reading').checked;

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name, author, publisher, year, pageCount, readPage, reading
    }),
  });

  const result = await response.json();
  document.getElementById('addBookResult').textContent = result.message;
});

// Fungsi untuk mengambil semua buku
document.getElementById('getBooks').addEventListener('click', async () => {
  const response = await fetch(apiUrl);
  const result = await response.json();
  const booksList = document.getElementById('books');
  
  booksList.innerHTML = '';
  result.data.books.forEach(book => {
    const li = document.createElement('li');
    li.textContent = `${book.name} (ID: ${book.id}) - ${book.publisher}`;
    booksList.appendChild(li);
  });
});

// Fungsi untuk memperbarui buku
document.getElementById('updateBookForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const bookId = document.getElementById('bookId').value;
  const updatedName = document.getElementById('updatedName').value;
  const updatedAuthor = document.getElementById('updatedAuthor').value;

  const response = await fetch(`${apiUrl}/${bookId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: updatedName,
      author: updatedAuthor,
    }),
  });

  const result = await response.json();
  document.getElementById('updateBookResult').textContent = result.message;
});

// Fungsi untuk menghapus buku
document.getElementById('deleteBookForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const bookId = document.getElementById('deleteBookId').value;

  const response = await fetch(`${apiUrl}/${bookId}`, {
    method: 'DELETE',
  });

  const result = await response.json();
  document.getElementById('deleteBookResult').textContent = result.message;
});
