# javascript-tdd

javascript-tdd is a simple JavaScript project showing how to facilitate the red-green-refactor cycle of test-driven
development with client-side JavaScript using Jasmine and Karma, and at the same time integrating with RequireJS for
better modularity.

## Prerequisites
Node.js (including npm) and PhantomJS (standalone, not as a Node module) should have been installed on the system, and
the environment variable `PATH` should have been configured for them.

## Getting Started
1. Clone this repository to a location of your choosing. I'll refer to this locaition as *PROJECT_HOME*.
1. Install the Node modules karma-jasmine, karma-phantomjs-launcher, and karma-requirejs to the project. This can be
   done by the following steps:
     1. `cd `*PROJECT_HOME*
     1. `npm install karma-jasmine`
     1. `npm install karma-phantomjs-launcher`
     1. `npm install karma-requirejs`

   When finished, *PROJECT_HOME* should have a subdirectory `node_module`, which in turn should have the following
   subdirectories:
     * `.bin`
     * `jasmine-core`
     * `karma`
     * `karma-jasmine`
     * `karma-phantomjs-launcher`
     * `karma-requirejs`
     * `phantomjs-prebuilt`
     * `requirejs`
1. Add `./node_modules/.bin` to the environment variable `PATH`.
1. Enter `karma start` at the command line. You should see output similar to the following:
```
30 03 2016 17:11:20.925:INFO [karma]: Karma v0.13.22 server started at http://localhost:9876/
30 03 2016 17:11:20.935:INFO [launcher]: Starting browser PhantomJS
30 03 2016 17:11:22.527:INFO [PhantomJS 2.1.1 (Windows 7 0.0.0)]: Connected on socket /#32PC47bwZ8ug9oPGAAAA with id 9654327
PhantomJS 2.1.1 (Windows 7 0.0.0): Executed 3 of 3 SUCCESS (0.004 secs / 0.001 secs)
```

## IDE Integration
If you use an IDE that supports Karma integration, you may be able to run the tests from within the IDE and enjoy the
convenience of quickly navigating to failed tests. For example, JetBrain provides a Karma plugin that can be installed
to IntelliJ IDEA.
