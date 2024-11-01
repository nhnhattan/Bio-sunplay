$(document).ready(function () {
  $("#openShare").click(function () {
    $(".overlay-open-share").fadeIn();
    // $("body").css({
    //   overflow: "hidden",
    //   position: "fixed",
    //   width: "100%",
    // });
  });

  $("#copyButton").click(function () {
    const copyInput = $("#copyInput");
    copyInput.select();
    document.execCommand("copy");
    $("#copyButton").text("Copied");
  });

  $("#close-modal-btn").click(function () {
    $(".overlay-open-share").hide();
    // $("body").css({
    //   overflow: "auto",
    //   position: "static",
    // });
  });

  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.src =
    "https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg";
  img.onload = function () {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  };

  $("#download-qr").click(function () {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "qr.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

  $(window).click(function (event) {
    if ($(event.target).is(".overlay-open-share")) {
      $(".overlay-open-share").hide();
      // $("body").css({
      //   overflow: "auto",
      //   position: "static",
      // });
    }
  });
});
