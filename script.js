const API_KEY = "4b5b8bff36991cf98123acd013f7ae4f";
const BASE_URL = "https://api.themoviedb.org/3";

const moviesDiv = document.getElementById("Movies");

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
    movieElement.classList.add("movie", "p-2");
    movieElement.innerHTML = `
    <div class="mt-2 border rounded shadow"> 
    <a href="https://www.themoviedb.org/movie/${movie.id}" target="_blank">
    <img class="shadow rounded" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
    </a>
      <div class="p-2"> 
      <h3>${movie.title}</h3>
      <p>Release Date: ${movie.release_date}</p>
      <p>Rating: ${movie.vote_average}</p>
      </div>
    </div>
    `;
    moviesDiv.appendChild(movieElement);
  }
}

fetchMovies();
