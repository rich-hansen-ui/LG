YUI().use('node', 'io', function (Y) {
	var topURI = "templates/topMenu.hb";
	var leftURI = "templates/leftMenu.hb";
	var footerURI = "templates/footer.hb";
	
	function topComplete(id, o) {
		var topTemplate = Handlebars.compile(o.responseText);
		var topMenu = Y.one("div.menu");
		topMenu.set('innerHTML', topTemplate(pageConfig));
	}
	
	function leftComplete(id, o) {
		var leftTemplate = Handlebars.compile(o.responseText);
		var leftMenu = Y.one("span.inn_main2");
		leftMenu.set('innerHTML', leftTemplate(pageConfig));
	}
	
	function footerComplete(id, o) {
		var footerTemplate = Handlebars.compile(o.responseText);
		var footer = Y.one("#footer");
		footer.set('innerHTML', footerTemplate({}));
	};
	
	var topConfig = {
		on: {
			complete: topComplete
		}
	};
	
	var leftConfig = {
		on: {
			complete: leftComplete
		}
	}
	
	var footerConfig = {
		on: {
			complete: footerComplete
		}
	};
	
	Y.io(topURI, topConfig);
	Y.io(leftURI, leftConfig);
	Y.io(footerURI, footerConfig);
	
	var handleThumb = function(e) {
		var imgLarge = Y.one('#productLarge');
		var img = e.currentTarget.one('img');
		var imgName = img.get('src');
		imgName = imgName.replace('_thumb','_large','i');
		imgLarge.set('src', imgName);
	}
	
	if (Y.one('#thumbOne')) {
		Y.one('#thumbOne').on('click', handleThumb);
	}
	if (Y.one('#thumbTwo')) {
		Y.one('#thumbTwo').on('click', handleThumb);
	}
	if (Y.one('#thumbThree')) {
		Y.one('#thumbThree').on('click', handleThumb);
	}
	if (Y.one('#thumbFour')) {
		Y.one('#thumbFour').on('click', handleThumb);
	}
});