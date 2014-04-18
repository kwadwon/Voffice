/*
Authored by Kwadwo Nyarko
*/

$(document).ready(function(){

	//sections
	var over_sect = $("#over_sect");
	var os_sect = $("#os_sect");
	var app_sect = $("#app_sect");
	var sum_sect = $("#sum_sect");

	//side nav
	var side_over_link = $("#side_over_link");
	var side_os_link = $("#side_os_link");
	var side_app_link = $("#side_app_link");
	var side_sum_link = $("#side_sum_link");

	side_over_link.click(function(){
		displayNoneSection();
		side_over_link.addClass("active");
		over_sect.show();
	});

	$("#over_sect .next").click(function(){
		displayNoneSection();
		side_os_link.addClass("active");
		os_sect.show()

		//new stuff
		displayNoneSection();
		side_app_link.addClass("active");
		app_sect.show();
	});

	side_os_link.click(function(){
		displayNoneSection();
		side_os_link.addClass("active");
		os_sect.show()
	});

	$("#os_sect .previous").click(function(){
		displayNoneSection();
		side_over_link.addClass("active");
		over_sect.show();

		//new stuff
		displayNoneSection();
		side_app_link.addClass("active");
		app_sect.show();
	});

	$("#os_sect .next").click(function(){
		displayNoneSection();
		side_app_link.addClass("active");
		app_sect.show();

		//new stuff
		displayNoneSection();
		side_sum_link.addClass("active");
		sum_sect.show();
	});

	side_app_link.click(function(){
		displayNoneSection();
		side_app_link.addClass("active");
		app_sect.show();
	});

	$("#app_sect .previous").click(function(){
		displayNoneSection();
		side_os_link.addClass("active");
		os_sect.show();

		//new stuff
		displayNoneSection();
		side_over_link.addClass("active");
		over_sect.show();
	});

	$("#app_sect .next").click(function(){
		displayNoneSection();
		side_sum_link.addClass("active");
		sum_sect.show();

		//new stuff
		displayNoneSection();
		side_os_link.addClass("active");
		os_sect.show()
	});



	side_sum_link.click(function(){
		displayNoneSection();
		side_sum_link.addClass("active");
		sum_sect.show();
	})

	$("#sum_sect .previous").click(function(){
		displayNoneSection();
		side_app_link.addClass("active");
		app_sect.show();

		//new stuff
		displayNoneSection();
		side_os_link.addClass("active");
		os_sect.show()
	});


	//oversection links
	var os_link = $("#os_link");
	var app_link = $("#app_link");
	var sum_link = $("#sum_link");
	var step_explanation = $("#step_explanation");


	os_link.hover(function(){
		step_explanation.html("Select your operation system of choice. You can pick from multiple "+
			"variations of Windows, OS X, and Linux. Lorem ipsum dolor sit amet, consectetur "+
			"adipiscing elit. Cras ac tincidunt est. Maecenas scelerisque lacinia mauris, ut "+
			"vulputate lacus ultricies a. Sed varius erat scelerisque tortor cursus, at pharetra odio "+
			"commodo. Sed lacus nunc, elementum at convallis vitae, tempus blandit libero. Integer arcu lacus, "+
			"ultricies vitae urna sit amet, placerat.");
	});

	app_link.hover(function(){
		step_explanation.html("Select the applications that you want pre-installed on your workspace. Your workspace "+
			"will already have Microsoft Office Professional 2010, Trend Micro Worry-Free Business Security Services, "+
			"Adobe Reader, Internet Explorer 9, Firefox, 7-Zip, and Adobe Flash installed by default. "+
			"Lorem ipsum dolor sit amet, consectetur "+
			"adipiscing elit. Cras ac tincidunt est. Maecenas scelerisque lacinia mauris, ut "+
			"vulputate lacus ultricies a. Sed varius erat scelerisque tortor cursus, at pharetra odio "+
			"commodo. Sed lacus nunc, elementum at convallis vitae, tempus blandit libero. Integer arcu lacus, "+
			"ultricies vitae urna sit amet, placerat.");
	});

	sum_link.hover(function(){
		step_explanation.html("Get a detailed summary about your newly created workspace, including login instructions "+
			"and a link to download the worksapce client. Lorem ipsum dolor sit amet, consectetur "+
			"adipiscing elit. Cras ac tincidunt est. Maecenas scelerisque lacinia mauris, ut "+
			"vulputate lacus ultricies a. Sed varius erat scelerisque tortor cursus, at pharetra odio "+
			"commodo. Sed lacus nunc, elementum at convallis vitae, tempus blandit libero. Integer arcu lacus, "+
			"ultricies vitae urna sit amet, placerat.");
	});


	var desired_app_text = "You have not selected any applications."; // used later on in the summary page
	var desired_os_text = "You have not selected an operating system yet."


	//operating system selection links
	var os1 = $("#os_1");
	var os2 = $("#os_2");
	var os3 = $("#os_3");
	var os4 = $("#os_4");
	var os_step_explanation = $("#os_step_explanation");

	//desired os selection
	var os_selection = 0; //values range from 1 to 4


	os1.hover(function(){
		os_step_explanation.html("Some very very very interestin stuff to say about windows 7. And then the rest is just going"+
			" randomness. adipiscing elit. Cras ac tincidunt est. Maecenas scelerisque lacinia mauris, ut "+
			"vulputate lacus ultricies a. Sed varius erat scelerisque tortor cursus, at pharetra odio "+
			"commodo. Sed lacus nunc, elementum at convallis vitae, tempus blandit libero. Integer arcu lacus, "+
			"ultricies vitae urna sit amet, placerat.");
		$("#os_selection").val("W7")
	});

	os1.click(function(){
		removeBlueBackgroundOS();
		$(this).addClass("blueBackground");
		os_selection = 1;
		selection_check();

	});

	os2.hover(function(){
		os_step_explanation.html("Some more very interesting but this time about Windows 8. And then the rest is randomness"+
			"adipiscing elit. Cras ac tincidunt est. Maecenas scelerisque lacinia mauris, ut "+
			"vulputate lacus ultricies a. Sed varius erat scelerisque tortor cursus, at pharetra odio "+
			"commodo. Sed lacus nunc, elementum at convallis vitae, tempus blandit libero. Integer arcu lacus, "+
			"ultricies vitae urna sit amet, placerat.");
		$("#os_selection").val("W8")

	});

	os2.click(function(){
		removeBlueBackgroundOS();
		$(this).addClass("blueBackground");
		os_selection = 2;
		selection_check();

	});

	os3.hover(function(){
		os_step_explanation.html("Change it up a bit and now talk about some interesting stuff related to OS X Mavericks" +
			" randomness. adipiscing elit. Cras ac tincidunt est. Maecenas scelerisque lacinia mauris, ut "+
			"vulputate lacus ultricies a. Sed varius erat scelerisque tortor cursus, at pharetra odio "+
			"commodo. Sed lacus nunc, elementum at convallis vitae, tempus blandit libero. Integer arcu lacus, "+
			"ultricies vitae urna sit amet, placerat.");
		$("#os_selection").val("OSX")

	});

	os3.click(function(){
		removeBlueBackgroundOS();
		$(this).addClass("blueBackground");
		os_selection = 3;
		selection_check();

	});

	os4.hover(function(){
		os_step_explanation.html("May not be as popular as windows, but some people are still interested in Ubuntu" +
			"adipiscing elit. Cras ac tincidunt est. Maecenas scelerisque lacinia mauris, ut "+
			"vulputate lacus ultricies a. Sed varius erat scelerisque tortor cursus, at pharetra odio "+
			"commodo. Sed lacus nunc, elementum at convallis vitae, tempus blandit libero. Integer arcu lacus, "+
			"ultricies vitae urna sit amet, placerat.");
		$("#os_selection").val("UU")

	});

	os4.click(function(){
		removeBlueBackgroundOS();
		$(this).addClass("blueBackground");
		os_selection = 4;
		selection_check();

	});

	//application selection links
	var app1 = $("#app_1");
	var app2 = $("#app_2");
	var app3 = $("#app_3");
	var app4 = $("#app_4");
	var app_step_explanation = $("#app_step_explanation")

	//desired application selections
	var apps_desired = [0,0,0,0]; // 0 means dont install, 1 means install

	app1.hover(function(){
		app_step_explanation.html("Dental Scheduler is the leading software for scheduling appointments"+
			" adipiscing elit. Cras ac tincidunt est. Maecenas scelerisque lacinia mauris, ut "+
			"vulputate lacus ultricies a. Sed varius erat scelerisque tortor cursus, at pharetra odio "+
			"commodo. Sed lacus nunc, elementum at convallis vitae, tempus blandit libero. Integer arcu lacus, "+
			"ultricies vitae urna sit amet, placerat.");
	});

	app1.click(function(){
		$(this).toggleClass("blueBackground");
		toggleAppSelection(0);
		selection_check();
	});

	app2.hover(function(){
		app_step_explanation.html("X-Ray utility is the industry leading software for X-Ray machinary"+
			"adipiscing elit. Cras ac tincidunt est. Maecenas scelerisque lacinia mauris, ut "+
			"vulputate lacus ultricies a. Sed varius erat scelerisque tortor cursus, at pharetra odio "+
			"commodo. Sed lacus nunc, elementum at convallis vitae, tempus blandit libero. Integer arcu lacus, "+
			"ultricies vitae urna sit amet, placerat.");
	});

	app2.click(function(){
		$(this).toggleClass("blueBackground");
		toggleAppSelection(1);
		selection_check();
	});

	app3.hover(function(){
		app_step_explanation.html("Clinic management has never been easier with clinic management software "+
			"adipiscing elit. Cras ac tincidunt est. Maecenas scelerisque lacinia mauris, ut "+
			"vulputate lacus ultricies a. Sed varius erat scelerisque tortor cursus, at pharetra odio "+
			"commodo. Sed lacus nunc, elementum at convallis vitae, tempus blandit libero. Integer arcu lacus, "+
			"ultricies vitae urna sit amet, placerat.");
	});

	app3.click(function(){
		$(this).toggleClass("blueBackground");
		toggleAppSelection(2);
		selection_check();
	});

	app4.hover(function(){
		app_step_explanation.html("Manage patient data and create the kind of system that scales to billions "+
			"adipiscing elit. Cras ac tincidunt est. Maecenas scelerisque lacinia mauris, ut "+
			"vulputate lacus ultricies a. Sed varius erat scelerisque tortor cursus, at pharetra odio "+
			"commodo. Sed lacus nunc, elementum at convallis vitae, tempus blandit libero. Integer arcu lacus, "+
			"ultricies vitae urna sit amet, placerat.");
	});

	app4.click(function(){
		$(this).toggleClass("blueBackground");
		toggleAppSelection(3);
		selection_check();
	});

	//summary section links
	var sum1 = $("#sum_1");
	var sum2 = $("#sum_2");
	var sum_step_explanation = $("#sum_step_explanation");

	sum1.click(function(){
		removeBlueBackgroundSUM();
		$(this).addClass("blueBackground");
		sum_step_explanation.html(desired_os_text);
		sum_step_explanation.show();
	});

	sum2.click(function(){
		removeBlueBackgroundSUM();
		$(this).addClass("blueBackground");
		sum_step_explanation.html(desired_app_text);
		sum_step_explanation.show();
	});


	$("#machinename").blur(function(){
		selection_check();
	})

	//check to see if there have been any changes to the os_selection or app choices
	//and update text on summary page accordingly
	var selection_check = function(){
		os_texts = ["You have not selected an operating system yet.",
		"You have selected Microsoft Windows 7 operating system.",
		"You have selected Microsoft Windows 8 operating system.",
		"You have selected OS X Mavericks operating system.",
		"You have selected Ubuntu operating system."];

		desired_os_text = os_texts[os_selection];

		desired_app_text = ""
		app_texts = ["You are installing Schedule Assistant.",
		"You are installing X-Ray Utility.",
		"You are instaling Clinic Management.",
		"You are installing EHR Utility."];

		for(var i=0;i<apps_desired.length;i++){
			if (apps_desired[i]==1){
				desired_app_text += app_texts[i]+"<br/>";
			}
		}

		//check if everything has been filled in and enable build button
		if (desired_app_text=="" || desired_os_text==os_texts[0] || $("#machinename").val()==""){
			$("#build").addClass("disabled");
		} else{
			$("#build").removeClass("disabled");
		}

		if (desired_app_text=="") {
			desired_app_text="You have not selected any applications.";
		}


	};

	

	var instancesFinishedCreating = 0;
	//when build button is clicked
	$("#build").click(function(){
		var build = confirm("Ready to start up your new Instance(s)?");
		if (build){
			var names_insts = ($("#machinenames").val()).split(",");
			$.each(names_insts, function(index,value){
				$.post("http://ec2-54-187-87-86.us-west-2.compute.amazonaws.com/com.voffice.server/AWSActions",
				{todo:"start",name:value,count:1});
			});
			// being progress bar
			setTimeout(function(){console.log('ok');window.location = "/doctorapp/dashboard";}, 1000)
		}
	});

	

	


	//get all the users instances
	/*$.get("http://10.33.45.4:8080/com.voffice.server/AWSActions",
		{todo:"instances"},
		function(data){
			callMe(data);
			console.log(data);
			alert(data);
		},"jsonp");*/

	function deleteWorkstation(){

	}

	function callMe(data, status){
		console.log(data);
		$.each(data, function(index, value){
			var nameData = "<td>"+value["_name"]+"</td>";
			var idData = "<td>"+value["_id"]+"</td>";
			var ipData = "<td>"+value["_ip"]+"</td>";
			var keyData = "<td>"+value["_privateKey"]+"</td>";
			var newRow = $("<tr id="+value["_id"]+">"+nameData+idData+ipData+keyData+"</tr>");
			newRow.click(function(e){
			     $( "#dialog-confirm" ).dialog({
			      resizable: false,
			      width:500,
			      height:140,
			      modal: true,
			      buttons: {
			        "Pause Workstation": function() {
			        	//do ajax call to stop machine
			          $( this ).dialog( "close" );
			        },
			        "Delete Workstation": function() {
			        	//do ajax call to terminate machine
			        	e.currentTarget.remove();
			          $( this ).dialog( "close" );
			        }, 
			        "Cancel": function() {
			          $( this ).dialog( "close" );
			        }
			      }
			    });
			});
			$("#myInstances").append(newRow);
		});		
	}

	function listInstances(data, status){
		console.log(data[0]);
		$.each(data, function(index, value){
			//$("#myInstances").append("<li>"+value["_id"]+" "+value["_name"]+" "+value["_ip"]+"</li>")
			//add something to table
		});
	}

	$.ajax({
	  //url: "http://10.33.45.4:8080/com.voffice.server/AWSActions",
	  url:"http://ec2-54-187-87-86.us-west-2.compute.amazonaws.com/com.voffice.server/AWSActions",
	  jsonpCallback: "callMe",
	  data: {todo:"instances", tocall:"listInstances"},
	  success: callMe,
	  dataType: "jsonp"
	});
	


	/* Utility ******************************************** functions*/


	var removeBlueBackgroundOS = function(){
		os1.removeClass("blueBackground");
		os2.removeClass("blueBackground");
		os3.removeClass("blueBackground");
		os4.removeClass("blueBackground");

	};

	var removeBlueBackgroundSUM = function(){
		sum1.removeClass("blueBackground");
		sum2.removeClass("blueBackground");
	};
	// set section displays to none
	var displayNoneSection = function(){
		over_sect.hide(); side_over_link.removeClass("active");
		os_sect.hide(); side_os_link.removeClass("active");
		app_sect.hide(); side_app_link.removeClass("active");
		sum_sect.hide(); side_sum_link.removeClass("active");
	};

	var toggleAppSelection = function(appNumber){
		apps_desired[appNumber] = (apps_desired[appNumber]==1) ? 0:1;
	}


});



