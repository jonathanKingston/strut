REPORTER = dot

test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER)

test-w:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--growl \
		--watch

test-cov: coverage

doc:
	jsdoc lib/ README.md -d pages/
	@echo "  Don't forget to commit the changes in the pages sub module"

coverage:
	NODE_ENV=test YOURPACKAGE_COVERAGE=1 ./node_modules/.bin/mocha \
		--require blanket \
		--reporter mocha-lcov-reporter | ./node_modules/coveralls/bin/coveralls.js

.PHONY: test test-w coverage test-cov
