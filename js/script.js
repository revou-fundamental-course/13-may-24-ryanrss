const hitungLuas = (tipe) => {
  let alas = document.getElementById("alas").value;
  let tinggi = document.getElementById("tinggi").value;
  if (!Number(alas) || !Number(tinggi)) {
    console.log("invalid input ");
    return alert("INVALID INPUT!!! please input numeric chars");
  }
  let result = (1 / 2) * alas * tinggi;
  console.log(result);
};
