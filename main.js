function MFR(instance, properties, context) {
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
    throw new Error(
      'Finds & Replaces must contain the same number of arguments'
    );
	}


	// iterate over both arrays
  const { text } = properties;
  const textArr = text.split(' ');
  for (let i = 0; i < textArr.length; i += 1) {
    const word = textArr[i];
    for (let j = 0; j < finds.length; j += 1) {
			const find = finds[j].trim();
			const replace = replaces[j].trim();
			// clean the word of any punctuation or spaces
			const target = /\W/g
			const wordClean = word.replace(target, '')
			if (wordClean === find) {
				//replace the cleanword in order to maintain punctuation
        textArr[i] = textArr[i].replace(wordClean, replace);
      }
    }
	}
	const result = textArr.join(' ');
  // instance.publishState(‘text_processed’, textArr.join(' ’));
	return {
		finds,
		replaces,
		text,
		textArr,
		result
	}
}
module.exports = MFR;