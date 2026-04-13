const API_KEY = "4b5b8bff36991cf98123acd013f7ae4f";
const BASE_URL = "https://api.themoviedb.org/3";

const moviesDiv = document.getElementById("moviesRow");

async function fetchMovies() {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
    );
    const data = await response.json();
    displayMovies(data.results);
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}

function displayMovies(movies) {
  moviesDiv.innerHTML = "";
  for (const movie of movies) {
    const movieElement = document.createElement("div");
    movieElement.classList.add(
      "col-12",
      "col-sm-6",
      "col-md-4",
      "col-lg-3",
      "mb-4"
    );
    movieElement.innerHTML = `
    <div class="movie-card mt-2 border rounded shadow h-100 d-flex flex-column"> 
      <a href="https://www.themoviedb.org/movie/${movie.id}" target="_blank">
        <img class="img-fluid shadow rounded" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
      </a>
      <div class="p-2 flex-grow-1 d-flex flex-column justify-content-between"> 
        <div>
          <h5>${movie.title}</h5>
          <p class="mb-1">Release Date: ${movie.release_date}</p>
          <p class="mb-2">Rating: ${movie.vote_average}</p>
        </div>
      </div>
    </div>
    `;
    moviesDiv.appendChild(movieElement);
  }
}

fetchMovies();
