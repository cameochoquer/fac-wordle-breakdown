//as a user I want to get feedback from the app if I've written a word that doesn't exist
//as a user I want to get feedback from the app if I've written less than 5 letters
//make sure word matches list in an array
//make sure word is no more than 5 letters
//make sure letters are letters and no characters
const validateWord = (word) => {
    if(word ==="/^a-z$/"){
        return true
    }else{
        return false
        console.log("this isn't a word")
    }
}
