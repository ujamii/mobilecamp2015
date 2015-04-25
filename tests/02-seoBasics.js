if (!casper.cli.has('url')) {
	casper.die('no --url param given!');
} else {
	casper.test.begin('SEO basics', 3, function suite(test) {
		var url = casper.cli.get("url");
		casper.start(url, function() {
			test.assertTitleMatches(/^MobileCamp.*/, "title is prefixed correctly");
		});

		casper.open(url + '/robots.txt').then(function() {
			test.assertHttpStatus(200, "robots.txt gives a 200");
		});

		casper.open(url + '/sitemap.xml').then(function() {
			test.assertHttpStatus(200, "sitemap.xml gives a 200");
		});

		casper.run(function() {
			test.done();
		});
	});
}