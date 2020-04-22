function loadRepos() {
    $("#repos").empty();
    let username = $("#username").val();
    $.get("https://api.github.com/users/" + username + "/repos")
        .then(function(data) {
            for (let repo of data) {
                let link = $("<a>");
                link.text(repo.full_name);
                link.attr("href", repo.html_url);
                link.attr("target", "_blank");
                let li = $("<li>").append(link);
                $("#repos").append(li);
            }
        })
        .catch(function() {
            $("#repos").append($("<li>Error</li>"));
        });
}


// .social width function 
$(document).ready(function() {
    $('.zoom').hover(
        function() {
            $(this).css({ "width": "75px" });
        },
        function() {
            $(this).css({ "width": "42px" });
        }
    );
});
// .social height function
$(document).ready(function() {
    $('.zoom').hover(function() {
            $(this).css({ "height": "75px" });
        },
        function() {
            $(this).css({ "height": "42px" });
        }
    );
});