$(".thumbnails img").click((e) => {
  const src = $(e.target).attr("src");
  $("#main-image").attr("src", src);
});
