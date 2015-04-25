casper.options.viewportSize = {width: 1024, height: 768};

if (!casper.cli.has('url')) {
	casper.die('no --url param given!');
} else {
	casper.test.begin('desktop version', 2, function suite(test) {
		var url = casper.cli.get("url");
		casper.start(url, function() {
			test.assertVisible('div#header_main .main_menu', "main menu is visible");
			test.assertNotVisible('#advanced_menu_toggle', "mobile menu is not visible");
		});

		casper.run(function() {
			test.done();
		});
	});
}