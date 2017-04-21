#!/usr/bin/env bash

./node_modules/.bin/eslint -c ./.eslintrc ./features/hooks
./node_modules/.bin/eslint -c ./.eslintrc ./features/step_definitions
./node_modules/.bin/eslint -c ./.eslintrc ./lib
./node_modules/.bin/eslint -c ./.eslintrc ./page-objects
./node_modules/.bin/eslint -c ./.eslintrc ./nightwatch.conf.js
