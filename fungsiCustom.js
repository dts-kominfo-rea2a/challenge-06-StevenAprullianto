// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

//TODO: Kerjakan bacaData
//gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) =>{ 
  const arrHasil = [];

  fs.readFile(file1, "utf-8", (err, data1) =>{
    if (err) {
      return fnCallback('Error data 1' + err, null);
    }

    fs.readFile(file2, "utf-8", (err, data2) =>{
      if (err) {
        return fnCallback('Error data 2' + err, null);
      }

      fs.readFile(file3, "utf-8", (err, data3) =>{
        if (err) {
          return fnCallback('Error data 3' + err, null);
        }

        const arrObj1 = JSON.parse(data1).message.split(" ");
        const arrObj2 = JSON.parse(data2)[0].message.split(" ");
        const arrObj3 = JSON.parse(data3)[0].data.message.split(" ");

        if(arrObj1.length > 2 || arrObj2.length > 2 || arrObj3.length > 2){
          return fnCallback("Message lebih dari 2 karakter", null); 
        }else{
            arrHasil.push(arrObj1[1]);
            arrHasil.push(arrObj2[1]);
            arrHasil.push(arrObj3[1]);
        }
        
        fnCallback(null, arrHasil);

      });
    });
  });
}

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
