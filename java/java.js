function calc() {
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);

    if((day<0) || (day>31)){
        alert("Day is out of range")
    }
    if((month<0) || (month>12)){
        alert("Month is out of range")
    }






    var array = [0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5];
    var arrayDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var akanMen = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    var akanFemale = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
    var str = (document.getElementById("year").value);
    var yearCode = parseInt(str);
    var res = str.substring(2, 4);
    var y = parseInt(res);
    var q = parseInt(y / 4);

    var op = document.getElementById("sex").value;
    if (op == "male") {

        if (yearCode >= 2000 && yearCode <= 2099) {
            if ((yearCode % 4 === 0 || yearCode % 400 === 0) && (month == 1 || month === 2)) {
                var x = day + array[month - 1] + 6 + y + q;
                var remender = x % 7;
                var leap = remender - 1;
                if (remender === 0) {
                    document.getElementById('result').value = "The day is Saturday and the name is Kwame."
                } else {
                    document.getElementById('result').value = "The day is " + arrayDay[leap] + " and the name is " + akanMen[leap];
                }

            } else {
                var x = day + array[month - 1] + 6 + y + q;
                var remender = x % 7;
                document.getElementById('result').value = "The day is " + arrayDay[remender] + " and the name is " + akanMen[remender];
            }

        } else if (yearCode >= 1900 && yearCode <= 1999) {
            if ((yearCode % 4 === 0 || yearCode % 400 === 0) && (month == 1 || month === 2)) {
                var x = day + array[month - 1] + 0 + y + q;
                var remender = x % 7;
                var leap = remender - 1;
                if (remender === 0) {
                    document.getElementById('result').value = "The day is Saturday and the name is Kwame."
                } else {
                    document.getElementById('result').value = "The day is " + arrayDay[leap] + " and the name is " + akanMen[leap];
                }

            } else {
                var x = day + array[month - 1] + 0 + y + q;
                var remender = x % 7;
                document.getElementById('result').value = "The day is " + arrayDay[remender] + " and the name is " + akanMen[remender];
            }
        } else if (yearCode >= 1800 && yearCode <= 1899) {
            if ((yearCode % 4 === 0 || yearCode % 400 === 0) && (month == 1 || month === 2)) {
                var x = day + array[month - 1] + 2 + y + q;
                var remender = x % 7;
                var leap = remender - 1;
                if (remender === 0) {
                    document.getElementById('result').value = "The day is Saturday and the name is Kwame."
                } else {
                    document.getElementById('result').value = "The day is " + arrayDay[leap] + " and the name is " + akanMen[leap];
                }

            } else {
                var x = day + array[month - 1] + 2 + y + q;
                var remender = x % 7;
                document.getElementById('result').value = "The day is " + arrayDay[remender] + " and the name is " + akanMen[remender];
            }
        } else if (yearCode >= 1700 && yearCode <= 1799) {
            if ((yearCode % 4 === 0 || yearCode % 400 === 0) && (month == 1 || month === 2)) {
                var x = day + array[month - 1] + 4 + y + q;
                var remender = x % 7;
                var leap = remender - 1;
                if (remender === 0) {
                    document.getElementById('result').value = "The day is Saturday and the name is Kwame."
                } else {
                    document.getElementById('result').value = "The day is " + arrayDay[leap] + " and the name is " + akanMen[leap];
                }

            } else {
                var x = day + array[month - 1] + 4 + y + q;
                var remender = x % 7;
                document.getElementById('result').value = "The day is " + arrayDay[remender] + " and the name is " + akanMen[remender];
            }
        } else if (yearCode >= 1600 && yearCode <= 1699) {
            if ((yearCode % 4 === 0 || yearCode % 400 === 0) && (month == 1 || month === 2)) {
                var x = day + array[month - 1] + 6 + y + q;
                var remender = x % 7;
                var leap = remender - 1;
                if (remender === 0) {
                    document.getElementById('result').value = "The day is Saturday and the name is Kwame."
                } else {
                    document.getElementById('result').value = "The day is " + arrayDay[leap] + " and the name is " + akanMen[leap];
                }

            } else {
                var x = day + array[month - 1] + 6 + y + q;
                var remender = x % 7;
                document.getElementById('result').value = "The day is " + arrayDay[remender] + " and the name is " + akanMen[remender];
            }
        } else if (yearCode >= 1500 && yearCode <= 1599) {
            if ((yearCode % 4 === 0 || yearCode % 400 === 0) && (month == 1 || month === 2)) {
                var x = day + array[month - 1] + 0 + y + q;
                var remender = x % 7;
                var leap = remender - 1;
                if (remender === 0) {
                    document.getElementById('result').value = "The day is Saturday and the name is Kwame."
                } else {
                    document.getElementById('result').value = "The day is " + arrayDay[leap] + " and the name is " + akanMen[leap];
                }

            } else {
                var x = day + array[month - 1] + 0 + y + q;
                var remender = x % 7;
                document.getElementById('result').value = "The day is " + arrayDay[remender] + " and the name is " + akanMen[remender];
            }
        } else if (yearCode >= 2100 && yearCode <= 2199) {
            if ((yearCode % 4 === 0 || yearCode % 400 === 0) && (month == 1 || month === 2)) {
                var x = day + array[month - 1] + 4 + y + q;
                var remender = x % 7;
                var leap = remender - 1;
                if (remender === 0) {
                    document.getElementById('result').value = "The day is Saturday and the name is Kwame."
                } else {
                    document.getElementById('result').value = "The day is " + arrayDay[leap] + " and the name is " + akanMen[leap];
                }

            } else {
                var x = day + array[month - 1] + 4 + y + q;
                var remender = x % 7;
                document.getElementById('result').value = "The day is " + arrayDay[remender] + " and the name is " + akanMen[remender];
            }
        } else if (yearCode >= 2200 && yearCode <= 2299) {
            if ((yearCode % 4 === 0 || yearCode % 400 === 0) && (month == 1 || month === 2)) {
                var x = day + array[month - 1] + 2 + y + q;
                var remender = x % 7;
                var leap = remender - 1;
                if (remender === 0) {
                    document.getElementById('result').value = "The day is Saturday and the name is Kwame."
                } else {
                    document.getElementById('result').value = "The day is " + arrayDay[leap] + " and the name is " + akanMen[leap];
                }

            } else {
                var x = day + array[month - 1] + 2 + y + q;
                var remender = x % 7;
                document.getElementById('result').value = "The day is " + arrayDay[remender] + " and the name is " + akanMen[remender];
            }
        } else if (yearCode >= 2300 && yearCode <= 2399) {
            if ((yearCode % 4 === 0 || yearCode % 400 === 0) && (month == 1 || month === 2)) {
                var x = day + array[month - 1] + 0 + y + q;
                var remender = x % 7;
                var leap = remender - 1;
                if (remender === 0) {
                    document.getElementById('result').value = "The day is Saturday and the name is Kwame."
                } else {
                    document.getElementById('result').value = "The day is " + arrayDay[leap] + " and the name is " + akanMen[leap];
                }

            } else {
                var x = day + array[month - 1] + 0 + y + q;
                var remender = x % 7;
                document.getElementById('result').value = "The day is " + arrayDay[remender] + " and the name is " + akanMen[remender];
            }
        }



    } else if (op == "female") {
        if (yearCode >= 2000 && yearCode <= 2099) {
            if ((yearCode % 4 === 0 || yearCode % 400 === 0) && (month == 1 || month === 2)) {
                var x = day + array[month - 1] + 6 + y + q;
                var remender = x % 7;
                var leap = remender - 1;
                if (remender === 0) {
                    document.getElementById('result').value = "The day is Saturday and the name is Ama."
                } else {
                    document.getElementById('result').value = "The day is " + arrayDay[leap] + " and the name is " + akanFemale[leap];
                }

            } else {
                var x = day + array[month - 1] + 6 + y + q;
                var remender = x % 7;
                document.getElementById('result').value = "The day is " + arrayDay[remender] + " and the name is " + akanFemale[remender];
            }
        } else if (yearCode >= 1900 && yearCode <= 1999) {
            if ((yearCode % 4 === 0 || yearCode % 400 === 0) && (month == 1 || month === 2)) {
                var x = day + array[month - 1] + 0 + y + q;
                var remender = x % 7;
                var leap = remender - 1;
                if (remender === 0) {
                    document.getElementById('result').value = "The day is Saturday and the name is Ama."
                } else {
                    document.getElementById('result').value = "The day is " + arrayDay[leap] + " and the name is " + akanFemale[leap];
                }

            } else {
                var x = day + array[month - 1] + 0 + y + q;
                var remender = x % 7;
                document.getElementById('result').value = "The day is " + arrayDay[remender] + " and the name is " + akanFemale[remender];
            }
        } else if (yearCode >= 1800 && yearCode <= 1899) {
            if ((yearCode % 4 === 0 || yearCode % 400 === 0) && (month == 1 || month === 2)) {
                var x = day + array[month - 1] + 2 + y + q;
                var remender = x % 7;
                var leap = remender - 1;
                if (remender === 0) {
                    document.getElementById('result').value = "The day is Saturday and the name is Ama."
                } else {
                    document.getElementById('result').value = "The day is " + arrayDay[leap] + " and the name is " + akanFemale[leap];
                }

            } else {
                var x = day + array[month - 1] + 2 + y + q;
                var remender = x % 7;
                document.getElementById('result').value = "The day is " + arrayDay[remender] + " and the name is " + akanFemale[remender];
            }
        } else if (yearCode >= 1700 && yearCode <= 1799) {
            if ((yearCode % 4 === 0 || yearCode % 400 === 0) && (month == 1 || month === 2)) {
                var x = day + array[month - 1] + 4 + y + q;
                var remender = x % 7;
                var leap = remender - 1;
                if (remender === 0) {
                    document.getElementById('result').value = "The day is Saturday and the name is Ama."
                } else {
                    document.getElementById('result').value = "The day is " + arrayDay[leap] + " and the name is " + akanFemale[leap];
                }

            } else {
                var x = day + array[month - 1] + 4 + y + q;
                var remender = x % 7;
                document.getElementById('result').value = "The day is " + arrayDay[remender] + " and the name is " + akanFemale[remender];
            }
        } else if (yearCode >= 1600 && yearCode <= 1699) {
            if ((yearCode % 4 === 0 || yearCode % 400 === 0) && (month == 1 || month === 2)) {
                var x = day + array[month - 1] + 6 + y + q;
                var remender = x % 7;
                var leap = remender - 1;
                if (remender === 0) {
                    document.getElementById('result').value = "The day is Saturday and the name is Ama."
                } else {
                    document.getElementById('result').value = "The day is " + arrayDay[leap] + " and the name is " + akanFemale[leap];
                }

            } else {
                var x = day + array[month - 1] + 6 + y + q;
                var remender = x % 7;
                document.getElementById('result').value = "The day is " + arrayDay[remender] + " and the name is " + akanFemale[remender];
            }
        } else if (yearCode >= 1500 && yearCode <= 1599) {
            if ((yearCode % 4 === 0 || yearCode % 400 === 0) && (month == 1 || month === 2)) {
                var x = day + array[month - 1] + 0 + y + q;
                var remender = x % 7;
                var leap = remender - 1;
                if (remender === 0) {
                    document.getElementById('result').value = "The day is Saturday and the name is Ama."
                } else {
                    document.getElementById('result').value = "The day is " + arrayDay[leap] + " and the name is " + akanFemale[leap];
                }

            } else {
                var x = day + array[month - 1] + 0 + y + q;
                var remender = x % 7;
                document.getElementById('result').value = "The day is " + arrayDay[remender] + " and the name is " + akanFemale[remender];
            }
        } else if (yearCode >= 2100 && yearCode <= 2199) {
            if ((yearCode % 4 === 0 || yearCode % 400 === 0) && (month == 1 || month === 2)) {
                var x = day + array[month - 1] + 4 + y + q;
                var remender = x % 7;
                var leap = remender - 1;
                if (remender === 0) {
                    document.getElementById('result').value = "The day is Saturday and the name is Ama."
                } else {
                    document.getElementById('result').value = "The day is " + arrayDay[leap] + " and the name is " + akanFemale[leap];
                }

            } else {
                var x = day + array[month - 1] + 4 + y + q;
                var remender = x % 7;
                document.getElementById('result').value = "The day is " + arrayDay[remender] + " and the name is " + akanFemale[remender];
            }
        } else if (yearCode >= 2200 && yearCode <= 2299) {
            if ((yearCode % 4 === 0 || yearCode % 400 === 0) && (month == 1 || month === 2)) {
                var x = day + array[month - 1] + 2 + y + q;
                var remender = x % 7;
                var leap = remender - 1;
                if (remender === 0) {
                    document.getElementById('result').value = "The day is Saturday and the name is Ama."
                } else {
                    document.getElementById('result').value = "The day is " + arrayDay[leap] + " and the name is " + akanFemale[leap];
                }

            } else {
                var x = day + array[month - 1] + 2 + y + q;
                var remender = x % 7;
                document.getElementById('result').value = "The day is " + arrayDay[remender] + " and the name is " + akanFemale[remender];
            }
        } else if (yearCode >= 2300 && yearCode <= 2399) {
            if ((yearCode % 4 === 0 || yearCode % 400 === 0) && (month == 1 || month === 2)) {
                var x = day + array[month - 1] + 0 + y + q;
                var remender = x % 7;
                var leap = remender - 1;
                if (remender === 0) {
                    document.getElementById('result').value = "The day is Saturday and the name is Ama."
                } else {
                    document.getElementById('result').value = "The day is " + arrayDay[leap] + " and the name is " + akanFemale[leap];
                }

            } else {
                var x = day + array[month - 1] + 0 + y + q;
                var remender = x % 7;
                document.getElementById('result').value = "The day is " + arrayDay[remender] + " and the name is " + akanFemale[remender];
            }
        }

    }
}