$("#submit").on("click", function(event) {
  event.preventDefault();

  console.log($("#gamingPlatform").val());

  var newVideogame = {
    console: $("#gamingPlatform").val(),
    title: $("#videogame")
      .val()
      .trim()
      .toString()
  };

  $.ajax("/api/new", {
    method: "POST",
    data: newVideogame
  }).then(function() {
    location.reload();
  });
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
