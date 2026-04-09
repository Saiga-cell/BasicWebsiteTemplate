import path from "node:path";
import { fileURLToPath } from "node:url";
import { merge } from "webpack-merge";
import common from "./webpack.common.js";

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default merge(common, {
	mode: "development",
	devtool: "inline-source-map",

	devServer: {
		static: {
			directory: path.resolve(__dirname, "dist"),
		},
		hot: true,
		liveReload: true,
		port: 8080, // you can change this if needed
		open: true, // optional: auto open browser

		watchFiles: [
			path.resolve(__dirname, "src/**/*.html"), // watches all .html files in src
			// Add this line if your HTML is in a "public" folder instead:
			// path.resolve(__dirname, "public/**/*.html"),
		],
	},
});
