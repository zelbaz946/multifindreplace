//our inputs include find_list, replace_list, and text
//We expose our result as a state called "text_processed"

function(instance, properties, context) {
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
    
    instance.publishState("text_processed", text)
}
