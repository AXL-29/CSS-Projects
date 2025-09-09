const searchBtn = document.querySelector('.search-button');
const searchInput = document.querySelector('.search.input');
const searchIcon = searchBtn.querySelector('i');

searchBtn.addEventListener('click', () => {
  searchInput.classList.toggle('active');
  searchBtn.classList.toggle('active');

  if (searchInput.classList.contains('active')) {
    searchInput.focus();
    searchIcon.classList.remove('fa-search');
    searchIcon.classList.add('fa-times'); // switch to close icon
  } else {
    searchInput.value = ""; // optional: clear text when closing
    searchIcon.classList.remove('fa-times');
    searchIcon.classList.add('fa-search'); // back to search icon
  }
});
