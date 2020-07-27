Once every decade, an exciting, prestigious, and inspiring bike race takes place in Colorado at the foot of the Rocky Mountains. It's the Boulder Bike Tour, and it's coming up in 2020! The huge hype around the event means it's time to start preparing the whole event now. The organizers need a website for the event and have launched a call for proposals, meaning you will be submitting your idea for the bike tour's site!
Requirements

The organizers have several requirements:

    The website must have an outdoors-y and athletic feeling. They want a clean design and plenty of bicycle or athletic imagery.
    There must be a home page with basic information about the event and a counter that shows the number of months, days, hours, minutes, and seconds until the race (April 1, 2020).
    There must be a photos page that displays photos from Flickr tagged with the following hashtags: #bikerace and #BoulderBikeTour. Since there are likely to be many, there should be only 40 photos displayed at a time (which means you can choose either infinite scroll or pagination).
    There must be a location page that displays all current rider locations. Since the bike race happens in the future, this will be placeholder data (which is provided below)
    There must be a riders page that displays each rider's first name, last name, and city of origin. There should be 20 riders in total. Since the bike race happens in the future, this will be placeholder data (which is provided below).
    The organizers are sponsoring for anyone to come up with a slogan for the race. Therefore, there must be a contest page that allows anyone to submit their first name, last name, email address, and a slogan idea under 50 characters. All fields must have validations. Submissions should be saved to the database in a submissions table.

Placeholder data

Since the riders aren't finalized yet, and their locations aren't available before the race starts, the organizers have given you placeholder data to use as part of your prototype.

Find rider names and their fictional, temporary latitudes and longitudes in this spreadsheet.

The latitudes and longitudes will be useful for visualizing the riders on a map. More info below!
APIs

You'll notice that you're not just making a website with your own content here; you'll need to be using external services, like Flickr and a map API, as part of your final product. This is where APIs enter the picture, which are crucial parts of today's web! APIs allow information and functionalities to be shared and used among multiple platforms, and you'll have your chance to dive into them in this project.
Flickr API

We recommend you use the Flickr Photo APi. The documentation is provided here:  https://www.flickr.com/services/api/

If you need help with using the API, Flickr provides a dedicated User Group:  https://www.flickr.com/groups/api/

Once you're set up with authentication, using the API is straightforward!

Don't worry about the fact that photos you're retrieving today don't have anything to do with the actual bike race, since it's in the future. The organizers only want to see what the site would look like, even if the photos aren't accurate!
Maps API

There are a number of Map APIs available that you could use for this project, for example :

    OpenStreetMap
    OpenLayers
    LeafletJS
    MapQuest
    Mapbox

In the final version of the website, viewers will be able to track riders' locations in real-time. However, because the bike race takes place in the future, you will use static placeholder data for the riders' positions now. The placeholder locations are all in or around the city of Boulder, Colorado. The placeholder data is in a spreadsheet that was linked above (but if you need it again, here it is).

Each rider should be indicated on a map of Boulder as a marker. Find documentation about displaying a map of a certain place, as well as markers, here: https://developers.google.com/maps/documentation/javascript/examples/marker-simple

In order to tell which marker represents each fictional rider, you should also add an information window to each marker that lists a first name and last name. When users click on a marker on the map, the information window will appear. These names should correspond to the riders listed on the riders page of the website (that you define, because the riders are fictional for now). 

Before the race, the organizers will collaborate with the winning to developer to replace the placeholder data with real data and set up real-time rider tracking. This isn't something you need to worry about! The placeholder data is all you need to make a great-looking and realistic prototype.
Design

If you're looking for inspiration, check out other athletic event websites. The following might be helpful (they should just be used as inspiration and are not to be copied).