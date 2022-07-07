import { searchMovies } from '../apisreq/getserchquery.js';
import { createMarkUp } from '../markup/createmarkup';
import { renderButtonsPag, onClickPagBtn } from '../paginaton/pagination';
import { showModal } from '../modal/modal';
import { spiner } from '../paginaton/spiner';

//-------------------------------------------------------//
const pagContainer = document.querySelector('.js-pagination');
const formSearch = document.querySelector('.page-header__form');
const gallery = document.querySelector('.gallery');
const popup = document.querySelector('.search');
let query;
let currentPage;
function SeachByQuery() {
  formSearch.addEventListener('submit', onSubmit);
}

function onSubmit(evt) {
  evt.preventDefault();
  pagContainer.removeEventListener('click', onClickPagBtn);
  query = evt.target.elements.text.value.trim();

  if (query === '') {
    popup.textContent =
      'Search result not successful. Enter the correct movie name and try again';
    setTimeout(() => {
      popup.textContent = '';
    }, 2000);

    return;
  }

  searchMovies(query, 1).then(searchData => {
    console.log(searchData);
    if (searchData.total_pages === 0) {
      popup.textContent =
        'Search result not successful. Enter the correct movie name and try again';
      setTimeout(() => {
        popup.textContent = '';
      }, 2000);
      return;
    }
    createMarkUp(searchData.results);
    renderButtonsPag(1, searchData.total_pages);

    pagContainer.addEventListener('click', handlerOnPag);
    showModal(searchData);
  });
  // evt.target.reset();
}

function handlerOnPag(event) {
  if (
    event.target.nodeName !== 'BUTTON' ||
    event.target.textContent === '...'
  ) {
    return;
  }

  if (event.target.classList.contains('previos')) {
    currentPage = Number(currentPage) - 1;
  } else if (event.target.classList.contains('next')) {
    currentPage = Number(currentPage) + 1;
  } else {
    currentPage = Number(event.target.textContent);
  }
  /// changes

  searchMovies(query, currentPage)
    .then(d => {
      createMarkUp(d.results);
      renderButtonsPag(currentPage, d.total_pages);
      showModal(d);
    })
    .catch(e => console.log(e))
    .finally(() => {});
}

export { SeachByQuery };