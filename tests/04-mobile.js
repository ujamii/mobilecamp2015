casper.options.viewportSize = {width: 400, height: 300};

if (!casper.cli.has('url')) {
	casper.die('no --url param given!');
} else {
	casper.test.begin('mobile version', 3, function suite(test) {
		var url = casper.cli.get("url");
		casper.start(url, function() {
			test.assertNotVisible('div#header_main .main_menu', "main menu is not visible");
//			test.assertNotVisible('#mobile-advanced', "mobile menu is not visible");
			test.assertVisible('#advanced_menu_toggle', "mobile menu btn is visible");
		});

		casper.then(function() {
			casper.click('#advanced_menu_toggle');
			casper.wait(50, function() {
				test.assertVisible('#mobile-advanced', "mobile menu is visible");
			});
		});

		casper.run(function() {
			test.done();
		});
	});
}