"use strict";
exports.__esModule = true;
var Ejercicio1_1 = require("./Ejercicio1");
var Nokia3210;
Nokia3210 = new Ejercicio1_1.Mobile("Nokia3210", "3210", "Nokia", 4, "red", false, 0, 100);
var iPhone3G;
iPhone3G = new Ejercicio1_1.Mobile("iPhone3G", "3G", "Apple", 32, "White", false, 2, 500);
var SamsungS10;
SamsungS10 = new Ejercicio1_1.Mobile("SamsungS10,", "S10", "Samsung", 256, "Black", true, 4, 1100);
var arayObjects;
arayObjects = [Nokia3210, iPhone3G, SamsungS10];
function printAray(aray) {
    console.log("The characteristics of the mobile are:");
    for (var i = 0; i < aray.length; i++) {
        console.log("Name: " + aray[i].gettheName());
        console.log("Model: " + aray[i].gettheModel());
        console.log("Trademark: " + aray[i].gettheTrademark());
        console.log("SD Size (GB): " + aray[i].getthesdSize());
        console.log("Color: " + aray[i].gettheColor());
        console.log("Is 5G: " + aray[i].gettheIs5G());
        console.log("Number of Camaras: " + aray[i].gettheCameraNumber());
    }
}
printAray(arayObjects);
