import {Mobile} from "./Ejercicio1";

var Nokia3210:Mobile;
Nokia3210 = new Mobile("Nokia3210","3210","Nokia",4,"red",false,0,100);

var iPhone3G:Mobile;
iPhone3G = new Mobile("iPhone3G","3G","Apple",32,"White",false,2,500);

var SamsungS10:Mobile;
SamsungS10= new Mobile("SamsungS10,","S10","Samsung",256,"Black",true,4,1100)


console.log(Nokia3210.gettheName())
console.log(Nokia3210.gettheModel())
console.log(Nokia3210.gettheTrademark())
console.log(Nokia3210.getthesdSize())
console.log(Nokia3210.gettheColor())
console.log(Nokia3210.gettheIs5G())
console.log(Nokia3210.gettheCameraNumber())
console.log(Nokia3210.getthePrice())

console.log(iPhone3G.gettheName())
console.log(iPhone3G.gettheModel())
console.log(iPhone3G.gettheTrademark())
console.log(iPhone3G.getthesdSize())
console.log(iPhone3G.gettheColor())
console.log(iPhone3G.gettheIs5G())
console.log(iPhone3G.gettheCameraNumber())
console.log(iPhone3G.getthePrice())

console.log(SamsungS10.gettheName())
console.log(SamsungS10.gettheModel())
console.log(SamsungS10.gettheTrademark())
console.log(SamsungS10.getthesdSize())
console.log(SamsungS10.gettheColor())
console.log(SamsungS10.gettheIs5G())
console.log(SamsungS10.gettheCameraNumber())
console.log(SamsungS10.getthePrice())

Nokia3210.setthisIs5G (true);
Nokia3210.setthisCameraNumber(4);

console.log(Nokia3210.gettheName())
console.log(Nokia3210.gettheModel())
console.log(Nokia3210.gettheTrademark())
console.log(Nokia3210.getthesdSize())
console.log(Nokia3210.gettheColor())
console.log(Nokia3210.gettheIs5G())
console.log(Nokia3210.gettheCameraNumber())
console.log(Nokia3210.getthePrice())

console.log(iPhone3G.gettheName())
console.log(iPhone3G.gettheModel())
console.log(iPhone3G.gettheTrademark())
console.log(iPhone3G.getthesdSize())
console.log(iPhone3G.gettheColor())
console.log(iPhone3G.gettheIs5G())
console.log(iPhone3G.gettheCameraNumber())
console.log(iPhone3G.getthePrice())

console.log(SamsungS10.gettheName())
console.log(SamsungS10.gettheModel())
console.log(SamsungS10.gettheTrademark())
console.log(SamsungS10.getthesdSize())
console.log(SamsungS10.gettheColor())
console.log(SamsungS10.gettheIs5G())
console.log(SamsungS10.gettheCameraNumber())
console.log(SamsungS10.getthePrice())

Nokia3210.printObject(Nokia3210);
iPhone3G.printObject(iPhone3G);
SamsungS10.printObject(SamsungS10);
