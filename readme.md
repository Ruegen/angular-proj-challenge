# Users list, angularjs 1.7.5

## working online example

[link to example](http://)

## to get it running locally

```
npm install; npm run dev
```

## Opening comments

I tried to follow as closely as I could with with the john papa style guide
https://github.com/johnpapa/angular-styleguide

There's a lot to read through that so it will a bit more time to fully work through all the guide.

It recommended router-ui so I used it.

Happy to rebuild this with tests and git flow on request.

## folder setup

```
.
├── app
│   ├── components
│   │   └── users
│   ├── layout
│   └── utils
├── css
├── data
└── fonts
```

## state setup

- factory "UserState"
  - users
  - all, allSelected

## api

User service that fetches both json files as and returns them as one promise (using `$q.all`) and then returns the users and users avatars. I then map each user to their avatar and append the avatar. Finally I sort them alphabetically. I figured this would be a better approach as I didn't want to make extra api calls for the avatars as that would tax the server in a real world scenario.

# ui-router

I used ui-router for routing (it made things easier) but I couldn't get an npm package of version 2 without building my own build of the package.

# css

I added a few overrides and custom classes to get it to look as close as I could to the images provided. I had to use bootstrap sass to make this easier.

# build

NOTE: I used parcel js for time reasons. It doesn't resolve folder positions as far as I am aware so the build ships everything into one folder. This is messy but quick. In a production setup I would try something else recommended.

It did allow me to however use new js throughout the code as well as import sass and more.

## git

Because of time constraints, no proper setup and early delivery I haven't included a full git workflow with the project.

Mostly because I was revising angular js and mostly tinkering around with the project. I had planned to rebuild everything from scratch with a better understanding of process and present that with proper git commits.

## tests

There are no front end angular tests other than manual tests (because of revision with angular). I had planned to add include tests in the rebuild.
