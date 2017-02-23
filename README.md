OBJECTIVE: Convert arabic numbers to roman numerals

| behavior |  input   |  output  |
|----------|:--------:|:--------:|
|It should only accept numerical inputs with values between 1 and 3,999.| -- | -- |
|Any output should only include some combination of the following symbols: I, IV, V, IX, X, XL, L, XC, C, CD, D, CM, M. These are the base values and correspond with the following numerical inputs: 1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1,000.| 1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1,000 | I, IV, V, IX, X, XL, L, XC, C, CD, D, CM, M |
|One base value can not be repeated consecutively more than three times.| -- | -- |
|For numbers 2-3, it should subtract the input value from the value of character I as many times as needed to achieve a result of 0, each time returning the corresponding symbol, then concat the returned symbols together for the output value.| 2 | II |
|For numbers 6-8, it should subtract the input value from the value of character V as many times as needed to achieve a result of 0, each time returning the corresponding symbol, then concat the returned symbols together for the output value.| 7 | VII |
|For numbers 11-39, it should subtract the input value from the value of character X as many times as needed to achieve a result of 0, each time returning the corresponding symbol, then concat the returned symbols together for the output value.| 28 | XXVIII |
|For numbers 41-49, it should subtract the input value from the value of character XL as many times as needed to achieve a result of 0, each time returning the corresponding symbol, then concat the returned symbols together for the output value.| 45 | XLV |
|For numbers 51-89, it should subtract the input value from the value of character L as many times as needed to achieve a result of 0, each time returning the corresponding symbol, then concat the returned symbols together for the output value.| 63 | LXIII |
|For numbers 91-99, it should subtract the input value from the value of character XC as many times as needed to achieve a result of 0, each time returning the corresponding symbol, then concat the returned symbols together for the output value.| 99 | XCIX |
|For numbers 101-399, it should subtract the input value from the value of character C as many times as needed to achieve a result of 0, each time returning the corresponding symbol, then concat the returned symbols together for the output value.| 235 | CCXXXV |
|For numbers 401-499, it should subtract the input value from the value of character CD as many times as needed to achieve a result of 0, each time returning the corresponding symbol, then concat the returned symbols together for the output value.| 472 | CDLXXII |
|For numbers 501-899, it should subtract the input value from the value of character D as many times as needed to achieve a result of 0, each time returning the corresponding symbol, then concat the returned symbols together for the output value.| 800 | DCCC |
|For numbers 901-999, it should subtract the input value from the value of character CM as many times as needed to achieve a result of 0, each time returning the corresponding symbol, then concat the returned symbols together for the output value.| 954 | CMLIV |
|For numbers 1,001-3,999, it should subtract the input value from the value of character M as many times as needed to achieve a result of 0, each time returning the corresponding symbol, then concat the returned symbols together for the output value.| 3,999 | MMMCMXCIX |
