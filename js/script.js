function getYear(year) {
	if(year) {
		return year.match(/[\d]{4}/); // This is regex (https://en.wikipedia.org/wiki/Regular_expression)
	}
}

function jump(){
    window.location.href = "gallary.html";
}



function iterateRecords(data) {
	console.log(data);
	$.each(data.result.records, function(recordKey, recordValue) {

		var recordTitle = recordValue["title"];
		var recordYear = getYear(recordValue["title"]);
		var recordImage = recordValue["500_pixel"];
		var recordImageLarge = recordValue["1000_pixel"];
		var recordDescription = recordValue["decsription"];
		var recordSubject = recordValue["subject"];
        var keywordflag = recordSubject.search(/(World War)+/);
        var portraitflag = recordSubject.search(/(Portraits)+/) + recordSubject.search(/(portrait)+/)

		if(recordTitle || recordYear || (recordImage && recordImageLarge) || recordDescription) {

			if( keywordflag != -1 && portraitflag ==-2 && recordYear <= 1918 && recordYear >=1914) { // Only get records from the 19th century

				$("#records").append(
					$('<article class="record">').append(
						$("<a>").attr("href", recordImageLarge).addClass("strip").attr("data-strip-caption", recordDescription).append(
                            $('<img>').attr("src", recordImage),
                            $('<p id ="subject">').text(recordSubject).hide()
						),
					)
				);
			}
		}
		setTimeout(function () {
			$("body").addClass("loaded");
        }, 20);
        
	});

}

$(document).ready(function(){
    var mode;
    var character;
    $("#character-selection").hide();
    $("#vehicle-selection").hide();
    $("#ready-selection").hide();
    $("#game-board").hide();
    $('#character2Instance').hide();
    $('.nextMission').hide();
    $('#resultsimage_1').hide();
    $('#resultsimage_2').hide();
	$('#congratsTitle').hide();
    $('#congratsTitleNot').hide();
    $('#medalTask1').hide();
    $('#nomedalTask1').hide();
    $('#mission-selection').hide();
    $('#character3Instance').hide();
    $('.nextMission2').hide();
    $('#resultsimage_1_2').hide();
    $('#resultsimage_2_2').hide();
	$('#congratsTitle2').hide();
    $('#congratsTitleNot2').hide();
    $('#medalTask2').hide();
    $('#nomedalTask2').hide();
    $('#mission-selection2').hide();
    $('.nextMission3').hide();
    $('#resultsimage_1_3').hide();
    $('#resultsimage_2_3').hide();
	$('#congratsTitle3').hide();
    $('#congratsTitleNot3').hide();
    $('#medalTask3').hide();
    $('#nomedalTask3').hide();
    $('#mission-selection3').hide();
    //element
    $('#weapons').hide();
    $('#vehicle').hide();

    $('.weapons-tag').click(function(){
        $('#vehicle').hide();
        $('#battle').hide();
        $('#weapons').show();
        $('.weapons-tag').css("background-color","skyblue");
        $('.vehicle-tag').css("background-color","wheat");
        $('.battle-tag').css("background-color","wheat");
        
    })
    
    $('.battle-tag').click(function(){
        $('#vehicle').hide();
        $('#weapons').hide();
        $('#battle').show();
        $('.battle-tag').css("background-color","skyblue");
        $('.weapons-tag').css("background-color","wheat");
        $('.vehicle-tag').css("background-color","wheat");
    })

    $('.vehicle-tag').click(function(){
        $('#weapons').hide();
        $('#battle').hide();
        $('#vehicle').show();
        $('.vehicle-tag').css("background-color","skyblue");
        $('.weapons-tag').css("background-color","wheat");
        $('.battle-tag').css("background-color","wheat");
    })
    
    

    $("#commander-button").click(function(){
        $("#mode-selection").hide();
        $("#ready-selection").show();
        $("#mode-name").text("commander");
        $("#soldier-text").hide();
        $("#commander-text").show();
        mode = "commander";
        console.log("mode is" + mode)
    })

    $("#recruit-button").click(function(){
        $("#mode-selection").hide();
        $("#character-selection").show();
        $("#mode-name").text("recruit");
        $("#commander-text").hide();
        $("#soldier-text").show();
        mode = "recruit";
        console.log("mode is" + mode)
    })
//character
    $("#character-button-1").click(function(){
        $("#character-selection").hide();
        $("#ready-selection").show();
        character = "character 1";
        $("#soldier-name").text(character);
    })

    $("#character-button-2").click(function(){
        $("#character-selection").hide();
        $("#ready-selection").show();
        character = "character 2";
        $("#soldier-name").text(character);
    })

    $("#character-button-3").click(function(){
        $("#character-selection").hide();
        $("#ready-selection").show();
        character = "character 3";
        $("#soldier-name").text(character);
    })

    $("#character-selection #back-to").click(function(){
        $("#character-selection").hide();
        $("#mode-selection").show();
    })
//vehicle

//ready
    $("#back").click(function(){
        $("#ready-selection").hide();
        $("#mode-selection").show();
    })

//begin interface;
   $("#go").click(function(){
       console.log("recruit-mode")
       if(mode == "recruit"){
           jump();
       }else{
           $("#ready-selection").hide();
           $("#game-board").show();

       }
   })

   
//Task Screen Starts
    $(".checktrigger").click(function(){
        $('.missionstart1').fadeIn(1000);
    });

    $('.popupCloseButton').click(function(){
        $('.missionstart1').hide();
    });

//Mission Screen Starts for Mission 1
    $('#missionStartButton').click(function(){
        $('.missionstart1').hide();
        $('.mission_1').show();
    });

//MissTaskion 1 correct response
$('.rightAnswerMedal').click(function question(){
    document.getElementById("results_1").innerHTML;
    $('.rightAnswerMedal').hide();
    $('.wrongAnswerMedal').hide();
    $('.medalsLegend').hide();
    $('#missionTitle').hide();
    $('#instructions_1').hide();
    $('#congratsTitle').show();
    $('#resultsimage_1').show();
    $('.nextMission').show();
    $('#medalTask1').show();
});

//Task 1 incorrect response
$('.wrongAnswerMedal').click(function question(){
    document.getElementById("results_1").innerHTML;
    $('.rightAnswerMedal').hide();
    $('.wrongAnswerMedal').hide();
    $('.medalsLegend').hide();
    $('#missionTitle').hide();
    $('#instructions_1').hide();
    $('#congratsTitleNot').show();
    $('#resultsimage_2').show();
    $('.nextMission').show();
    $('#nomedalTask1').show();
});

//Move to Task 2
$('.nextMission').click(function(){
$('.mission_1').hide();
$('#character2Instance').show();
$('#characterInstance').hide();
});


//Task 2 Screen Starts
$(".checktrigger-2").click(function(){
$('.missionstart2').fadeIn(1000);
});

$('.popupCloseButton2').click(function(){
$('.missionstart2').hide();
});

//Task Screen Starts for Task 2
$('#missionStartButton2').click(function(){
$('.missionstart2').hide();
$('.mission_2').show();
});

//MissTaskion 2 correct response
$('.rightAnswerMedal2').click(function question(){
document.getElementById("results_2").innerHTML;
$('.rightAnswerMedal2').hide();
$('.wrongAnswerMedal2').hide();
$('.medalsLegend2').hide();
$('#missionTitle2').hide();
$('#instructions_2').hide();
$('#congratsTitle2').show();
$('#resultsimage_1_2').show();
$('.nextMission2').show();
$('#medalTask2').show();
});

//Task 2 incorrect response
$('.wrongAnswerMedal2').click(function question(){
document.getElementById("results_2").innerHTML;
$('.rightAnswerMedal2').hide();
$('.wrongAnswerMedal2').hide();
$('.medalsLegend2').hide();
$('#missionTitle2').hide();
$('#instructions_2').hide();
$('#congratsTitleNot2').show();
$('#resultsimage_2_2').show();
$('.nextMission2').show();
$('#nomedalTask2').show();
});

//Move to Task 3
$('.nextMission2').click(function(){
$('.mission_2').hide();
$('#character3Instance').show();
$('#character2Instance').hide();
});


//Task 3 Screen Starts
$(".checktrigger-3").click(function(){
$('.missionstart3').fadeIn(1000);
});

$('.popupCloseButton3').click(function(){
$('.missionstart3').hide();
});

//Task Screen Starts for Task 3
$('#missionStartButton3').click(function(){
$('.missionstart3').hide();
$('.mission_3').show();
});

//MissTaskion 3 correct response
$('.rightAnswerMedal3').click(function question(){
document.getElementById("results_3").innerHTML;
$('.rightAnswerMedal3').hide();
$('.wrongAnswerMedal3').hide();
$('.medalsLegend3').hide();
$('#missionTitle3').hide();
$('#instructions_3').hide();
$('#congratsTitle3').show();
$('#resultsimage_1_3').show();
$('.nextMission3').show();
$('#medalTask3').show();
});

//Task 3 incorrect response
$('.wrongAnswerMedal3').click(function question(){
document.getElementById("results_3").innerHTML;
$('.rightAnswerMedal3').hide();
$('.wrongAnswerMedal3').hide();
$('.medalsLegend3').hide();
$('#missionTitle3').hide();
$('#instructions_3').hide();
$('#congratsTitleNot3').show();
$('#resultsimage_2_3').show();
$('.nextMission3').show();
$('#nomedalTask3').show();
});

//Move to endGame (NEEDS TO TAKE THEM TO MISSION REPORT PAGE)
$('.nextMission3').click(function(){
$('.mission_3').hide();
});
    
	var slqData = JSON.parse(localStorage.getItem("slqData"));
	if (slqData) {
		console.log("Source: localStorage");
        iterateRecords(slqData);
	} else {
		console.log("Source: ajax call");
		var data = {
			resource_id: "cf4d43d8-2aad-4512-99e6-f6be2bf24466",
			limit: 10000
        }
		$.ajax({
			url: "https://www.data.qld.gov.au/api/3/action/datastore_search",
			data: data,
			dataType: "jsonp", // We use "jsonp" to ensure AJAX works correctly locally (otherwise XSS).
			cache: true,
			success: function(data) {
				localStorage.setItem("slqData", JSON.stringify(data));
				iterateRecords(data);
			}
		});

    }

    $('.record').hide();
    

    $("#filter-count strong").text($(".record:visible").length);

    $("#filter-text").keydown(function(e){
        if(e.keyCode ==13){
        var searchTerm = $("#filter-text").val();
        console.log(searchTerm);
        $('.record').hide();
        $(".record:contains('" + searchTerm + "')").show();
        $("#filter-count strong").text($(".record:visible").length);
        $("#filter").attr('id','filter-after');
        event.preventDefault();     
    }
});

    $("#filter-text").keydown(function(e){
        if(e.keyCode ==13){
        var searchTerm = $("#filter-text").val();
        console.log(searchTerm);
        $('.record').hide();
        $(".record:contains('" + searchTerm + "')").show();
        $("#filter-count strong").text($(".record:visible").length);
        event.preventDefault();     
    }
    });

    $("#filter a").click(function(){
        var searchTerm = $("#filter-text").val();
        console.log(searchTerm);
        $('.record').hide();
        $(".record:contains('" + searchTerm + "')").show();
        $("#filter-count strong").text($(".record:visible").length);
        $("#filter").attr('id','filter-after');
        event.preventDefault();    
    })

    
    $("#filter-after a").click(function(){
        var searchTerm = $("#filter-text").val();
        console.log(searchTerm);
        $('.record').hide();xx
        $(".record:contains('" + searchTerm + "')").show();
        $("#filter-count strong").text($(".record:visible").length);
        event.preventDefault();    
    })
  
})
