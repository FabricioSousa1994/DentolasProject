# Dentinho

## What is Dentinho?

Dentinho is a tipical Madeiras's free dish that comes along with a drink that you ask on a Bar.
This is a tipical Maderia's tradition, and eaxch Bar will have a diferent Dentinho.
On our website you will be able to classify each Dentinho (as a user/ client), and add new Dentinhos, edit and delete(as a Bar owner)

## What will be on our site?

Here you will be able to see a picture of each entinho along with it's clasification, you will also be able to see the day time, so that you can see if it's a good day for a nice walk :)

You will also be able to search by each bar, or each Dentinho so that you can visit the best Dentinhos on the Island.
You can also add a Dentinho to your favorit list so that you can remember all your favorits for the next visit to Madeira.


## Routes

GET	 /	Main page route.    Renders home index view (some dentinho's pic's and a short story)

GET	/   dentinhos	        Renders dentinhos-list view.	
GET	/   dentinho/details/:id	Renders dentinho-details view for the particular dentinho/restaurant.

GET	 /  signup	            Renders signup form view. client vs restaurant owner
POST /  signup	            Sends Sign Up info to the server and creates user in the DB.	{ email, password, restaurant owner }

GET	 /  login	            Renders login form view.
POST /  login	            Sends Login form data to the server.	                         { email, password }

GET	 /  restaurant/edit-profile	Private route. Renders edit-profile form view.
PUT	 /  restaurant/edit-profile	Private route. Sends edit-profile info to server and updates user in DB.	{ email, password, restaurantName, dentinhoName, dentinhoImageUrl, restaurantAddress }

GET	 /  user/edit-profile	Private route. Renders edit-profile form view.
PUT	 /  user/edit-profile	Private route. Sends edit-profile info to server and updates user in DB.	{ email, password, firstName, lastName, userImageUrl}

GET	 /  user/favorites	    Private route. Render the favorites view.
POST /  user/favorites/Private route.   Adds a new favorite for the current user.	{ dentinhoName, restaurantName, dentinhoImage }
DELETE	/ private/favorites/:dentinhoId	Private route. Deletes the existing favorite from the current user.	


## Models

user/client 
{
  firstName: String,
  lastName: String,
  userImageURL: String
  email: String,
  password: String,
  favorites: [FavoriteId],
  isOwner:{
    type: Bollean,
    required: true
  }
}

Favorites 
{
  placeId: String,
}


Bar owner
{
  name: String,
  opening_hours: String,
  address: String,
  rating: Number,
  picture_url: "",

}

Dentinho
{
    Name: String,
    RestaurantName: String
    imageURL: String,
}





