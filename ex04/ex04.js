l1 = 65;
l2 = 973;
l3 = 93;


var conditia1 = (l1 + l2) > l3;
var conditia2 = (l1 + l3) > l2;
var conditia3 = (l2 + l3) > l1;
if (conditia1 && conditia2 && conditia3) {
    console.log("DA: triunghi");
} else {
    console.log("Nu triunghi");
}