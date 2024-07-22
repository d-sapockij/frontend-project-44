install: 
	npm ci
	npm link
publish:
	npm publish --dry-run
brain-games:
	node bin/brain-games.js
brain-even:
	node bin/brain-even.js
lint:
	npx eslint .