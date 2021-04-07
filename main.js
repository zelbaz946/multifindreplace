module.exports = (instance, properties, context) => {
	// Error Handling
	if (typeof properties.find_list !== "string") {
		throw new Error("Find list must be a text input");
	}
	if (typeof properties.replace_list !== "string") {
		throw new Error("Replace list must be a text input");
	}
	if (typeof properties.text !== "string") {
		throw new Error("Text must be a text input");
	}

	// load our data
	const finds = properties.find_list.split(",");
	const replaces = properties.replace_list.split(",");
	let text = properties.text;

	// iterate over both arrays
	for (const index in finds) {
		const elemFind = finds[index];
		const elemReplace = replaces[index];
		text = text.replaceAll(elemFind, elemReplace);
	}

	instance.publishState("text_processed", text);
};

// iterate over the array of inputs
// iterate over the text
