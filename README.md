# beer-app

# Table of Contents
- [Team Information](#team-information)
- [Pitch](#pitch)
- [Stretch Goals](#stretch-goals)


# Team Information

Team Name: Alchemy Beer Fellows
App Name: The Beer Buddy
Team Members: Eli, Frank, Morgan, and David
Organization: Alchemy Code Lab


# Pitch

*Problem Statement*
  As the craft beer market has grown, the knowledge required to navigate it has become too dense for the average Joe.

*Recommended Services*
  We are providing a service that queries a database based on user preferences.
  Our algorithms will eliminate the beers that do not meet all of your needs.
  User is presented with three simple parameters and chooses their desired range for each.
  The database includes beer styles and data on their color, alcohol content, and bitterness.

*Benefits*
  Personalized beer style recommendations based on your preferences.


# Stretch Goal

Fourth About-the-Team page

*Input Ideas* Beer glasses in place of sliders.
  Two glasses can be chosen to input a range.
  Three rows for each parameter.
  Beer glasses change to reflect property.
  
 *Output Ideas* 
  Beer in venn diagram





# Object Model Outline

objects:
  -	current state object
    o	name
    o	preferences
  -	Database
    o	beers
      	constructor
      	properties
          •	id ###
          •	stylename
          •	bitterness
          •	color
          •	abv
          •	methods
    o	isInRange
      	returns true or false
    o	
    o	properties
    o	method
      	sorting function 
          •	for each parameter
          •	returns array of good beers
      	matching function  for each pair of parameters
      	matching for all three
          •	compared matched ^
