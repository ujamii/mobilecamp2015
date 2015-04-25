if (!casper.cli.has('url')) {
	casper.die('no --url param given!');
} else {
	casper.test.begin('basic status code check', 1, function suite(test) {
		var url = casper.cli.get("url");

		casper.start(url, function() {
			test.assertHttpStatus(200, "homepage gives a 200");
			this.capture('screenshots/homepage.jpg', undefined, {
				format: 'jpg',
				quality: 75
			});
		});

		casper.run(function() {
			test.done();
		});
	});
}