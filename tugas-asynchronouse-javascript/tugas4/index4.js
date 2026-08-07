var filterCarsPromise = require("./promise3.js");

// Lanjutkan code untuk menjalankan function filterCars

// 1. mobil berwarna hitam tahun 2019
filterCarsPromise("black", 2019)
  .then(function (result) {
    console.log(result);

    // 2. mobil berwarna silver tahun 2017
    return filterCarsPromise("silver", 2017);
  })
  .then(function (result) {
    console.log(result);

    async function lanjutkanPencarian() {
      // 3. mobil berwarna abu-abu tahun 2019 (async/await)
      try {
        var result3 = await filterCarsPromise("grey", 2019);
        console.log(result3);
      } catch (error) {
        console.log(error.message);
      }

      // 4. mobil berwarna abu-abu tahun 2018 (async/await)
      try {
        var result4 = await filterCarsPromise("grey", 2018);
        console.log(result4);
      } catch (error) {
        console.log(error.message);
      }

      // 5. mobil berwarna hitam tahun 2020 (async/await)
      try {
        var result5 = await filterCarsPromise("black", 2020);
        console.log(result5);
      } catch (error) {
        console.log(error.message);
      }
    }

    lanjutkanPencarian();
  })
  .catch(function (error) {
    console.log(error.message);
  });
