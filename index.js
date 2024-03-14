function shout (word){
 return word.toUpperCase();
}

function whisper (text){
    return text.toLowerCase();
}

function logShout (text){
    console.log(text.toUpperCase());
}

function logWhisper (text){
    console.log(text.toLowerCase());
}

function sayHiToHeadphonedRoommate (text){
    if (text === text.toLowerCase()){
        return "I can't hear you!";
    }
    else if (text === text.toUpperCase()){
        return "YES INDEED!";
    }
    else{
        return "I would love to!";
    }
}