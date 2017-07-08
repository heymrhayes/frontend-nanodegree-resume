/*
This is empty on purpose! Your code to build the resume will go here.
*/

var bio = {
	name : "David Hayes",
	role : "Teacher",
	contacts: {
		mobile: "773-507-9548",
		email: "heymrhayes@gmail.com", 
		github: "https://github.com/heymrhayes/",
		location: "Chicago, IL"
	},
	welcomeMessage: "My resume",
	skills: ["web application development","teaching"],
	biopic: "http://www.lanetech.org/img/staff/16055.jpg",
	display: function () {
		$("#header").prepend(HTMLheaderRole.replace("%data%",this.role));
		$("#header").prepend(HTMLheaderName.replace("%data%", this.name));
		$("#topContacts").append(HTMLmobile.replace("%data%", this.contacts.mobile));
		$("#topContacts").append(HTMLemail.replace("%data%", this.contacts.email));
		$("#topContacts").append(HTMLgithub.replace("%data%", this.contacts.github));
		$("#topContacts").append(HTMLlocation.replace("%data%", this.contacts.location));
		$("#header").append(HTMLbioPic.replace("%data%", this.biopic));
		$("#header").append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));
		$("#header").append(HTMLskillsStart);
		$.each(this.skills, function(i, v) {
			$("#skills").append(HTMLskills.replace("%data%", v));
		});
		






	}};

	var education = {
		schools: [
		{
			name: "Kellogg School of Management, Northwestern University",
			location: "Evanston, IL",
			degree: "Master of Management",
			majors: ["Finanace","Economics"],
			dates: "1993-1995",
			url: "http://www.kellogg.northwestern.edu/"
		},
		{
			name: "University of Maryland",
			location: "College Park, MD",
			degree: "Bachelor of Science",
			majors: ["Accounting"],
			dates: "1978-1991",
			url: "https://www.umd.edu/"
		}
		],
		onlineCourses: [
		{
			title: "Front-End Web Developer Nanodegree Program",
			school: "Udacity",
			dates: "Currently Enrolled",
			url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
		],
		display: function () {
			var thisHTMLSchoolName;
			$("#education").append(HTMLschoolStart);
			$.each(this.schools, function(i,v) {
				thisHTMLSchoolName = HTMLschoolName.replace("#",v.url);
				$(".education-entry").append(thisHTMLSchoolName.replace("%data%",v.name) + HTMLschoolDegree.replace("%data%",v.degree));
				$(".education-entry").append(HTMLschoolDates.replace("%data%", v.dates));
				$(".education-entry").append(HTMLschoolLocation.replace("%data%", v.location));
				$(".education-entry").append(HTMLschoolMajor.replace("%data%", v.majors.join()));
			});
			$(".education-entry").append(HTMLonlineClasses);
			$.each(this.onlineCourses, function(i,v) {
				$(".education-entry").append(HTMLonlineTitle.replace("%data%",v.title) + HTMLonlineSchool.replace("%data%",v.school));
				$(".education-entry").append(HTMLonlineDates.replace("%data%",v.dates));
				$(".education-entry").append(HTMLonlineURL.replace("%data%",v.url));
			});

			


		}
	};


	var work = 
	{
		jobs: [
		{
			employer: "Chicago Public Schools", 
			title: "Teacher", 
			location: "Chicago, IL",
			dates: "2008-present",
			description: "Computer Science Teacher 7-12" 
		},
		{
			employer: "Self", 
			title: "Software Developer", 
			location: "Chicago, IL",
			dates: "1995-present",
			description: "Web and Database application developer" 
		}
		],

		display: function () {
			$("#workExperience").append(HTMLworkStart);
			$.each(this.jobs, function(i,v) {
				$(".work-entry").append(HTMLworkEmployer.replace("%data%",v.employer) + HTMLworkTitle.replace("%data%",v.title));
				$(".work-entry").append(HTMLworkDates.replace("%data%",v.dates));
				$(".work-entry").append(HTMLworkLocation.replace("%data%",v.location));
				$(".work-entry").append(HTMLworkDescription.replace("%data%",v.description));
			});


		}
	};

	var projects = {
		projects: [
			{
				title: "Cool project A", 
            	dates:  "2016",
            	description: "You Probably Think This Paper's About You: Narcissists' Perceptions of Their Personality and Reputation.",
            	images: ["http://lorempixel.com/400/200/business/1/","http://lorempixel.com/400/200/business/2/"]

			},
			{
				title: "Amazing project B", 
            	dates:  "2017",
            	description: "Chicken Chicken Chicken: Chicken Chicken",
            	url: "https://isotropic.org/papers/chicken.pdf",
            	images: ["https://qph.ec.quoracdn.net/main-qimg-e765f3c591b2a22bb5c5eeeeb6ecaee7.webp"]

			}
 		],           
      display: function() {
      	$("#projects").append(HTMLprojectStart);
      	$.each(this.projects, function(i,v) {
      		$(".project-entry").append(HTMLprojectTitle.replace("%data%",v.title));
      		$(".project-entry").append(HTMLprojectDates.replace("%data%",v.dates));
      		$(".project-entry").append(HTMLprojectDescription.replace("%data%",v.description));
      		$.each(v.images, function (idx, url) {
      			$(".project-entry").append(HTMLprojectImage.replace("%data%", url));
      		});
      		
      	});
      }

	};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
