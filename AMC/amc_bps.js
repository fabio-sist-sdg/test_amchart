(function() {
	let template = document.createElement("template");
	template.innerHTML = `
		<form id="form"></form>
	`;
	class SDG_AMC_BPS extends HTMLElement {
		constructor() {
			super();
		}
		_submit(e) {
		}
	}
	
	customElements.define("com-sdg-amc-bps", SDG_AMC_BPS);
})();