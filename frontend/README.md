
# Help! - A Yelp Clone
[Help!](https://help-yelp-clone.herokuapp.com/)

[Wiki](https://github.com/EricGartner47/w16-soloProject/wiki)

## At a Glance
Help! is a full stack web application that allows logged in users to:
- View Heroes, their location, and motto
- Create a Hero
- Edit a Hero
- Delete a Hero
- View reviews of each Hero
- Create a review for a Hero
- Edit a review for a Hero
- Delete a review for a Hero

## Application Architecture
Help! is built with a React and Redux frontend with CSS styling and an Express and Sequelize backend. PostgreSQL was used for the database.

## Frontend Technologies Used

Help! uses React and Redux to generate the HTML elements, then CSS is used to handle the styling of those elements.

## Backend Technologies Used
An Express server and sequelize is used to handle the backend communication.


## Key Features
### User Authorization
User authorization is handled in JS using Bcrypt for password hashing. When users log in, the password they provide is rehashed and checked against the original password.

### Create a Hero
An authorized user can create a hero that can then be seen by any user. Only the authorized user may then edit or delete the hero.

### Leave a Review
An authorized user can create a hero that can then be seen by any logged in user. Only the authorized user may then edit or delete the review.

## Conclusion and Next Steps
I am happy with the functionality, however, I need to spend more time on the styling. Additionally, I wish I was able to finish the functionality of the search bar. 
