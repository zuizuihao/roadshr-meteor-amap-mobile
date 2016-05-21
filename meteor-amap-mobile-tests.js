// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by meteor-amap-mobile.js.
import { name as packageName } from "meteor/meteor-amap-mobile";

// Write your tests here!
// Here is an example.
Tinytest.add('meteor-amap-mobile - example', function (test) {
  test.equal(packageName, "meteor-amap-mobile");
});
