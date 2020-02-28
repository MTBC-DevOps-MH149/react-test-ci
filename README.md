## Deploy React App To Heroku Using CircleCi
The concept is to develop pipeline to automate Continuous Integration and Continuous Development. 
What we’re trying to do with this tutorial is to automate our code commits being tested and automatically deployed with CircleCI.

#### Requirements : ####
* Sign up for [CircleCI](https://circleci.com/signup/ "Named link title") using Github
![Image of circleci](https://miro.medium.com/max/3480/1*n8k-SlyRWj5Lyhs6wJ98Pw.png)
* Sign up for [Heroku](https://signup.heroku.com/ "Named link title") using Github.
![Image of Heroku](https://camo.githubusercontent.com/6800a94617cea52c712f849df731b823c86c6dc9/687474703a2f2f616b697261636869782e73332e616d617a6f6e6177732e636f6d2f6c6573736f6e5f335f332f30315f6865726f6b755f7369676e75705f706167652e706e67)
* Install [Git](https://git-scm.com/ "Named link title")in your machine.
* NodeJS 10.16.3

### Create React App ###
Let’s get started! We’re going to start by doing the basic the create-react-app:
#### ` npx create-react-app react-test-circleci `

#### Clone this repository or add some React App code for testing purpose. ####
In the project directory, you can run for intial testing purposes:
#### ` npm start` 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

#### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Making Repository for project on Github.
Make new public repository in github with name `react-test-circleci`. Initialize this repository with a README.

Link the folder to the repository: 
`git remote add origin https://github.com/{youraccount}/react-test-circleci.git`
Lastly, add, commit, and push our code:
`git add .`
`git commit -m "INIT: initial commit."`
`git push origin master `

## CircleCI Setup & Config
To setup CircleCI, we need to sign up and connect our GitHub account.
[CircleCI](https://circleci.com/signup/ "Named link title"). 
#### Add Project
Go to `Add Project` on the left sidebar.
#### Set Up Project`
Make sure to setup you new `react-test-circleci`

#### Configure Project ####
Select Linux and select Node. Copy to your clipboard the config.yml file and then click Start Building.
![Image of circleci](https://miro.medium.com/max/3480/1*Q051UmLXj92AM_8XzpTI7g.png)
