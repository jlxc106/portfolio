$(document).ready(handleJSON);

function handleJSON() {
	$.getJSON("js/projects.json", function(result) {
		var projectTotal = result.projects.length;
		result.projects.map(function(project, index) {
			//make card
			var cardvar = $("<div>")
				.addClass("card project-card")
                .appendTo(".project-card-container");
            //card title
			$("<h2>")
				.html(project.name)
				.appendTo(
					$("<div>")
						.addClass("card-title")
						.appendTo(cardvar)
                );
            var cardBody = $("<div>").addClass("card-body").appendTo(cardvar);

            $("<p>").html(project.languages).addClass("card-languages").appendTo(cardBody);
            $("<p>").html(project.description).addClass("card-description").appendTo(cardBody);
            var cardLinks = $("<div>").addClass("card-links").appendTo(cardBody);

            $("<div>").addClass("card-contain-github").append($("<a></a>").attr("href", project.github).html("<i class='fa fa-github aria-hidden='true'>github</i>")).appendTo(cardLinks);
            if(project.live_page){
                $("<div>").addClass("card-contain-live").append($("<a></a>").attr("href", project.live_page).html("<i class='fa fa-paper-plane-o aria-hidden='true'>live page</i>")).appendTo(cardLinks);
            }
		});
	});
}


