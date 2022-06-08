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
    const arrObj = JSON.parse(data1).message.split(" ");

    if(arrObj.length > 2){
      fnCallback("Message lebih dari 2 karakter", null);
      return;
    }else{
        arrHasil.push(arrObj[1]);
    }

    fs.readFile(file2, "utf-8", (err, data2) =>{
      const arrObj = JSON.parse(data2)[0].message.split(" ");
      if(arrObj.length > 2){
        fnCallback("Message lebih dari 2 karakter", null);
        return;
      }else{
        arrHasil.push(arrObj[1]);
      }

      fs.readFile(file3, "utf-8", (err, data3) =>{
        const arrObj = JSON.parse(data3)[0].data.message.split(" ");
        if(arrObj.length > 2){
          fnCallback("Message lebih dari 2 karakter", null);
          return;
        }else{
          arrHasil.push(arrObj[1]);
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
