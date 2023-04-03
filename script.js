let insanlar = []; 
document.getElementById("btn").addEventListener("click", function(){
  let soyad = document.getElementById("Soyad").value;
  let ad = document.getElementById("Ad").value;
  let ata_adi = document.getElementById("Ata_adi").value;
  let cinsi = document.getElementById("Cinsi").value;
  let vetendasliq = document.getElementById("Vetendasliq").value;
  let dogum_tarixi = document.getElementById("Dogum_tarixi").value;
  let vesiqenin_nomresi = document.getElementById("Vesiqenin_nomresi").value;
  let ferdi_iden = document.getElementById("Ferdi_iden").value;
  let etibar_mud = document.getElementById("Etibar_mud").value;
  let dogum_yeri = document.getElementById("Dogum_yeri").value;
  let qan = document.getElementById("Qan").value;
  let img=document.getElementById("img").value;
 
  let insan = {
    "soyad": soyad,
    "ad": ad,
    "ata_adi": ata_adi,
    "cinsi": cinsi,
    "vetendasliq": vetendasliq,
    "dogum_tarixi": dogum_tarixi,
    "vesiqenin_nomresi": vesiqenin_nomresi,
    "ferdi_iden": ferdi_iden,
    "etibar_mud": etibar_mud,
    "dogum_yeri": dogum_yeri,
    "qan": qan,
    "img":img
  };
  if (soyad === '' || ad === '' || ata_adi === '' || cinsi === '' || vetendasliq === '' || 
  dogum_tarixi === '' || vesiqenin_nomresi === '' || ferdi_iden === '' || etibar_mud === '' || 
  dogum_yeri === '' || qan === ''|| img === '') {
alert('Please fill all the fields');
return;
}

  insanlar.push(insan);

  document.getElementById("Soyad").value = "";
  document.getElementById("Ad").value = "";
  document.getElementById("Ata_adi").value = "";
  document.getElementById("Cinsi").value = "";
  document.getElementById("Vetendasliq").value = "";
  document.getElementById("Dogum_tarixi").value = "";
  document.getElementById("Vesiqenin_nomresi").value = "";
  document.getElementById("Ferdi_iden").value = "";
  document.getElementById("Etibar_mud").value = "";
  document.getElementById("Dogum_yeri").value = "";
  document.getElementById("Qan").value = "";
  document.getElementById("img").value = "";

  console.log(insanlar); 
});






