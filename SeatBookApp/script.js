if (!JSON.parse(localStorage.getItem("movies"))) {
  localStorage.setItem(
    "movies",
    JSON.stringify([
      {
        id: 1,
        name: "Game of Thrones",
        time: ["24Jul, 2023 18:00", "24Jul, 2023 16:00", "24Jul, 2023 14:00"],
        seatMap: [
          [
            [1, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          ],
          [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          ],
          [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          ],
        ],
      },
      {
        id: 2,
        name: "Breaking Bad",
        time: ["22Jul, 2023 18:00", "22Jul, 2023 16:00", "22Jul, 2023 14:00"],
        seatMap: [
          [
            [1, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          ],
          [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          ],
          [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          ],
        ],
      },
      {
        id: 3,
        name: "Better call Saul",
        time: ["20Jul, 2023 18:00", "20Jul, 2023 16:00", "20Jul, 2023 14:00"],
        seatMap: [
          [
            [1, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          ],
          [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          ],
          [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          ],
        ],
      },
    ])
  );
}
const movies = JSON.parse(localStorage.getItem("movies"));
let selectedMovie, selectedTime;

const seatNum = document.getElementById("seatNum");
const total = document.getElementById("total");
const btn = document.querySelector(".btn");
const movieSelectBox = document.getElementById("movie");
const movieOptions = document.querySelectorAll("#movie option");
const timeSelectBox = document.getElementById("time");
const seatMapDiv = document.querySelector(".seatMap");

updateResult();

seatMapDiv.innerHTML = "<p class='emptyMsg'>Please select movie first.</p>";
movies.forEach((movie) => {
  movieSelectBox.innerHTML += `<option value='${movie.id}' name='${movie.name}'>${movie.name}</option>`;
});

movieSelectBox.addEventListener("change", (e) => {
  timeSelectBox.innerHTML = "<option disabled selected>Time</option>";
  seatMapDiv.innerHTML =
    "<p class='emptyMsg'>Please select time of movie first.</p>";
  selectedMovie = e.target.value;
  movies.forEach((movie) => {
    if (movie.id === Number(e.target.value)) {
      movie.time.forEach((time, index) => {
        timeSelectBox.innerHTML += `<option value='${index}' name='${time}'>${time}</option>`;
      });
    }
  });
  timeSelectBox.addEventListener("change", (e) => {
    selectedTime = e.target.value;
    seatMapDiv.innerHTML = "";
    fetchSeatMap();
  });
});

btn.addEventListener("click", () => {
  const seats = document.querySelectorAll(".seat.selected");
  let seatCount = 0;

  movies.forEach(({ id, name, seatMap }) => {
    if (id === Number(selectedMovie)) {
      seatMap[selectedTime].forEach((row, i) => {
        row.forEach((column, j) => {
          seats.forEach((item) => {
            if (seatCount === Number(item.getAttribute("id"))) {
              item.classList.remove("selected");
              item.classList.add("booked");
              row[j] = 1;
            }
          });
          seatCount++;
        });
      });
    }
  });
  addToLocal(movies);
  updateResult();
});

function addToLocal(movieList) {
  localStorage.setItem("movies", JSON.stringify(movieList));
}

function updateResult() {
  const seats = document.querySelectorAll(".seat.selected");
  const seatCount = seats.length;
  seatNum.innerText = seatCount;
  total.innerText = seatCount * 25 + "$";
}

function fetchSeatMap() {
  let seatCount = 0;
  let seatRow, seatCol;
  movies.forEach(({ id, seatMap }) => {
    if (id === Number(selectedMovie)) {
      seatMap[selectedTime].forEach((row, i) => {
        seatCol = null;
        seatRow = null;
        seatRow = document.createElement("div");
        seatRow.className = `row row-${i}`;
        let colCounter = 0;
        row.forEach((column, j) => {
          if (j % 4 === 0) {
            if (j !== 0) seatRow.appendChild(seatCol);
            seatCol = document.createElement("div");
            seatCol.className = `column col-${colCounter++}`;
          }
          let seat = document.createElement("div");
          if (column === 1) {
            seat.className = `seat booked`;
          } else {
            seat.className = `seat`;
          }
          seat.setAttribute("id", seatCount++);
          seatCol.appendChild(seat);
        });
        seatRow.appendChild(seatCol);
        seatMapDiv.appendChild(seatRow);
      });
    }
  });
  seatAddListener();
}

function seatAddListener() {
  let allSeats = document.querySelectorAll(".seat:not(.booked)");
  allSeats.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("selected");
      updateResult();
    });
  });
}
