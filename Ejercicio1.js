"use strict";
exports.__esModule = true;
var Mobile = /** @class */ (function () {
    function Mobile(name, model, trademark, sdSize, color, is5G, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    Mobile.prototype.gettheName = function () {
        return this.name;
    };
    Mobile.prototype.gettheModel = function () {
        return this.model;
    };
    Mobile.prototype.gettheTrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.getthesdSize = function () {
        return this.sdSize;
    };
    Mobile.prototype.gettheColor = function () {
        return this.color;
    };
    Mobile.prototype.gettheIs5G = function () {
        return this.is5G;
    };
    Mobile.prototype.gettheCameraNumber = function () {
        return this.cameraNumber;
    };
    Mobile.prototype.getthePrice = function () {
        return this.price;
    };
    Mobile.prototype.setthisName = function (namee) {
        this.name = namee;
    };
    Mobile.prototype.setthisModel = function (modeel) {
        this.model = modeel;
    };
    Mobile.prototype.setthisTrademark = function (tradeemark) {
        this.trademark = tradeemark;
    };
    Mobile.prototype.setthisSDSize = function (sd) {
        this.sdSize = sd;
    };
    Mobile.prototype.setthisColor = function (colore) {
        this.color = colore;
    };
    Mobile.prototype.setthisIs5G = function (Is5G) {
        this.is5G = Is5G;
    };
    Mobile.prototype.setthisCameraNumber = function (numbeer) {
        this.cameraNumber = numbeer;
    };
    Mobile.prototype.setthisPrice = function (pricee) {
        this.price = pricee;
    };
    Mobile.prototype.printObject = function (name) {
        console.log("The characteristics of the mobile  " + name.gettheName() + " are:");
        console.log("Name: " + this.gettheName());
        console.log("Model: " + this.gettheModel());
        console.log("Trademark: " + this.gettheTrademark());
        console.log("SD Size (GB): " + this.getthesdSize());
        console.log("Color: " + this.gettheColor());
        console.log("Is 5G: " + this.gettheIs5G());
        console.log("Number of Camaras: " + this.gettheCameraNumber());
    };
    return Mobile;
}());
exports.Mobile = Mobile;
//var Nokia3210:Mobile;
//Nokia3210 = new Mobile("Nokia3210","3210","Nokia",4,"red",false,0,100);
//Nokia3210.printObject(Nokia3210)
