var Counter = function() {
        Counter.prototype.count++;
};
Counter.prototype.count = 0;

new Counter();
new Counter();
console.log((new Counter()).count);
