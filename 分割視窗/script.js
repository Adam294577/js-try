document.addEventListener("DOMContentLoaded", function () {
  const divider = document.getElementById("divider");
  let isDragging = false;

  divider.addEventListener("mousedown", function (e) {
    isDragging = true;
  });

  document.addEventListener("mousemove", function (e) {
    if (isDragging) {
      const container = document.querySelector(".container");
      const topPane = document.querySelector(".top-pane");
      const bottomPane = document.querySelector(".bottom-pane");

      // Calculate the new height for the top pane
      const offsetTop = container.offsetTop;
      const newTopHeight = e.clientY - offsetTop;

      // Set the height of the top pane and adjust the bottom pane's height
      topPane.style.height = `${newTopHeight}px`;
      bottomPane.style.height = `calc(100% - ${newTopHeight}px - 10px)`;
    }
  });

  document.addEventListener("mouseup", function (e) {
    isDragging = false;
  });
});
