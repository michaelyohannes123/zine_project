const marker_icon_links = {'Gumbo': 'gumbo_image2.jpg', 'Budae Jjigae': 'budae_jjigae_image2.jpg',
  'Soup Joumou': 'soup_joumou_image2.jpg', 'Korean Carrot Salad': 'korean_carrot_image2.jpg',
  'Kota Sandwich': 'kota_sandwich_image2.jpg'};
const food_image_links = {'Gumbo': 'gumbo_image.jpg', 'Budae Jjigae': 'budae_jjigae_image.jpg',
  'Soup Joumou': 'soup_joumou_image.jpg', 'Korean Carrot Salad': 'korean_carrot_image.jpg',
  'Kota Sandwich': 'kota_sandwich_image.jpg'};
const food_place_image_links = {'Gumbo': 'gumbo_cook_off.jpg', 'Budae Jjigae': 'budae_jjigae_street.jpeg',
  'Soup Joumou': 'soup_joumou_event.jpg', 'Korean Carrot Salad': 'korean_carrot_market.jpg',
  'Kota Sandwich': 'kota_festival.jpg'};
const place_to_food = {'Lousiana': 'Gumbo', 'Uijeongbu': 'Budae Jjigae',
  'Haiti': 'Soup Joumou', 'Central Asia': 'Korean Carrot Salad',
  'South Africa': 'Kota Sandwich'};
const food_to_place = {'Gumbo': 'Lousiana', 'Budae Jjigae': 'Uijeongbu',
  'Soup Joumou': 'Haiti', 'Korean Carrot Salad': 'Central Asia',
  'Kota Sandwich': 'South Africa'};
const coordinates = {'Lousiana': [-93.6454157, 30.9226666], 'Uijeongbu': [127.0278804, 37.7326127],
  'Haiti': [-74.2365031, 19.0344142], 'Central Asia': [58.6561647, 44.144859],
  'South Africa': [23.9705474, -29.7930007]};
const recipe_video_links = {'Gumbo': 'https://www.youtube.com/embed/ic2ycE0NnNA',
  'Budae Jjigae': 'https://www.youtube.com/embed/euVyBKNfxkk',
  'Soup Joumou': 'https://www.youtube.com/embed/Tx04BiIGNOI',
  'Korean Carrot Salad': 'https://www.youtube.com/embed/8lIiPiQohEU',
  'Kota Sandwich': 'https://www.youtube.com/embed/Z4R_DVIY_0w'};
const food_labels = {'Gumbo': 'A staple of Louisiana cuisine',
  'Budae Jjigae': 'A staple of Korean cuisine',
  'Soup Joumou': 'A staple of Haitian cuisine',
  'Korean Carrot Salad': 'A staple of Russian cuisine',
  'Kota Sandwich': 'A staple of South African cuisine'};
const food_information = {
  'Gumbo': 'Gumbo is a stew that involves a plethora of ingredients, with some ingredients being regional to Louisiana and other ingredients being a product of the colonization of the "New World". For example, common ingredients in gumbo like okra were brought to Louisiana via newly arrived African slaves. It’s origins are not really fixed, as it’s more so an amalgamation of many cultural interactions during that proto-globalization time period. However, gumbo’s origins though can be traced back to West Africa, as evident etymologically with the word "gumbo" being traced to the word "ki ngombo," which means okra in numerous West African languages. By the mid 1800s though, gumbo became associated with New Orleans due to how integral the dish became to their local culture. The arrival of enslaved Africans to Louisiana during the early 18th century was a vital reason for gumbo’s modern existence, as ingredients like gumbo, which is an important ingredient in making the stew characteristically thick, were brought from Africa. Many slaves who served as cooks to their masters, often acting innovatively in combining a variety of ingredients with their African heritage in mind, which helped lead to the creation of dishes like gumbo. After slavery ended, gumbo continued to be culturally important and celebrated in African American communities in the Jim Crow South. Today gumbo is an important part of Mardi Gras festivities, and continues to be a cultural staple in New Orleans, with many restaurants and people competing in New Orleans to have the best gumbo in the city through cook offs.',

  'Budae Jjigae': 'Budae Jjigae is a South Korean stew dish made of processed meats and vegetables. The dish originated during the Korean War period, where during that time there was much destruction and devastation occuring on the Korean peninsula. The US during that time sent many troops there, setting up many bases on the peninsula that to this day are still in operation. With US army bases in South Korea and many Koreans starving during that time, many of them scrounged up leftovers from those bases, regardless of how edible those foods were, and put them into a stew. Oftentimes American processed meats from the bases, like hot dogs and such, were a part of those stews if the Koreans were lucky enough to find some. A bit after the Korean War ended, Koreans began to take this dish they ate out of desperation, and turn it into their own by integrating Korean vegetables with the American processed meats. Many of the Koreans who lived during the Korean War period and made budae jjigae in order to survive, used that experience to create restaurants that served the dish during the 1960s. This kickstarted the worldwide popularity of the dish that to this day is still going strong, with the dish becoming symbolic of South Korea’s turbulent past and its relationship with the United States in particular, as it’s likely the first fusion dish between the two cultures. The city of Uijeongbu is where budae jjigae originated, where today there are many restaurants there serving the dish,  as it has become inextricably linked with the city’s culture.',

  'Soup Joumou': 'Soup Joumou is a pumpkin-based soup dish that is integral to Haitian culture, and is the country’s national dish. The dish is believed to have originated during the French colonization of Haiti. Before Haiti’s revolution the dish is believed to have been only reserved to white French masters, and the enslaved Africans were prevented from consuming the dish. This is despite the fact that the slaves were the one’s who made the dish for the masters, as slaves often served as cooks. Right after Haiti won its war for independence against the French in the early 1800s, the newly freed Haitians began consuming the dish to act in defiance against their former colonizers, and it quickly became inextricably linked with Haitian independence. The dish became so integral to Haitian culture that UNESCO recently designated the dish to be a part of its Intangible Cultural Heritage List. In terms of ingredients there are many variants of the dish, which leave a lot of room for individual families to have their own unique spin on soup joumou. Regardless, the empowering origins of soup joumou has made it a cultural staple within the Haitian community as a whole, as it helps assert a collective identity during the nation’s current turbulent times.',

  'Korean Carrot Salad': 'Also known as "Morkovcha" in Russian, Korean Carrots are commonly consumed in nations that made up the former Soviet Union. The dish originated from displaced Koreans during the late 19th and early 20th century, who are known as the Koryo-Saram ethnic group. Many waves of Koreans mass migrated to the Soviet Union, either by force or to escape conflict back home. Famine, Japanese occupation, and forced relocation and ethnic cleansing by Stalin were the various events that led to the formation of the Koryo-Saram. Those harsh times led to them being isolated as a people and struggling to survive. This led to them having to be resourceful with the dishes they made, which ultimately resulted in Morkovcha’s creation. It’s believed that the dish was based on the traditional Korean kimchi, but since they didn’t have relevant ingredients like cabbage available, they decided to use carrots instead, which was more widely available near them. It\'s important to note that this dish is an invention solely by the Koryo-Saram people, and doesn’t have any direct cultural ties to South Korea. The dish was a product of the plight of Koryo-Saram people during those turbulent times. The dish would become popular throughout the rest of the Soviet Union by the mid 20th century, and today it’s commonly sold in markets all throughout the former Soviet Union, and has become a part of Russian culinary culture as a whole.',

  'Kota Sandwich': 'The kota sandwich is a South African dish that’s unique in its use of a hollowed out bread, where various meats, fries and vegetables are freely placed within the bread, which acts like an edible container. The food originates during the apartheid era, where it’s believed that the dish’s purpose was for African miners who needed a very filling meal that they can carry with them into the mines, hence the bread’s container-like shape. These miners were being overworked, and were forced to spend their days within the mines with little break, which is what necessitated the creation of the kota sandwich. After it’s creation, the kota sandwich spread throughout South Africa during apartheid, within black townships where it was widely sold by local street vendors. These townships were economically neglected due to racial discrimination by the white South African government at the time, so homegrown dishes like the Kota Sandwich became an everyday cultural staple in those black communities. Even after apartheid ended, the kota sandwich is still widely loved for its cultural history, affordability, and for how filling the dish is. Today the dish is even celebrated through local festivals in the country, and is still widely served through local street vendors.'
};
const food_image_event_captions = {
  'Gumbo': 'World Championship Gumbo Cookoff in New Iberia, Louisiana.',
  'Budae Jjigae': 'Budae-jjigae Street in Uijeongbu, South Korea, which is named after the dish. Near that street, there’s many restaurants that serve the dish.',
  'Soup Joumou': 'Joumou soup being served to guests at the Little Haiti Caribbean Marketplace’s annual "Haitian Community Thanksgiving Brunch," in Miami, Florida.',
  'Korean Carrot Salad': 'Korean Carrots sold in Kuilyuk Bazaar, a large market in Uzbekistan.',
  'Kota Sandwich': 'People at the annual Kota Festival in Soweto Township, South Africa. Many people come out to eat kota sandwiches sold by local vendors.'
};
