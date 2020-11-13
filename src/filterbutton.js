//---------------------------------Filter Buttons Starts----------------------------------------------------------//
const filterBtns = document.querySelectorAll('.filter-btn');

function displayMenuButtons() {
  const categories = playlistIds.reduce(
    function (values, item) {
      if (!values.includes(item.playlistId)) {
        values.push(item.playlistId);
      }
      return values;
    },
    [""]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
		</button>`;	
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const menuCategory = playlistIds.filter(function (playlistId) {
        if (playlistId === selectedId) {
		  return playlistId;
		}
		if (category === "all") {
        mainVid(menu);
      } else {
        mainVid(menuCategory);
      }
      });
    });s
  });
}




//-----------------Filter Buttons ends--------------------------------------------------

}
