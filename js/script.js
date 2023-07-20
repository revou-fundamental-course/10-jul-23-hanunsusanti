var  hitungButton = document.getElementById("hitung");
var  resetButton = document.getElementById("reset");

hitungButton.addEventListener("click", function (event) {
    event.preventDefault();
    
    var jKelaminPria = document.getElementById("pria");
    var jKelaminWanita = document.getElementById("wanita");
    var jklmnValue = "";

    if (jKelaminPria.checked){
        jklmnValue = jKelaminPria.value;
    } else if (jKelaminWanita.checked){
        jklmnValue = jKelaminWanita.value;
    }

    var beratBadan = document.getElementById("bb").value;
    var age = document.getElementById("usia").value;
    var tinggiBadan = document.getElementById("tb").value;
    formValidation(jklmnValue, beratBadan, age, tinggiBadan);
});

function formValidation(jklmnValue, bbValue, ageValue, tbValue) {
    var allertGender = document.getElementById("allertGender");
    var allertBB = document.getElementById("allertBB");
    var allertUsia = document.getElementById("allertUsia");
    var allertTB = document.getElementById("allertTB");

    allertGender.textContent = "";
    allertBB.textContent = "";
    allertUsia.textContent = "";
    allertTB.textContent = "";
    var allertOutput = "";

    if (!jklmnValue) {
        allertOutput = "Jenis kelamin masih kosong";
        allertGender.textContent = allertOutput;
    }
    if (!bbValue || isNaN(bbValue) || parseFloat(bbValue) <= 1) {
        allertOutput = "Berat badan tidak valid";
        allertBB.textContent = allertOutput;
    }
    if (!ageValue || isNaN(ageValue) || parseInt(ageValue) <= 1) {
        allertOutput = "Usia tidak valid";
        allertUsia.textContent = allertOutput;
    }
    if (!tbValue || isNaN(tbValue) || parseFloat(tbValue) <= 1) {
        allertOutput = "Tinggi badan tidak valid";
        allertTB.textContent = allertOutput;
    }

    if (jklmnValue && bbValue && ageValue && tbValue) {
        bmiCalculation(jklmnValue, bbValue, tbValue);
    }
}
 
function bmiCalculation(jklmnValue, bbValue, tbValue){
    var tbKonversi = parseFloat(tbValue)/100;
    var hasilTb = parseFloat(tbKonversi) * parseFloat(tbKonversi); 
    var result = parseFloat(bbValue)/parseFloat(hasilTb);resultDisplay(jklmnValue, result);
}

function resetForm(){
    document.getElementById("myForm").reset();
}

function resultDisplay(jklmnValue, result){
    var genderValue = document.getElementById("genderOutput");
    genderValue.textContent = "Jenis Kelamin : " + jklmnValue;

    var bmiResult = document.getElementById("bmiResultOutput");
    bmiResult.textContent = "BMI : " + result.toFixed(2);

    var weightStatus = document.getElementById("weightStatus");
    var status = "";
    if(result < 18.5){
        status = "Kekurangan Berat Badan";
    } else if(result >= 18.5 && result <= 24.9){
        status = "Normal (Ideal)";
    } else if(result >= 25 && result <= 29.9){
        status = "Kelebihan berat badan";
    } else {
        status = "Kegemukan (Obesitas)";
    }

    weightStatus.textContent = "Status berat badan : " + status;
}
