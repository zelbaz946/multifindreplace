module.exports = (instance, properties, context) => {
  // Error Handling
  if (typeof properties.find_list !== 'string') {
    throw new Error('Find list must be a text input');
  }
  if (typeof properties.replace_list !== 'string') {
    throw new Error('Replace list must be a text input');
  }
  if (typeof properties.text !== 'string') {
    throw new Error('Text must be a text input');
	}
	

  // load our data
  const finds = properties.find_list.split(',');
	const replaces = properties.replace_list.split(',');

	if (finds.length !== replaces.length) {
		throw new Error('Finds & Replaces must contain the same number of arguments');
	}
	const { text } = properties;
	const textArr = text.split(' ');

  // iterate over both arrays
	for (let i = 0; i < textArr.length; i += 1) {
		const word = textArr[i];
		for (let j = 0; j < finds.length; j += 1) {
			const find = finds[j];
			const replace = replaces[j];
			if (word === find) {
				textArr[j] = replace;
			}
		}
	}

  instance.publishState('text_processed', textArr.join(' '));
};
