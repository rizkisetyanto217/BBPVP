var filterBooksPromise = require("./promise2.js");

filterBooksPromise(true, 50)
  .then(function (result) {
    console.log(result);

    async function cariBukuTidakBerwarna() {
      try {
        var result2 = await filterBooksPromise(false, 250);
        console.log(result2);
      } catch (error) {
        console.log(error.message);
      }

      try {
        var result3 = await filterBooksPromise(true, 30);
        console.log(result3);
      } catch (error) {
        console.log(error.message);
      }
    }

    cariBukuTidakBerwarna();
  })
  .catch(function (error) {
    console.log(error.message);
  });
