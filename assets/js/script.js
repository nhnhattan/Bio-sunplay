$(document).ready(function () {
  $("#openShare").click(function () {
    $(".overlay-open-share").show();
  });

  $("#copyButton").click(function () {
    const copyInput = $("#copyInput");
    copyInput.select();
    document.execCommand("copy"); // Copies the text
    $("#copyButton").text("Copied");
  });

  $("#close-modal-btn").click(function () {
    $(".overlay-open-share").hide();
  });

  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  // Load the image
  const img = new Image();
  img.crossOrigin = "anonymous"; // This is important for CORS
  img.src =
    "https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"; // Example image URL (replace with your image URL)
  img.onload = function () {
    // Draw the image on the canvas
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  };

  $("#download-qr").click(function () {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png"); // Specify the image format
    link.download = "canvas-image.png"; // Set the name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

  $(window).click(function (event) {
    if ($(event.target).is(".overlay-open-share")) {
      $(".overlay-open-share").hide();
    }
  });
});
