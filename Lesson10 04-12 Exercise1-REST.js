$(document).ready(function() {
  //make sure the page loads before you request info
  let list = $("#list");

  $("#1").on("click", function() {
    list.text("");
    $.get("http://jsonplaceholder.typicode.com/posts", function(posts) {
      posts.forEach(function(post) {
        const li = $("<li>");
        li.text("Post" + post.id + ": " + post.body);
        list.append(li);
      }); //button1 forEach
    }); //get function(posts)
  }); //button1 onclick

  $("#2").on("click", function() {
    list.text("");
    $.get("http://jsonplaceholder.typicode.com/posts/10", function(post) {
      const li = $("<li>");
      li.text("Post " + post.id + ": " + post.title);
      list.append(li);
    }); //get function
  }); //button2 onclick

  $("#3").click(function() {
    list.text("");
    $.get("http://jsonplaceholder.typicode.com/comments/", function(comments) {
      comments.forEach(
        function(comment) {
          const li = $("<li>");
          const br = "<br>";
          if (comment.postId === 12) {
            li.html(
              "Comment " +
                comment.id +
                ": " +
                br +
                comment.name +
                br +
                comment.email +
                br +
                comment.body
            );
            list.append(li);
          } //if
        } //foreach function
      );
    }); //get function
  }); //button3 onclick

  $("#4").click(function() {
    list.text("");
    $.get("http://jsonplaceholder.typicode.com/posts/", function(posts) {
      posts.forEach(function(post) {
        const li = $("<li>");
        const br = "<br>";
        if (post.userId === 2) {
          li.html("Post " + post.id + ": " + br + post.title + br + post.body);
          list.append(li);
        } //if
      }); //forEach
      li.text();
      list.append(li);
    }); //get function
  }); //button4 onclick

  $("#5").click(function() {
    list.text("");
    $.post(
      "http://jsonplaceholder.typicode.com/posts/",
      { title: "This is a new post!", body: "This is the body of said post." },
      function(post) {
        const li = $("<li>");
        const br = "<br>";
        li.html("New Post ID: " + post.id + br + post.title + br + post.body);
        list.append(li);
      }
    ); //post function
  }); //button5 onclick

  $("#6").click(function() {
    $.ajax({
      method: "PUT",
      url: "http://jsonplaceholder.typicode.com/posts/12",
      data: {
        userId: 1,
        title: "This is a new post!",
        body: "This is the new-new post."
      },
      function(post) {
        const li = $("<li>");
        const br = "<br>";
        li.html(
          "New Post ID: " + post.id + br + post.title + br + "New new post!"
        );
        list.append(li);
      },
      complete: function(response) {
        console.log(response.responseJSON);
      } //function(repsonse)
    }); //ajax
  }); //click

  $("#7").click(function() {
    list.text("");
  }); //button7 onclick

  $("#8").click(function() {
    list.text("");
    $.ajax({
      method: "DELETE",
      url: "http://jsonplaceholder.typicode.com/posts/12",
      complete: function(response) {
        list.text("Success! Post #12 has been deleted.");
      }
    });
  }); //button8 onclick

  $("#9").click(function() {
    list.text("");
  }); //button9 onclick
}); //document ready function

//Use jQuery to do the following things with the http://jsonplaceholder.typicode.com/ API.
// -Create buttons that do each of the tasks below
// --Render the results to the page in html elements;
// --Hide the results from the previous actions;
//???? 6.Replace the post with id of 12 and render the responseJSON
// 7.Update the title of post with id of 12 and render responseJSON
// 8.Delete the post with id of 12 and render a success message
// 9.Display a list of posts:
// When the user clicks on a post, display all the comments from that post
// Display a link back to all posts

// NOTES:
// 1. GET - Requests data, parameters in querystring
// 2. POST - Submits data to be processed, parameters in body
// 3. PUT - Adds or replaces item at a specific location
// 4. DELETE - Deletes an item at a specific location
// jQuery provides $.get() and $.post() methods for convenience and $.ajax() for general purpose.
