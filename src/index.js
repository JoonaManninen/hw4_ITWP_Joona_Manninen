const searchForm = document.getElementById("search-form");
const showResults = document.getElementById("show-results");

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const inputValue = document.getElementById("input-show").value;
  const apiUrl = `https://api.tvmaze.com/search/shows?q=${inputValue}`;

  try {
    const response = await fetch(apiUrl);
    const shows = await response.json();
    showResults.innerHTML = "";

    shows.forEach((show) => {
      const { image, name, summary } = show.show;
      const showTemplate = `
                <div class="show-data">
                    <img src="${image ? image.medium : ""}">
                    <div class="show-info">
                        <h1>${name}</h1>
                        ${summary}
                    </div>
                </div>
            `;
      showResults.innerHTML += showTemplate;
    });
  } catch (error) {
    console.error(error);
  }
});
