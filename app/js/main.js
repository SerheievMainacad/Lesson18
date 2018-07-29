$(document).ready(function() {
	$('#get').click(function() {
		var serForm = $('#myForm').serialize();
		console.log(serForm);
		$.ajaxSetup({
			type: 'GET',
			url: 'data/data.json'
		});
		$.ajax({
			success: function(msg) {
				console.log('---------success');
			},
			error: function(response) {
				console.log('---------error');
			},
			beforeSend: function() {
				console.log('---------beforeSend');
			},
			complete: function() {
				console.log('---------complete');
			}
		});
		// $.getScript('data/script.js');
		//$.getJSON()
	});

	$(document).ajaxStart(function() {
		console.log('AjaxStart');
	});
	$(document).ajaxSend(function() {
		console.log('ajaxSend');
	});
	$(document).ajaxStop(function() {
		console.log('AjaxStop');
	});
	$(document).ajaxError(function() {
		console.log('ajaxError');
	});
	$(document).ajaxSuccess(function() {
		console.log('ajaxSuccess');
	});
	$(document).ajaxComplete(function() {
		console.log('ajaxComplete');
	});

	var obj = {
		name: 'alex',
		age: 12
	};
	// Object.defineProperty(obj, 'name', { enumerable: false });
	console.log(obj);
	var paramObj = $.param(obj);
	console.log(paramObj);
	// $.post(url, function(data, status) {});
	// $.get(url, function(data, status) {});
});
