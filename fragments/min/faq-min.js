$(document).ready(function(){var c=!1;$("#accordion h3").click(function(c){$(this).closest("div").prependTo("#accordion")}),$("#accordion").accordion({header:"> div > h3"}).sortable({axis:"y",handle:"h3"})});