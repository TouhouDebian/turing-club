const LEGACY_HOST = "tycybersec.cc.cd";
const CANONICAL_HOST = "turing.tyzx.org";

export function onRequest(context) {
	const url = new URL(context.request.url);

	if (url.hostname !== LEGACY_HOST) {
		return context.next();
	}

	url.protocol = "https:";
	url.hostname = CANONICAL_HOST;
	url.port = "";

	return Response.redirect(url.toString(), 301);
}
