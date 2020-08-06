env:
	npm i express express-validator bcryptjs config gravatar jsonwebtoken mongoose request

dev:
	npm i -D nodemon concurrently

run:
	npm run server

create-react-app:
	npx create-react-app client
	push client
	npm i axios react-router-dom redux react-redux redux-thunk redux-devtools-extension moment react-moment
	popd client