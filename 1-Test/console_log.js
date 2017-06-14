// Backup console.log so we can restore it later
var ___log = console.log;
/**
 * Silences console.log
 * Undo this effect by calling unmute().
 */
function mute() {
    console.log = function(){};
}
/**
 * Un-silences console.log
 */
function unmute() {
    console.log = ___log;
}



// Then, you can write code using mute() and unmute() like so:
mute();
MyClass.functionThatPrintsOutput();
unmute();
