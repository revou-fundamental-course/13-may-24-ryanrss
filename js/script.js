let isActive = "luas";
const hitungLuas = (tipe) => {
  if (tipe === "luas") {
    let alas = document.getElementById("alas").value;
    let tinggi = document.getElementById("tinggi").value;
    if (!Number(alas) || !Number(tinggi)) {
      console.log("invalid input ");
      return alert("INVALID INPUT!!! please input numeric chars");
    }
    let result = (1 / 2) * alas * tinggi;
    document.getElementById("result1").innerHTML = result;
    console.log(result);
  } else {
    let s1 = Number(document.getElementById("s1").value);
    let s2 = Number(document.getElementById("s2").value);
    let s3 = Number(document.getElementById("s3").value);
    let result = s1 + s2 + s3;
    document.getElementById("result2").innerHTML = result;
    console.log(result);
  }
};
function hasClass(element, className) {
  return element.classList.contains(className);
}
const switchCalc = (tipe) => {
  // let switcher = (document.getElementsByClassName("luas").style.display =
  //   block);
  let luasBtn = document.getElementById("luasbtn");
  let kelBtn = document.getElementById("kelbtn");
  let hitungLuas = document.getElementById("hitungLuas");
  let hitungKel = document.getElementById("hitungKel");
  if (tipe != isActive) {
    if (!hasClass(luasBtn, "active")) {
      luasBtn.className = "active";
      kelBtn.className = "";
      isActive = "luas";
      hitungKel.style.display = "none";
      hitungLuas.style.display = "block";
    } else {
      kelBtn.className = "active";
      luasBtn.className = "";
      isActive = "keliling";
      hitungKel.style.display = "block";
      hitungLuas.style.display = "none";
    }
  } else return;
  // document.getElementById("kelbtn").className += "active";
};
