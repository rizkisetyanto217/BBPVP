// 9. Switch Case - Hari dalam Seminggu
let day;
let today = new Date().getDay();

switch (today) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        day = "Unknown Day";
}

console.log(day);


// 10. Switch Case - Nilai Grade
let nilai = "A";

switch (nilai) {
    case "A":
        console.log("Sangat Baik");
        break;
    case "B":
        console.log("Baik");
        break;
    case "C":
        console.log("Cukup");
        break;
    case "D":
        console.log("Kurang");
        break;
    default:
        console.log("Nilai tidak valid");
}