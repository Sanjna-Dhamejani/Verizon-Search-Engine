//To handle fetching of data dynamically. 
//This is a basic way to keey checking every 100 seconfs whether if any new data is added. 
//If yes then the set will be updated.

//A better way is to use webhooks and keep fetching the dynamic data
function readData(){
    setInterval(function() {
        getContact();
        getTweets();
        getImages();
        getSlacks();
    }, 100);  
}

//Creating set after iterating through each JSON entry

export function getData(){
    var match_items = new Set();
    getContact().contacts.forEach(function (obj) {
        obj.matching_terms.forEach(item => match_items.add(item)) 
    });
    getImages().images.forEach(function (obj) {
        obj.matching_terms.forEach(item => match_items.add(item))
    });
    getSlacks().slacks.forEach(function (obj) {
        obj.matching_terms.forEach(item => match_items.add(item))
    });
    getTweets().tweets.forEach(function (obj) {
        obj.matching_terms.forEach(item => match_items.add(item))
    });
    return match_items
};

export function getContact(){
    var contacts = require('../src/data/contacts.json')
    return contacts;
};

export function getTweets(){
    var tweets = require('../src/data/tweets.json')
    return tweets;
};

export function getImages(){
    var images = require('../src/data/images.json')
    return images;
};

export function getSlacks(){
    var slacks = require('../src/data/slacks.json')
    return slacks;
};