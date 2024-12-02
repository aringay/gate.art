function showOverlay(id) {
  document.getElementById(`${id}-overlay`).style.display = "flex";
}

function hideOverlay() {
  document.querySelectorAll(".overlay").forEach((overlay) => {
    overlay.style.display = "none";
  });
}
