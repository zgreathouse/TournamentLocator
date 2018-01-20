## Features
Notes: Below are some of the features and projected challenges surrounding them


| Feature                         | Description                                                                                      |
| --------------------------------|:------------------------------------------------------------------------------------------------ |
| Authentication                  | Implement Google and Facebook OAuth and additional page to set city and username                 |
| User pages 	                    | Give user's their own profile view to see their own tournaments and edit user properties         |
| Full CRUD for Tournaments       | Allow for users to Create, Read, Update, and Delete Tournaments                                  |
| Full CRUD for Posts             | Allow for users to Create, Read, Update, and Delete Posts                                        |
| Full CRUD for Comments          | Allow for users to Create, Read, Update, and Delete Comments                                     |
| Google Maps API                 | Implement google maps api for users to locate tournaments                                        |
| Search Function with Filtering  | Implement search function to find tournaments and allow for users to filter their search results |
| Implement CDN for images        | Use AWS S3 buckets to save image files and save the image url as the reference to the file       |

***
## Schema
Notes: This is a working schema subject to change

#### UserSchema

| Field                           | DataType                                    |
| --------------------------------|:------------------------------------------- |
| username                        | String                                      |
| googleID		                    | String                                      |
| facebookID	                    | String                                      |
| title		                        | String                                      |
| city                            | String                                      |
| travelRange                     | { type: Number, default: 25 }               |
| followedGames                   | [String]                                    |
| followedSeries                  | [String]										                |
| finishAccountSetup              | { type: Boolean, default: false }			      |
| tournaments                     | [ tournamentSchema ]                        |

#### TournamentSchema

| Field                           | DataType                                    |
| --------------------------------|:------------------------------------------- |
| title                           | String                                      |
| game                            | String                                      |
| tags                            | [ String ]                                  |
| tournamentOrganizer             | { type: Schema.Types.ObjectId, ref: 'User'} |
| streamLink                      | String                                      |
| twitterLink                     | String                                      |
| date                            | Date                                        |
| startTime                       | Date                                        |
| endTime                         | Date                                        |
| venueAddress                    | String                                      |
| venueFee                        | Number                                      |
| entryFee                        | Number                                      |
| potBonus                        | Number                                      |
| maxEntrants                     | Number                                      |
| bannerImage                     | String                                      |
| series                          | Boolean                                     |
| forum                           | [postSchema]                                |

#### PostSchema

| Field                           | DataType                                    |
| --------------------------------|:------------------------------------------- |
| tournamentId                    | Number                                      |
| _user                           | { type: Schema.Types.ObjectId, ref: 'User'} |
| title                           | String                                      |
| datePosted                      | Date                                        |
| comments                        | [commentSchema]                             |

#### CommentSchema

| Field                           | DataType                                    |
| --------------------------------|:------------------------------------------- |
| postId                          | Number                                      |
| _user                           | { type: Schema.Types.ObjectId, ref: 'User'} |
| body                            | String                                      |
| dateSubmitted                   | Date                                        |

***
## Routes

Notes: Below are the Auth routes as well as full CRUD for Tournaments, Posts, and Comments. Some research is required to determine how our backend api will communicate with google maps or if we will need to. Additionally, there may be some challenges around filtering searches. Filtering searches will most likely be implemented in the backend to improve speed and look up. We may need to implement some query methods from the mongoose library for filtering.

#### Auth Routes

| Route                           | Type          | Purpose                                                             |
| --------------------------------|:-------------:| :-------------------------------------------------------------------|
| ‘/auth/google’                  | GET           | Google OAuth (login/ sign up)                                       |
| ‘/auth/google/callback’         | GET           | Google OAuth (callback url after authentication)                    |
| ‘/auth/facebook’                | GET           | Facebook OAuth (login/ sign up)                                     |
| ‘/auth/facebook/callback’       | GET           | Facebook OAuth (callback url after authentication)                  |
| ‘/api/current_user’             | GET           | Get the current user                                                |
| ‘/api/logout’                   | GET           | Logout the current user                                             |

#### Tournament Routes

| Route                           | Type          | Purpose                                                             |
| --------------------------------|:-------------:| :-------------------------------------------------------------------|
| ‘/api/tournaments’              | GET           | Get an index of all the up and coming tournaments (and current)     |
| ‘/api/:userId/tournaments/’     | GET           | Get an index of all the tournaments created by a user               |
| ‘/api/tournaments’              | POST          | Create a new tournament in the database                             |
| ‘/api/tournaments’              | PATCH         | Update (edit) an existing tournament                                |
| ‘/api/tournaments’              | DELETE        | Delete an existing tournament                                       |

#### Post Routes

| Route                           | Type          | Purpose                                                             |
| --------------------------------|:-------------:| :-------------------------------------------------------------------|
| ‘/api/post’                     | GET           | Get an index of all the the posts for a given tournament            |
| ‘/api/post’                     | POST          | Create a new post to be added to a Tournament’s collection of posts |
| ‘/api/post’                     | PATCH         | Update (edit) an existing post                                      |
| ‘/api/post’                     | DELETE        | Delete an existing post                                             |

#### Comment Routes

| Route                           | Type          | Purpose                                                             |
| --------------------------------|:-------------:| :-------------------------------------------------------------------|
| ‘/api/comment’                  | GET           | Get an index of all the the comments for a given post               |
| ‘/api/comment’                  | POST          | Create a new post to be added to a post’s collection of comments    |
| ‘/api/comment’                  | PATCH         | Update (edit) an existing comment                                   |
| ‘/api/comment’                  | DELETE        | Delete an existing comment                                          |

***
## FrontEnd Routes
Notes: Below are the routes and pages they are associated with. May have a separate page for the ‘forum’ of each tournament.

| Route                           | Page                                        |
| --------------------------------|:--------------------------------------------|
| '/'                             | Landing Page                                |
| '/'                             | Dashboard                                   |
| '/tournaments/${id}'            | Tournament Show Page                        |
| '/tournaments/${new}            | Tournament Creation Form                    |

***
## State Shape

##### Example State Shape (Landing Page)

```javascript
{
	state: {
		auth : {
			currentUser: null
		},
		tournaments: {
			39: {
				id: 39
				title: ‘Cell Games’,
				game: ‘Dragon Ball Fighter Z’,
				…
			}
			43: {
				id: 43
				title: ‘evo’,
				game: ‘Melee’,
				…
			},
			62: {
				id: 62
				title: ‘Iron Fist Tournament’,
				game: ‘Tekken 7’,
				…
			}
			78: {
				id: 78
				title: ‘Versus’,
				game: ‘Street Fighter: V’,
				…
			},
			86: {
				id: 78
				title: ‘Capcom Cup’,
				game: ‘Street Fighter: V’,
				…
			},
		},
		posts: {},
		comments: {}
	}
}
```
##### Example State Shape (tournament show page)
```javascript
{
	state: {
		auth : {
			currentUser: {
				id: 9,
				username: 'EvoChamp001',
				title: 'Competitor',
				city: 'SanFrancisco',
				travelRadius: 25
			}
		},
		tournaments: {
			43: {
				id: 43
				title: ‘evo’,
				game: ‘Melee’,
				…
			}
		},
		posts: {
			449: {
				id: 449,
				title: ‘Parking Situation
			}
		},
		comments: {
			936: {
				id: 936,
				body: ‘There is street parking available, and there is a near by parking garage’
			}
		}
	}
}
```

##### Example State Shape (tournament index with the ‘SFV’ term added to the search filter)
```javascript
{
	state: {
		auth : {
			currentUser: {
				id: 9,
				username: 'EvoChamp001',
				title: 'Competitor',
				city: 'SanFrancisco',
				travelRadius: 25
			}
		},
		tournaments: {
			78: {
				id: 78
				title: ‘evo’,
				game: ‘Melee’,
				…
			}
			78: {
				id: 78
				title: ‘Versus’,
				game: ‘Street Fighter: V’,
				…
			},
			86: {
				id: 78
				title: ‘Capcom Cup’,
				game: ‘Street Fighter: V’,
				…
			},
		},
		posts: {},
		comments: {}
	}
}
```
