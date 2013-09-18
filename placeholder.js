(function() {
  // I know, that's bad. :)
	var placeholders = document.getElementsByClassName("placeholder");

	for (var i = 0; i < placeholders.length; i++) {

		(function(i) {
			var item = placeholders.item(i);
			var attrPlaceholder = item.getAttribute("placeholder");

			item.className += " placeholded";

			if (item.tagName === "TEXTAREA") {

				item.value = attrPlaceholder;
				item.removeAttribute("placeholder");
			} else {

				item.setAttribute("value", attrPlaceholder);
				item.removeAttribute("placeholder");
			}

			item.onfocus = function() {
				if (this.value == attrPlaceholder) {
					this.value = '';

					toggleClass("placeholded", this);
				}
			};

			item.onblur = function() {
				if (this.value == '') {
					this.value = attrPlaceholder;

					toggleClass("placeholded", this);
				}
			};
		})(i);
	}
})();
