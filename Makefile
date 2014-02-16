REPORTER = dot

test:
	@NODE_ENV=test ./node_modules/.bin/mocha --recursive\
		--reporter $(REPORTER)

test-w:
	@NODE_ENV=test ./node_modules/.bin/mocha --recursive\
		--reporter $(REPORTER) \
		--growl \
		--watch

test-lint:
	@eslint -c eslint.json lib

test-cov: coverage

doc:
	@echo "Generating documentation"
	@jsdoc lib/ README.md -d pages/ -r
	@echo "  Don't forget to commit the changes in the pages sub module"

coverage:
	NODE_ENV=test YOURPACKAGE_COVERAGE=1 ./node_modules/.bin/mocha --recursive\
		--require blanket \
		--reporter mocha-lcov-reporter | ./node_modules/coveralls/bin/coveralls.js

.PHONY: test test-w coverage test-cov
