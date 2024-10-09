const malumot = prompt("Ismingizni kiriting");
alert(`Hurmatli ${malumot}, Sizga ba'zi bir savollarimiz bor!!!`);

let a = 15.5;
let b = 10.35;
alert(`Birinchi vazifa: ${a + b} - bu yerda a+b amaliyotini bajardik!!!`);

let ikkinchiVazifa = prompt("a sonini kiriting");
let uchinchiVazifa = prompt("b sonini kiriting");
let tortinchiVazifa = prompt("c sonini kiriting");

ikkinchiVazifa = Number(ikkinchiVazifa);
uchinchiVazifa = Number(uchinchiVazifa);
tortinchiVazifa = Number(tortinchiVazifa);

alert(
  `Mana Javob: ${
    ikkinchiVazifa * (uchinchiVazifa + tortinchiVazifa)
  } - Biz bu yerda a*(b+c) amaliyotini bajardik!!!`
);

let ab = prompt("To'rtburchakning birinchi tomon uzunligini kiriting:");
let bb = prompt("To'rtburchakning ikkinchi tomon uzunligini kiriting:");

ab = Number(ab);
bb = Number(bb);

let P = (ab + bb) * 2;
let S = ab * bb;

console.log(`To'rtburchak perimetri: ${P}`);
console.log(`To'rtburchak yuzasi: ${S}`);
alert(`To'rtburchak perimetri: ${P}\nTo'rtburchak yuzasi: ${S}`);

let baxo = prompt("Bu vazifalarni bajarganingiz uchun baxolang!!!");
function baxoniTekshirish() {
  if (baxo > 4) {
    alert("Rahmat! Siz yaxshi baxo qo'ydingiz.");
  } else {
    alert("Baxo qo'yishni bilmas ekansiz, 4 dan kichik baxo qo'ydingiz.");
  }
}
baxoniTekshirish();

let d = prompt("Aylanani diametrini kiriting:");
d = Number(d);
let r = d / 2;
let C = 2 * Math.PI * r;
console.log(`Aylanani radiusi: ${r}`);
console.log(`Aylanani uzunligi: ${C}`);
alert(`Aylanani radiusi: ${r}\nAylanani uzunligi: ${C}`);

let tselsiy = prompt("Haroratni Tselsiyda kiriting:");
tselsiy = Number(tselsiy);
let farengeyt = tselsiy * 1.8 + 32;
console.log(`Tselsiy: ${tselsiy}°C, Farengeyt: ${farengeyt}°F`);
alert(`Tselsiy: ${tselsiy}°C\nFarengeyt: ${farengeyt}°F`);

let yosh1 = prompt("Yoshingizni kiriting!!!");
let yosh3 = prompt("Talim olgan joyingizni kiriting");
document.getElementById(
  "yosh"
).innerText = `Sizning yoshingiz ${yosh1}da. Sizning ismingiz ${malumot}. Sizning ta'lim olgan joyingiz: ${yosh3}`;
