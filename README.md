# MVC Challenge - Tech Blog

GIVEN a CMS-style blog site:

- WHEN I visit the site for the first time THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
- WHEN I click on the homepage option THEN I am taken to the homepage
- WHEN I click on any other links in the navigation THEN I am prompted to either sign up or sign in
- WHEN I choose to sign up THEN I am prompted to create a username and password
- WHEN I click on the sign-up button THEN my user credentials are saved and I am logged into the site
- WHEN I revisit the site at a later time and choose to sign in THEN I am prompted to enter my username and password
- WHEN I am signed in to the site THEN I see navigation links for the homepage, the dashboard, and the option to log out
- WHEN I click on the homepage option in the navigation THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
- WHEN I click on an existing blog post THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment 
- WHEN I enter a comment and click on the submit button while signed in THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
- WHEN I click on the dashboard option in the navigation THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
- WHEN I click on the button to add a new blog post THEN I am prompted to enter both a title and contents for my blog post
- WHEN I click on the button to create a new blog post THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
- WHEN I click on one of my existing posts in the dashboard THEN I am able to delete or update my post and taken back to an updated dashboard
- WHEN I click on the logout option in the navigation THEN I am signed out of the site
- WHEN I am idle on the site for more than a set time THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

## Created With:
- Node js
  - Express
    - Express Session
    - Connect Session Sequalize
    - Express Handlebars
  - Sequalize
  - Handlebars
  - dotenv
  - bcrypt
- MySQL
- HTML
- CSS

## Techie Blog
Techie Blog is a Wordpress style blog for tech professionals.  The blog consists of several functional areas.

### Home
The homepage contains a list of the current blog posts.  For each blog you can view the title, contents, creation date, user who created the post, and how many comments the post currently has.  Clicking on a post will display that post with its comments.  Users who are not logged in will have the options to login or sign up. Users do not have to be logged in to view posts or their comments.  In order to submit posts or comments, the user must log in.  

### Dashboard
The dashboard contains an area for a user who has logged in to create a new post or edit/delete a previous post.  As soon as a user logs in, the user will be directed to their dashboard.

### Login
The login page requires the user to provide a username and password to access their account.  Once a user logs in, they will be redirected to their dashboard.

### Logout
Users who are logged in will have the option to logout.  Logging out ends the session and prevents the user from adding or editing until they log back in.

### Sign Up
The sign up page asks the user to create a username and password.  Once the user creates an account, they will be directed to login to begin submitting post and comments.

## Deployed Application

https://floating-reef-40192.herokuapp.com/

## Demo
<img src=https://github.com/texrob20/techie-blog/blob/main/demo/hompage.png>
<img src=https://github.com/texrob20/techie-blog/blob/main/demo/Dashboard.png>
<img src=https://github.com/texrob20/techie-blog/blob/main/demo/Edit_post.png>
