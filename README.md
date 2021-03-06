# Apptivist
Apptivist is a simple Angular/Node app with a Postgres database built to help activists host and promote events. It was built in 3 days as part of a Makers Academy hackathon.

![firstscreenshot](https://cloud.githubusercontent.com/assets/16217360/15326510/39caf0de-1c46-11e6-8e2b-1b6ba1bce6a3.png)
![secondscreenshot](https://cloud.githubusercontent.com/assets/16217360/15326514/3b1f6f6e-1c46-11e6-8342-fe9554ed5342.png)


## Installation
Clone repo and install dependencies.
```
git clone https://github.com/eripheebs/apptivist.git
cd apptivist
npm install
bower install
```
Create databases
```
$ psql

psql (9.5.1)
Type "help" for help.

kylebuttner=# create database apptivist_development;
CREATE DATABASE
kylebuttner=# create database apptivist_test;
CREATE DATABASE
```
Start server
```
npm start
```
To run tests, first run these commands in separate terminal tabs
```
npm start NODE_ENV=test
webdriver-manager start
```
Then, in a new tab, run
```
karma start test/karma.conf.js
protractor test/protractor.conf.js
```


## Features (current and future)

### Discovery
* List events
* Search events
* Users
* Tags
* Feed based on user preferences
* Feed based on location
* Feed based on topics

### Recruit
* Users join events
* Edge cases and restrictions
* Post public events
* Share on social media
* See friends attending
* Tiered promotion
* Groups
* Find assistants

### Communication
* Message attendees
* Post to social media
* Collect user info
* Updates

### Organisation
* Make an events
* Event metrics
* Admin privileges
* Checklist of activist basics
* Maps
* Event types
* Review event

## Priorities
Make event (Oranganise)
```
As an organiser,
So that I can host an event,
I would like to create an event.
```
List events (Discovery)
```
As a potential participant,
So that I can find events to join,
I would like to see a list of events.
```
Users (Discovery)
```
As a person,
So that I can use Apptivist,
I would like to create a profile.
```
Join event (Recruit)
```
As a participant,
So that I can indicate my interest to an organiser,
I would like to join an event.
```
Event categories (Discovery)
```
As a user,
So that I can filter events,
I would like for events to be assigned categories.
```
Search (Discovery)
```
As a user,
So that I can filter events,
I would like to be able to perform an event search.
```
Edge cases and restrictions (Recruit)
```
As a user,
So that Apptivist is secure and usable,
I would like user restrictions to be put in place.
```
