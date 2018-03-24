$(document).ready(() => {
    $("button").on("click", () => {
        const image = $("input#pic").val();
        $("p").append('<img src="' + image + '">');
    });
});
