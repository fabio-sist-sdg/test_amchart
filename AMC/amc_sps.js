(function() {
	let template = document.createElement("template");
	template.innerHTML = `
		<form id="form"></form>
	`;
	class SDG_AMC_SPS extends HTMLElement {
		constructor() {
			super();

		}
		
		_submit(e) {

		}
	}
	
	customElements.define("com-sdg-amc-sps", SDG_AMC_SPS);
})();