import { createMarkUp } from './markup/createmarkup';
import { searchMovies } from './apisreq/getserchquery';
import { getGenresPopfilms } from './apisreq/genresandtrends';
import { renderButtonsPag } from './paginaton/pagination';
import { spiner } from './paginaton/spiner';
//----------------------------------------------------------------//

getGenresPopfilms()
  .then(data => {
    console.log(data);
    createMarkUp(data.results);
    renderButtonsPag(1, data.total_pages);
  })
  .catch(er => console.log(er))
  .finally(() => {
    spiner.stop();
  });

searchMovies('batman', 1).then(data => console.log(data));