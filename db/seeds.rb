User.destroy_all
CoffeeSpot.destroy_all
Comment.destroy_all
# Event.destroy_all

user1 = User.create(username: 'Skylar', password: 'password')
user2 = User.create(username: 'Annie', password: 'password2')
user3 = User.create(username: 'Justin', password: 'password3')
user4 = User.create(username: 'Samantha', password: 'password4')

coffee_spot1 = CoffeeSpot.create(name: "Lenox Coffee" , image_url: "https://images.squarespace-cdn.com/content/v1/51890445e4b00d33ee9d2e62/1447686757843-BHOHLGIJBJEJ4394ARPP/20131120_Lenox_Coffee-68.jpg" , description: "Lenox Coffee roasts its beans out of Red Hook and sources its milk upstate from Battenkill Valley Creamery.", location: "60 W 129th St, New York, NY 10027", phonenumber: "(646) 833-7839" , average_rating: 4)
coffee_spot2 = CoffeeSpot.create(name: "Chalait" , image_url: "https://th.bing.com/th/id/R.ddedcae0b1cff5c98d0d8d097a174157?rik=sDSH9kk0bZOXOQ&riu=http%3a%2f%2fwww.gpsmycity.com%2fimg%2fadp%2f2730.jpg&ehk=unuVrFTbsnp8uuTpIAf8VcXTI2LC0N%2b6xGkdb0605lY%3d&risl=&pid=ImgRaw&r=0", description: "Matcha is the headliner at Chalait, a shop that bounced around Manhattan before settling down on the Upper West Side. Customers can get anything from perfectly-whisked, ceremonial-grade tea to a warm and comforting matcha latte. ", location: "461 Amsterdam Ave, New York, NY 10024", phonenumber: "(646) 590-3133" , average_rating: 3)
coffee_spot3 = CoffeeSpot.create(name: "Variety Coffee Roasters", image_url: "https://s3-us-west-2.amazonaws.com/wf-fileserver-sync/files/2018/06/107235-bYmwKfT3RoW6tDBAY23g-image-720x440.jpg" ,description: "Variety Coffee Roasters is all grown up: One of the pioneers of NYC’s coffee scene, Variety’s new-ish shop on the Upper East Side is all wood paneling and tasteful lighting.", location: "1269 Lexington Ave, New York, NY 10028", phonenumber: "(212) 289-2104", average_rating: 5)
coffee_spot4 = CoffeeSpot.create(name: "Kinship Coffee" , image_url: "https://images.squarespace-cdn.com/content/v1/5b196ee731d4df831f0acadd/1630267181253-XFXHP980UOERW5HEHYH3/4L8A3417.jpg?format=1500w",description: "Not content to let Long Island City have all the Queens coffee fun, Kinship helms a beloved three-cafe operation throughout Astoria.", location: "30-5 Steinway St, Astoria, NY 11103", phonenumber: "(646) 468-7149", average_rating: 4)
coffee_spot5 = CoffeeSpot.create(name: "Balancero" , image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/Qdnip0aBxWfunefwFXDQuA/348s.jpg",description: "Balancero is one of those coffee bars so tiny you measure the room in inches, not feet.", location: "3095 37th St, Astoria, NY 11103", phonenumber: "(123) 456-7890", average_rating: 3)
coffee_spot6 = CoffeeSpot.create(name: "Little Collins" , image_url: "https://images.squarespace-cdn.com/content/v1/55e3aa56e4b042e7025a9cd4/1573771538703-VS0G11U7NXTCIMFD324S/image-asset.jpeg",description: "This busy, buzzy Midtown shop is an oasis of Australian-style coffee in a neighborhood otherwise glutted with Starbucks and other chain shops.", location: "708 3rd Ave, New York, NY 10017", phonenumber: "(212) 308-1969", average_rating: 3)
coffee_spot7 = CoffeeSpot.create(name: "Culture Espresso" , image_url: "https://images.squarespace-cdn.com/content/v1/5d5728dc255291000172fa57/1565993287055-NAKP4BQL7W98X727JFNL/culture-espresso-home-2.jpg?format=1500w",description: "A solid cortado and drip coffee anchor the menu of this stylish coffee bar near Bryant Park.", location: "72 W 38th St, New York, NY 10018", phonenumber: "(212) 302-0200", average_rating: 2)
coffee_spot8 = CoffeeSpot.create(name: "Sweetleaf" , image_url: "https://images.ctfassets.net/1aemqu6a6t65/4j4HA2xrfPxjWLuY1MeMFx/dbf84f5489317013e964d4da1e75291a/Sweetleaf-LIC-NYC-Photo-Courtesy-Long-Island-City-Partnership-2.jpg?q=72&w=1200&h=630&fit=fill",description: "The original location for Sweetleaf is comfortably crowded. Besides the standard lineup of high-quality espresso drinks, there are two specialty iced coffee drinks worth ordering, both a far cry from the saccharine concoctions served at bigger coffee chains: the Rocket Fuel, cold brew spiked with chicory, maple syrup, and milk, and the Voodoo Child, a Vietnamese-style iced coffee made with sweetened condensed milk. ", location: "10-93 Jackson Ave, Queens, NY 11101", phonenumber: "(917) 832-6726", average_rating: 4)


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



