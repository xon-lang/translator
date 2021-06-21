#!/bin/sh

if [[ $(git diff --name-only --staged) ]]; then
    if [[ $(git diff --name-only --staged | grep '.ts$') ]]; then
        echo "done"
        # npm test
    fi
else
    if [[ $(git diff --name-only | grep '.ts$') ]]; then
        echo "done"
        # npm test
    fi
fi
