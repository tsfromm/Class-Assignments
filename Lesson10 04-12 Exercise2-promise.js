// Login page - Display a login form asking user for a username.
// On Submit, look up the username entered by the user.
// If the user is found, store user object and render User's homepage
// If no user is found, display a detailed error message.
    
// User's homepage displays:
    // User's name
    // User's post titles
    // User's albums
// Post View - Clicking on a post renders a post view, including:
    // Post title
    // Post text
    // A list of comments on the post
    // A back link to the user homepage
// Album View - Clicking on an album renders the album page, including:
    // Thumbnails of all the photos and the photo's title
    // A search box that filters the photos by title as the user types
    // A back link to the user homepage

let userName = document.querySelector('input#userName');
let submit = document.querySelector('#submit');
submit.addEventListener('click', event => {
    //executor
})
function findUser(userName) {
    return new Promise(function(resolve, reject) {
        $.get("http://jsonplaceholder.typicode.com/users?username="+userName,
        function(user){
            if(user.length) resolve(user[0])
            else reject("incorrect username");
        })//function user
    })//return new promise
} //function findUser

function getUserPosts(user) {
    return new Promise (function(resolve, reject){
        $.get("http://jsonplaceholder.typicode.com/posts?userId="+user.Id,
        function(posts){
            resolve(posts);
        });//function posts
    });//return new promise
};//function gerUserPosts

function getAlbumPosts(user) {
    return new Promise (function(resolve,reject){
        $.get("http://jsonplaceholder.typicode.com/albums?userId=")+user.Id,
        function(albums){
            resolve(albums);
        };//function albums
    });//return new Promise
};//function getAlbumPosts