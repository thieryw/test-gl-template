
import {createRouter, defineRoute} from "type-route";
import {makeThisModuleAnExecutableRouteLister} from "github-pages-plugin-for-type-route";


export const routeDefs = {
	"home": defineRoute("/test-gl-template"),
	"pageExample": defineRoute("/page-example"),
	"page2Example": defineRoute("/page-2-example")
};

makeThisModuleAnExecutableRouteLister(routeDefs);

export const {RouteProvider, routes, useRoute} = createRouter(
	routeDefs
);

	