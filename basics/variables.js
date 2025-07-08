const accountID = 181201
let accountEmail = "test@yahoo.com"
var accountPassword = "test123"

test()
function test() {
    if (true) {
       var x = 5;
    }
    console.log(x); // 5 — even though x was defined inside the if block!
}
// x not preferable, because of scope issues see it works outside of block
x = 10;
console.log(x);


