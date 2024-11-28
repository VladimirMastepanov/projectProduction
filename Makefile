start:
			npm run start
prod:
			npm run build:prod
dev: 
			npm run build:dev
lint:
			npm run eslint
lintfix:
			npx eslint . --fix
pre:
			npx prettier . --write
test:
			npm run test