import { extendTheme } from "@chakra-ui/react";


export const theme = extendTheme({
	colors: {
		gray: {
			"50": "#FFF",
			"100": "#F5F8FA",
			"200": "#DADADA",
			"300": "#999999",
			"400": "#47585B",
			"500": "#000"
		},
		yellow: {
			"500": "#ffba08",
		},
	},
	fonts: {
		body: "Poppins",
		headings: "Poppins",
	}
})