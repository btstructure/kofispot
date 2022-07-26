User.destroy_all
CoffeeSpot.destroy_all
Comment.destroy_all
# Event.destroy_all

user1 = User.create(username: 'Skylar', password: 'password')
user2 = User.create(username: 'Annie', password: 'password2')
user3 = User.create(username: 'Justin', password: 'password3')
user4 = User.create(username: 'Samantha', password: 'password4')

coffee_spot1 = CoffeeSpot.create(name: "Lenox Coffee" , description: "Lenox Coffee roasts its beans out of Red Hook and sources its milk upstate from Battenkill Valley Creamery.", location: "60 W 129th St, New York, NY 10027", phonenumber: "(646) 833-7839" , average_rating: 4)
coffee_spot2 = CoffeeSpot.create(name: "Chalait" , description: "Matcha is the headliner at Chalait, a shop that bounced around Manhattan before settling down on the Upper West Side. Customers can get anything from perfectly-whisked, ceremonial-grade tea to a warm and comforting matcha latte. ", location: "461 Amsterdam Ave, New York, NY 10024", phonenumber: "(646) 590-3133" , average_rating: 3)
coffee_spot3 = CoffeeSpot.create(name: "Variety Coffee Roasters", description: "Variety Coffee Roasters is all grown up: One of the pioneers of NYC’s coffee scene, Variety’s new-ish shop on the Upper East Side is all wood paneling and tasteful lighting.", location: "1269 Lexington Ave, New York, NY 10028", phonenumber: "(212) 289-2104", average_rating: 5)
coffee_spot4 = CoffeeSpot.create(name: "Kinship Coffee" , description: "Not content to let Long Island City have all the Queens coffee fun, Kinship helms a beloved three-cafe operation throughout Astoria.", location: "30-5 Steinway St, Astoria, NY 11103", phonenumber: "(646) 468-7149", average_rating: 4)


comment1 = Comment.create(rating: 3 , comment: "It was alright", user_id: user1.id , coffee_spot_id: coffee_spot1.id)
comment2 = Comment.create(rating: 4, comment: "Pretty good", user_id: user2.id, coffee_spot_id: coffee_spot2.id)
comment3 = Comment.create(rating: 2, comment: "Drinkable", user_id: user3.id , coffee_spot_id: coffee_spot1.id)
comment4 = Comment.create(rating: 4, comment: "Pretty good", user_id: user1.id , coffee_spot_id: coffee_spot3.id)
comment5 = Comment.create(rating: 5, comment: "Exceptional coffee", user_id: user2.id , coffee_spot_id: coffee_spot3.id)
comment6 = Comment.create(rating: 5, comment: "Exceptional coffee", user_id: user4.id , coffee_spot_id: coffee_spot2.id)
comment7 = Comment.create(rating: 4, comment: "Pretty good", user_id: user4.id, coffee_spot_id: coffee_spot1.id)
comment8 = Comment.create(rating: 1, comment: "Not good", user_id: user3.id, coffee_spot_id: coffee_spot4.id)
comment9 = Comment.create(rating: 3, comment: "It was alright", user_id: user3.id , coffee_spot_id: coffee_spot2.id)
comment10 = Comment.create(rating: 2, comment: "Drinkable", user_id: user1.id , coffee_spot_id: coffee_spot4.id)


# event1 = Event.create(time: , coffee_spot_id:, user_id: )
# event2 = Event.create(time: , coffee_spot_id:, user_id:)
