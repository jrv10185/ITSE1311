var $ = function (id) {
	return document.getElementById(id);
};

async function openJson(){
	const requestURL = 'https://donotenter.com/fall2022/jvaughan/email_list/page.json';
	const request = new Request(requestURL);

	const response = await fetch(request);
	const text = await response.text();
	const jsonFile = JSON.parse(text);
	// return jsonFile; this didnt work
}

var joinList = function () {
	var emailAddress1 = $("email_address1").value;
	var emailAddress2 = $("email_address2").value;
	var isValid = true;

	if (emailAddress1 === "") {
		$("email_address1_error").firstChild.nodeValue = "This field is required.";
		isValid = false;
	} else { $("email_address1_error").firstChild.nodeValue = "all is cool"; }


	if (emailAddress1 !== emailAddress2) {
		$("email_address2_error").firstChild.nodeValue = "This entry must equal first entry.";
		isValid = false;
	} else { $("email_address2_error").firstChild.nodeValue = ""; }

	if ($("first_name").value === "") {
		$("first_name_error").firstChild.nodeValue = "This field is required.";
		isValid = false;
	} else { $("first_name_error").firstChild.nodeValue = ""; }

	if (isValid) { 
		// $("email_form").submit(this); 
		doSomething(this);
		// console.log("Submitting");
	}

};

window.onload = function () {

	$("join_list").onclick = joinList;

	$("email_address1").focus();

};

function doSomething(form){
	// console.log("doSomething ran")
	// openJson();   i think i need to load exisiting jsonfile, parse it, add to the bottom, and reupload
	var name = $("first_name").value;
	var emailAddress = $("email_address1").value;

	var obj = '{ "name":"'+name+'" , '+'"email":"'+emailAddress+'" }';
	console.log("jsonFile:" + jsonFile);
	var myString = JSON.stringify(obj);
}