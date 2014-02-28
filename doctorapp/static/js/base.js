/*
Authored by Kwadwo Nyarko
*/

$(document).ready(function(){

	//sections
	var over_sect = $("#over_sect");
	var os_sect = $("#os_sect");
	var app_sect = $("#app_sect");
	var def_sect = $("#def_sect");
	var sum_sect = $("#sum_sect");

	//side nav
	var side_over_link = $("#side_over_link");
	var side_os_link = $("#side_os_link");
	var side_app_link = $("#side_app_link");
	var side_def_set_link = $("#side_def_set_link");
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
	});

	$("#os_sect .next").click(function(){
		displayNoneSection();
		side_app_link.addClass("active");
		app_sect.show();
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
	});

	$("#app_sect .next").click(function(){
		displayNoneSection();
		side_def_set_link.addClass("active");
		def_sect.show();
	});

	side_def_set_link.click(function(){
		displayNoneSection();
		side_def_set_link.addClass("active");
		def_sect.show();
	});

	$("#def_sect .previous").click(function(){
		displayNoneSection();
		side_app_link.addClass("active");
		app_sect.show();
	});

	$("#def_sect .next").click(function(){
		displayNoneSection();
		side_sum_link.addClass("active");
		sum_sect.show();
	});

	side_sum_link.click(function(){
		displayNoneSection();
		side_sum_link.addClass("active");
		sum_sect.show();
	})

	$("#sum_sect .previous").click(function(){
		displayNoneSection();
		side_def_set_link.addClass("active");
		def_sect.show();
	});


	//oversection links
	var os_link = $("#os_link")
	var app_link = $("#app_link")
	var def_set_link = $("#def_set_link")
	var sum_link = $("#sum_link")
	var step_explanation = $("#step_explanation")


	os_link.click(function(){
		step_explanation.html("Select your operation system of choice. You can pick from multiple "+
			"variations of Windows, OS X, and Linux. Lorem ipsum dolor sit amet, consectetur "+
			"adipiscing elit. Cras ac tincidunt est. Maecenas scelerisque lacinia mauris, ut "+
			"vulputate lacus ultricies a. Sed varius erat scelerisque tortor cursus, at pharetra odio "+
			"commodo. Sed lacus nunc, elementum at convallis vitae, tempus blandit libero. Integer arcu lacus, "+
			"ultricies vitae urna sit amet, placerat.");
	});

	app_link.click(function(){
		step_explanation.html("Select the applications that you want pre-installed on your workspace. Your workspace "+
			"will already have Microsoft Office Professional 2010, Trend Micro Worry-Free Business Security Services, "+
			"Adobe Reader, Internet Explorer 9, Firefox, 7-Zip, and Adobe Flash installed by default. "+
			"Lorem ipsum dolor sit amet, consectetur "+
			"adipiscing elit. Cras ac tincidunt est. Maecenas scelerisque lacinia mauris, ut "+
			"vulputate lacus ultricies a. Sed varius erat scelerisque tortor cursus, at pharetra odio "+
			"commodo. Sed lacus nunc, elementum at convallis vitae, tempus blandit libero. Integer arcu lacus, "+
			"ultricies vitae urna sit amet, placerat.");
	});

	def_set_link.click(function(){
		step_explanation.html("Set your defaut workspace settings, including username and password, and colorscheme, "+
			"depending on your OS preference. Lorem ipsum dolor sit amet, consectetur "+
			"adipiscing elit. Cras ac tincidunt est. Maecenas scelerisque lacinia mauris, ut "+
			"vulputate lacus ultricies a. Sed varius erat scelerisque tortor cursus, at pharetra odio "+
			"commodo. Sed lacus nunc, elementum at convallis vitae, tempus blandit libero. Integer arcu lacus, "+
			"ultricies vitae urna sit amet, placerat.");
	});

	sum_link.click(function(){
		step_explanation.html("Get a detailed summary about your newly created workspace, including login instructions "+
			"and a link to download the worksapce client. Lorem ipsum dolor sit amet, consectetur "+
			"adipiscing elit. Cras ac tincidunt est. Maecenas scelerisque lacinia mauris, ut "+
			"vulputate lacus ultricies a. Sed varius erat scelerisque tortor cursus, at pharetra odio "+
			"commodo. Sed lacus nunc, elementum at convallis vitae, tempus blandit libero. Integer arcu lacus, "+
			"ultricies vitae urna sit amet, placerat.");
	});


	/* Utility ******************************************** functions*/
	//make set section displays to none
	var displayNoneSection = function(){
		over_sect.hide(); side_over_link.removeClass("active");
		os_sect.hide(); side_os_link.removeClass("active");
		app_sect.hide(); side_app_link.removeClass("active");
		def_sect.hide(); side_def_set_link.removeClass("active");
		sum_sect.hide(); side_sum_link.removeClass("active");
	};

});