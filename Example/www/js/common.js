function startAnalyticTracking () {
	"use strict";

	if (window.plugins.googleAnalytics) {
		//window.plugins.googleAnalytics.startTracking('UA-XXXYYYZZ-1');
		window.plugins.googleAnalytics.startTracking('UA-43988926-1');
	}
}

function startNewAnalyticSession () {
	"use strict";

	if (window.plugins.googleAnalytics) {
		window.plugins.googleAnalytics.startSession();
	}
}

function endCurrentAnalyticSession () {
	"use strict";

	if (window.plugins.googleAnalytics) {
		window.plugins.googleAnalytics.endSession();
	}
}

function anonymizeAnalyticTracking (anonymize) {
	"use strict";

	if (window.plugins.googleAnalytics) {
		window.plugins.googleAnalytics.anonymizeTracking(anonymize);
	}
}

function setAnalyticDispatchInterval (dispatchInterval) {
	"use strict";

	if (window.plugins.googleAnalytics) {
		window.plugins.googleAnalytics.setDispatchInterval(dispatchInterval);
	}
}

function dispatchAnalyticQueue () {
	"use strict";

	if (window.plugins.googleAnalytics) {
		window.plugins.googleAnalytics.dispatchTrackedQueue();
	}
}

function sendAnalyticEvent (category, action, label, value) {
	"use strict";

	if (window.plugins.googleAnalytics) {
		window.plugins.googleAnalytics.sendEvent(category, action, label, value);
	}
}

function sendAnalyticException (fatal, description) {
	"use strict";

	if (window.plugins.googleAnalytics) {
		window.plugins.googleAnalytics.sendException(fatal, description);
	}
}

function sendAnalyticSocial (network, action, target) {
	"use strict";

	if (window.plugins.googleAnalytics) {
		window.plugins.googleAnalytics.sendSocial(network, action, target);
	}
}

function sendAnalyticTiming (category, time, name, label) {
	"use strict";

	if (window.plugins.googleAnalytics) {
		window.plugins.googleAnalytics.sendTiming(category, time, name, label);
	}
}

function sendAnalyticTransaction (transactionId, affiliate, items) {
	"use strict";

	if (window.plugins.googleAnalytics) {
		window.plugins.googleAnalytics.sendTransaction(transactionId, affiliate, items);
	}
}

function sendAnalyticView (viewName) {
	"use strict";

	if (window.plugins.googleAnalytics) {
		window.plugins.googleAnalytics.sendView(viewName);
	}
}

function setAnalyticDimension (index, name) {
	"use strict";

	if (window.plugins.googleAnalytics) {
		window.plugins.googleAnalytics.setCustomDimension(index, name);
	}
}