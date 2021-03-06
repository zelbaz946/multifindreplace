function(properties, context) {

    //load our data
    let finds = properties.find_list.split(",")
    let replaces = properties.replace_list.split(",")
    let text = properties.text

    //iterate over both arrays
    for (let index in finds) {
        let elemFind = finds[index]
        let elemReplace = replaces[index]
        text = text.replaceAll(elemFind, elemReplace)
    }
    
    return {
        text_processed: text
    }
}

