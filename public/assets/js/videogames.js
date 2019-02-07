$("#gamingPlatform").val("");

$("#submit").on("click", function(event) {
  event.preventDefault();
  var newVideogame = {
    console: $("#gamingPlatform").val(),
    title: $("#videogame")
      .val()
      .trim()
      .toString()
  };

  if (
    $("#videogame")
      .val()
      .trim() !== "" &&
    $("#gamingPlatform").val() !== null
  ) {
    $.ajax("/api/new", {
      method: "POST",
      data: newVideogame
    }).then(function() {
      location.reload();
    });
  } else {
    Swal.fire({
      type: "error",
      title: "Oops...",
      text: "Please fill in all the required fields."
    });
  }
});

$(".transfer").on("click", function(event) {
  var id = $(this).data("id");
  var completed = $(this).data("completed");

  var isCompleted = {
    completed: completed
  };

  $.ajax("/api/new/" + id, {
    type: "PUT",
    data: isCompleted
  }).then(function() {
    location.reload();
  });
});

$(".delete").on("click", function(event) {
  var id = $(this).data("id");

  $.ajax("/api/new/" + id, {
    type: "DELETE"
  }).then(function() {
    location.reload();
  });
});

$(".fa-circle")
  .mouseenter(function() {
    $(this)
      .removeClass("fa-circle")
      .addClass("fa-check-circle")
      .addClass("circle");
  })
  .mouseleave(function() {
    $(this)
      .removeClass("fa-check-circle")
      .removeClass("circle")
      .addClass("fa-circle");
  });

$(".delete")
  .mouseenter(function() {
    $(this)
      .removeClass("fa-check-circle")
      .addClass("fa-times-circle");
  })
  .mouseleave(function() {
    $(this)
      .removeClass("fa-times-circle")
      .addClass("fa-check-circle");
  });
