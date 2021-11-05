

// <!-- alert box -->
<script>
window.alert(5 + 6);
</script>




// <!-- <p>A <b>JavaScript program</b> is a list of <b>statements</b> to be executed by a computer.</p> -->

<p id="demo"></p>

<script>
var x, y, z;  // Declare 3 variables
x = 5;    // Assign the value 5 to x
y = 6;    // Assign the value 6 to y
z = x + y;  // Assign the sum of x and y to z

document.getElementById("demo").innerHTML =
"The value of z is " + z + ".";
</script>


var s = 'Hello';
s.toUpperCase(); // 返回'HELLO'

var s = 'Hello';
var lower = s.toLowerCase(); // 返回'hello'并赋值给变量lower
lower; // 'hello'
