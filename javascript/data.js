// 1. 第一屆的基礎車位資料 (抽出共用)
const firstTermData = [
    {"unit": "A2-2", "slot": "209"}, {"unit": "A6-5", "slot": "8"}, {"unit": "A11-1", "slot": "43"}, {"unit": "A15-3", "slot": "9"},
    {"unit": "B6-3", "slot": "197"}, {"unit": "B11-6", "slot": "131"}, {"unit": "B15-2", "slot": "75"}, {"unit": "C5-5", "slot": "135"},
    {"unit": "C10-1", "slot": "24"}, {"unit": "C14-3", "slot": "205"}, {"unit": "A2-1", "slot": "211"}, {"unit": "A6-3", "slot": "106"},
    {"unit": "A11-6", "slot": "164"}, {"unit": "B2-6", "slot": "206"}, {"unit": "B6-2", "slot": "19"}, {"unit": "B11-5", "slot": "41"},
    {"unit": "B15-1", "slot": "60"}, {"unit": "C5-3", "slot": "139"}, {"unit": "C10-6", "slot": "68"}, {"unit": "C14-2", "slot": "76"},
    {"unit": "A2-6", "slot": "111"}, {"unit": "A7-2", "slot": "47"}, {"unit": "A11-5", "slot": "110"}, {"unit": "B2-5", "slot": "13"},
    {"unit": "B6-1", "slot": "166"}, {"unit": "B11-3", "slot": "163"}, {"unit": "C1", "slot": "204"}, {"unit": "C5-2", "slot": "157"},
    {"unit": "C10-5", "slot": "216"}, {"unit": "C15-1", "slot": "185"}, {"unit": "A2-5", "slot": "5"}, {"unit": "A7-1", "slot": "120"},
    {"unit": "A11-3", "slot": "59"}, {"unit": "B2-3", "slot": "56"}, {"unit": "B7-6", "slot": "28"}, {"unit": "B11-2", "slot": "100"},
    {"unit": "C1-3", "slot": "176"}, {"unit": "C6-1", "slot": "130"}, {"unit": "C10-3", "slot": "87"}, {"unit": "C15-6", "slot": "213"},
    {"unit": "A2-3", "slot": "128"}, {"unit": "A7-6", "slot": "66"}, {"unit": "A12-2", "slot": "53"}, {"unit": "B2-2", "slot": "215"},
    {"unit": "B7-5", "slot": "81"}, {"unit": "B11-1", "slot": "7"}, {"unit": "C1-2", "slot": "32"}, {"unit": "C6-6", "slot": "190"},
    {"unit": "C10-2", "slot": "48"}, {"unit": "C15-5", "slot": "67"}, {"unit": "A3-2", "slot": "146"}, {"unit": "A7-5", "slot": "71"},
    {"unit": "A12-1", "slot": "62"}, {"unit": "B2-1", "slot": "45"}, {"unit": "B7-3", "slot": "18"}, {"unit": "B12-6", "slot": "77"},
    {"unit": "C1-1", "slot": "115"}, {"unit": "C6-5", "slot": "72"}, {"unit": "C11-1", "slot": "184"}, {"unit": "C15-3", "slot": "208"},
    {"unit": "A3-1", "slot": "30"}, {"unit": "A7-3", "slot": "175"}, {"unit": "A12-6", "slot": "199"}, {"unit": "B3-6", "slot": "171"},
    {"unit": "B7-2", "slot": "23"}, {"unit": "B12-5", "slot": "54"}, {"unit": "C2-1", "slot": "73"}, {"unit": "C6-3", "slot": "129"},
    {"unit": "C11-6", "slot": "196"}, {"unit": "C15-2", "slot": "96"}, {"unit": "A3-6", "slot": "94"}, {"unit": "A8-2", "slot": "147"},
    {"unit": "A12-5", "slot": "156"}, {"unit": "B3-5", "slot": "168"}, {"unit": "B7-1", "slot": "22"}, {"unit": "B12-3", "slot": "95"},
    {"unit": "C2-6", "slot": "191"}, {"unit": "C6-2", "slot": "180"}, {"unit": "C11-5", "slot": "12"}, {"unit": "A3-5", "slot": "84"},
    {"unit": "A8-1", "slot": "126"}, {"unit": "A12-3", "slot": "183"}, {"unit": "B3-3", "slot": "25"}, {"unit": "B8-6", "slot": "58"},
    {"unit": "B12-2", "slot": "44"}, {"unit": "C2-5", "slot": "105"}, {"unit": "C7-1", "slot": "136"}, {"unit": "C11-3", "slot": "217"},
    {"unit": "A3-3", "slot": "83"}, {"unit": "A8-6", "slot": "65"}, {"unit": "A13-2", "slot": "123"}, {"unit": "B3-2", "slot": "31"},
    {"unit": "B8-5", "slot": "39"}, {"unit": "B12-1", "slot": "161"}, {"unit": "C2-3", "slot": "193"}, {"unit": "C7-6", "slot": "104"},
    {"unit": "C11-2", "slot": "214"}, {"unit": "A4-2", "slot": "29"}, {"unit": "A8-5", "slot": "144"}, {"unit": "A13-1", "slot": "177"},
    {"unit": "B3-1", "slot": "165"}, {"unit": "B8-3", "slot": "218"}, {"unit": "B13-6", "slot": "16"}, {"unit": "C2-2", "slot": "37"},
    {"unit": "C7-5", "slot": "85"}, {"unit": "C12-1", "slot": "99"}, {"unit": "A4-1", "slot": "70"}, {"unit": "A8-3", "slot": "153"},
    {"unit": "A13-6", "slot": "74"}, {"unit": "B4-6", "slot": "150"}, {"unit": "B8-2", "slot": "10"}, {"unit": "B13-5", "slot": "92"},
    {"unit": "C3-1", "slot": "194"}, {"unit": "C7-3", "slot": "90"}, {"unit": "C12-6", "slot": "145"}, {"unit": "A4-6", "slot": "93"},
    {"unit": "A9-2", "slot": "121"}, {"unit": "A13-5", "slot": "107"}, {"unit": "B4-5", "slot": "195"}, {"unit": "B8-1", "slot": "49"},
    {"unit": "B13-3", "slot": "102"}, {"unit": "C3-6", "slot": "119"}, {"unit": "C7-2", "slot": "141"}, {"unit": "C12-5", "slot": "178"},
    {"unit": "A4-5", "slot": "140"}, {"unit": "A9-1", "slot": "51"}, {"unit": "A13-3", "slot": "133"}, {"unit": "B4-3", "slot": "116"},
    {"unit": "B9-6", "slot": "27"}, {"unit": "B13-2", "slot": "6"}, {"unit": "C3-5", "slot": "14"}, {"unit": "C8-1", "slot": "189"},
    {"unit": "C12-3", "slot": "151"}, {"unit": "A4-3", "slot": "20"}, {"unit": "A9-6", "slot": "152"}, {"unit": "A14-2", "slot": "124"},
    {"unit": "B4-2", "slot": "42"}, {"unit": "B9-5", "slot": "101"}, {"unit": "B13-1", "slot": "160"}, {"unit": "C3-3", "slot": "202"},
    {"unit": "C8-6", "slot": "61"}, {"unit": "C12-2", "slot": "3"}, {"unit": "A5-2", "slot": "50"}, {"unit": "A9-5", "slot": "63"},
    {"unit": "A14-1", "slot": "89"}, {"unit": "B4-1", "slot": "192"}, {"unit": "B9-3", "slot": "55"}, {"unit": "B14-6", "slot": "169"},
    {"unit": "C3-2", "slot": "52"}, {"unit": "C8-5", "slot": "143"}, {"unit": "C13-1", "slot": "82"}, {"unit": "A5-1", "slot": "149"},
    {"unit": "A9-3", "slot": "38"}, {"unit": "A14-6", "slot": "112"}, {"unit": "B5-6", "slot": "11"}, {"unit": "B9-2", "slot": "108"},
    {"unit": "B14-5", "slot": "17"}, {"unit": "C4-1", "slot": "118"}, {"unit": "C8-3", "slot": "113"}, {"unit": "C13-6", "slot": "172"},
    {"unit": "A5-6", "slot": "15"}, {"unit": "A10-2", "slot": "35"}, {"unit": "A14-5", "slot": "80"}, {"unit": "B5-5", "slot": "69"},
    {"unit": "B9-1", "slot": "46"}, {"unit": "B14-3", "slot": "26"}, {"unit": "C4-6", "slot": "134"}, {"unit": "C8-2", "slot": "138"},
    {"unit": "C13-5", "slot": "170"}, {"unit": "A5-5", "slot": "91"}, {"unit": "A10-1", "slot": "137"}, {"unit": "A14-3", "slot": "181"},
    {"unit": "B5-3", "slot": "40"}, {"unit": "B10-6", "slot": "64"}, {"unit": "B14-2", "slot": "79"}, {"unit": "C4-5", "slot": "201"},
    {"unit": "C9-1", "slot": "212"}, {"unit": "C13-3", "slot": "159"}, {"unit": "A5-3", "slot": "155"}, {"unit": "A10-6", "slot": "122"},
    {"unit": "A15-2", "slot": "179"}, {"unit": "B5-2", "slot": "132"}, {"unit": "B10-5", "slot": "21"}, {"unit": "B14-1", "slot": "97"},
    {"unit": "C4-3", "slot": "182"}, {"unit": "C9-6", "slot": "186"}, {"unit": "C13-2", "slot": "142"}, {"unit": "A6-2", "slot": "162"},
    {"unit": "A10-5", "slot": "117"}, {"unit": "A15-1", "slot": "114"}, {"unit": "B5-1", "slot": "188"}, {"unit": "B10-3", "slot": "200"},
    {"unit": "B15-6", "slot": "203"}, {"unit": "C4-2", "slot": "109"}, {"unit": "C9-5", "slot": "154"}, {"unit": "C14-1", "slot": "148"},
    {"unit": "A6-1", "slot": "198"}, {"unit": "A10-3", "slot": "36"}, {"unit": "A15-6", "slot": "98"}, {"unit": "B6-6", "slot": "158"},
    {"unit": "B10-2", "slot": "34"}, {"unit": "B15-5", "slot": "187"}, {"unit": "C5-1", "slot": "57"}, {"unit": "C9-3", "slot": "167"},
    {"unit": "C14-6", "slot": "86"}, {"unit": "A6-6", "slot": "33"}, {"unit": "A11-2", "slot": "173"}, {"unit": "A15-5", "slot": "174"},
    {"unit": "B6-5", "slot": "125"}, {"unit": "B10-1", "slot": "103"}, {"unit": "B15-3", "slot": "127"}, {"unit": "C5-6", "slot": "88"},
    {"unit": "C9-2", "slot": "78"}, {"unit": "C14-5", "slot": "210"}
];


// 2. 抽籤用的基礎戶別資料 (清除車位號碼結果，僅保留戶別 for 抽籤頁面 render)
const baseUnits = firstTermData.map(item => ({ unit: item.unit }));

// 新舊制轉換邏輯
// A1:A -2
// A2:A -1
// A3:A -6
// A5:A -5
// A6:A -3

// B1:B -6
// B2:B -5
// B3:B -3
// B5:B -2
// B6:B -1

// C1:C -1
// C2:C -6
// C3:C -5
// C5:C -3
// C6:C -2
// 1C1:C1
// 1C3:C1-3
// 1C5:C1-2
// 1C6:C1-1


//
const firstTermDataBackUp = [
    {"unit": "A2-2", "slot": "209"}, {"unit": "A6-5", "slot": "8"}, {"unit": "A11-1", "slot": "43"}, {"unit": "A15-3", "slot": "9"},
    {"unit": "B6-3", "slot": "197"}, {"unit": "B11-6", "slot": "131"}, {"unit": "B15-2", "slot": "75"}, {"unit": "C5-5", "slot": "135"},
    {"unit": "C10-1", "slot": "24"}, {"unit": "C14-3", "slot": "205"}, {"unit": "A2-1", "slot": "211"}, {"unit": "A6-3", "slot": "106"},
    {"unit": "A11-6", "slot": "164"}, {"unit": "B2-6", "slot": "206"}, {"unit": "B6-2", "slot": "19"}, {"unit": "B11-5", "slot": "41"},
    {"unit": "B15-1", "slot": "60"}, {"unit": "C5-3", "slot": "139"}, {"unit": "C10-6", "slot": "68"}, {"unit": "C14-2", "slot": "76"},
    {"unit": "A2-6", "slot": "111"}, {"unit": "A7-2", "slot": "47"}, {"unit": "A11-5", "slot": "110"}, {"unit": "B2-5", "slot": "13"},
    {"unit": "B6-1", "slot": "166"}, {"unit": "B11-3", "slot": "163"}, {"unit": "C1", "slot": "204"}, {"unit": "C5-2", "slot": "157"},
    {"unit": "C10-5", "slot": "216"}, {"unit": "C15-1", "slot": "185"}, {"unit": "A2-5", "slot": "5"}, {"unit": "A7-1", "slot": "120"},
    {"unit": "A11-3", "slot": "59"}, {"unit": "B2-3", "slot": "56"}, {"unit": "B7-6", "slot": "28"}, {"unit": "B11-2", "slot": "100"},
    {"unit": "C1-3", "slot": "176"}, {"unit": "C6-1", "slot": "130"}, {"unit": "C10-3", "slot": "87"}, {"unit": "C15-6", "slot": "213"},
    {"unit": "A2-3", "slot": "128"}, {"unit": "A7-6", "slot": "66"}, {"unit": "A12-2", "slot": "53"}, {"unit": "B2-2", "slot": "215"},
    {"unit": "B7-5", "slot": "81"}, {"unit": "B11-1", "slot": "7"}, {"unit": "C1-2", "slot": "32"}, {"unit": "C6-6", "slot": "190"},
    {"unit": "C10-2", "slot": "48"}, {"unit": "C15-5", "slot": "67"}, {"unit": "A3-2", "slot": "146"}, {"unit": "A7-5", "slot": "71"},
    {"unit": "A12-1", "slot": "62"}, {"unit": "B2-1", "slot": "45"}, {"unit": "B7-3", "slot": "18"}, {"unit": "B12-6", "slot": "77"},
    {"unit": "C1-1", "slot": "115"}, {"unit": "C6-5", "slot": "72"}, {"unit": "C11-1", "slot": "184"}, {"unit": "C15-3", "slot": "208"},
    {"unit": "A3-1", "slot": "30"}, {"unit": "A7-3", "slot": "175"}, {"unit": "A12-6", "slot": "199"}, {"unit": "B3-6", "slot": "171"},
    {"unit": "B7-2", "slot": "23"}, {"unit": "B12-5", "slot": "54"}, {"unit": "C2-1", "slot": "73"}, {"unit": "C6-3", "slot": "129"},
    {"unit": "C11-6", "slot": "196"}, {"unit": "C15-2", "slot": "96"}, {"unit": "A3-6", "slot": "94"}, {"unit": "A8-2", "slot": "147"},
    {"unit": "A12-5", "slot": "156"}, {"unit": "B3-5", "slot": "168"}, {"unit": "B7-1", "slot": "22"}, {"unit": "B12-3", "slot": "95"},
    {"unit": "C2-6", "slot": "191"}, {"unit": "C6-2", "slot": "180"}, {"unit": "C11-5", "slot": "12"}, {"unit": "A3-5", "slot": "84"},
    {"unit": "A8-1", "slot": "126"}, {"unit": "A12-3", "slot": "183"}, {"unit": "B3-3", "slot": "25"}, {"unit": "B8-6", "slot": "58"},
    {"unit": "B12-2", "slot": "44"}, {"unit": "C2-5", "slot": "105"}, {"unit": "C7-1", "slot": "136"}, {"unit": "C11-3", "slot": "217"},
    {"unit": "A3-3", "slot": "83"}, {"unit": "A8-6", "slot": "65"}, {"unit": "A13-2", "slot": "123"}, {"unit": "B3-2", "slot": "31"},
    {"unit": "B8-5", "slot": "39"}, {"unit": "B12-1", "slot": "161"}, {"unit": "C2-3", "slot": "193"}, {"unit": "C7-6", "slot": "104"},
    {"unit": "C11-2", "slot": "214"}, {"unit": "A4-2", "slot": "29"}, {"unit": "A8-5", "slot": "144"}, {"unit": "A13-1", "slot": "177"},
    {"unit": "B3-1", "slot": "165"}, {"unit": "B8-3", "slot": "218"}, {"unit": "B13-6", "slot": "16"}, {"unit": "C2-2", "slot": "37"},
    {"unit": "C7-5", "slot": "85"}, {"unit": "C12-1", "slot": "99"}, {"unit": "A4-1", "slot": "70"}, {"unit": "A8-3", "slot": "153"},
    {"unit": "A13-6", "slot": "74"}, {"unit": "B4-6", "slot": "150"}, {"unit": "B8-2", "slot": "10"}, {"unit": "B13-5", "slot": "92"},
    {"unit": "C3-1", "slot": "194"}, {"unit": "C7-3", "slot": "90"}, {"unit": "C12-6", "slot": "145"}, {"unit": "A4-6", "slot": "93"},
    {"unit": "A9-2", "slot": "121"}, {"unit": "A13-5", "slot": "107"}, {"unit": "B4-5", "slot": "195"}, {"unit": "B8-1", "slot": "49"},
    {"unit": "B13-3", "slot": "102"}, {"unit": "C3-6", "slot": "119"}, {"unit": "C7-2", "slot": "141"}, {"unit": "C12-5", "slot": "178"},
    {"unit": "A4-5", "slot": "140"}, {"unit": "A9-1", "slot": "51"}, {"unit": "A13-3", "slot": "133"}, {"unit": "B4-3", "slot": "116"},
    {"unit": "B9-6", "slot": "27"}, {"unit": "B13-2", "slot": "6"}, {"unit": "C3-5", "slot": "14"}, {"unit": "C8-1", "slot": "189"},
    {"unit": "C12-3", "slot": "151"}, {"unit": "A4-3", "slot": "20"}, {"unit": "A9-6", "slot": "152"}, {"unit": "A14-2", "slot": "124"},
    {"unit": "B4-2", "slot": "42"}, {"unit": "B9-5", "slot": "101"}, {"unit": "B13-1", "slot": "160"}, {"unit": "C3-3", "slot": "202"},
    {"unit": "C8-6", "slot": "61"}, {"unit": "C12-2", "slot": "3"}, {"unit": "A5-2", "slot": "50"}, {"unit": "A9-5", "slot": "63"},
    {"unit": "A14-1", "slot": "89"}, {"unit": "B4-1", "slot": "192"}, {"unit": "B9-3", "slot": "55"}, {"unit": "B14-6", "slot": "169"},
    {"unit": "C3-2", "slot": "52"}, {"unit": "C8-5", "slot": "143"}, {"unit": "C13-1", "slot": "82"}, {"unit": "A5-1", "slot": "149"},
    {"unit": "A9-3", "slot": "38"}, {"unit": "A14-6", "slot": "112"}, {"unit": "B5-6", "slot": "11"}, {"unit": "B9-2", "slot": "108"},
    {"unit": "B14-5", "slot": "17"}, {"unit": "C4-1", "slot": "118"}, {"unit": "C8-3", "slot": "113"}, {"unit": "C13-6", "slot": "172"},
    {"unit": "A5-6", "slot": "15"}, {"unit": "A10-2", "slot": "35"}, {"unit": "A14-5", "slot": "80"}, {"unit": "B5-5", "slot": "69"},
    {"unit": "B9-1", "slot": "46"}, {"unit": "B14-3", "slot": "26"}, {"unit": "C4-6", "slot": "134"}, {"unit": "C8-2", "slot": "138"},
    {"unit": "C13-5", "slot": "170"}, {"unit": "A5-5", "slot": "91"}, {"unit": "A10-1", "slot": "137"}, {"unit": "A14-3", "slot": "181"},
    {"unit": "B5-3", "slot": "40"}, {"unit": "B10-6", "slot": "64"}, {"unit": "B14-2", "slot": "79"}, {"unit": "C4-5", "slot": "201"},
    {"unit": "C9-1", "slot": "212"}, {"unit": "C13-3", "slot": "159"}, {"unit": "A5-3", "slot": "155"}, {"unit": "A10-6", "slot": "122"},
    {"unit": "A15-2", "slot": "179"}, {"unit": "B5-2", "slot": "132"}, {"unit": "B10-5", "slot": "21"}, {"unit": "B14-1", "slot": "97"},
    {"unit": "C4-3", "slot": "182"}, {"unit": "C9-6", "slot": "186"}, {"unit": "C13-2", "slot": "142"}, {"unit": "A6-2", "slot": "162"},
    {"unit": "A10-5", "slot": "117"}, {"unit": "A15-1", "slot": "114"}, {"unit": "B5-1", "slot": "188"}, {"unit": "B10-3", "slot": "200"},
    {"unit": "B15-6", "slot": "203"}, {"unit": "C4-2", "slot": "109"}, {"unit": "C9-5", "slot": "154"}, {"unit": "C14-1", "slot": "148"},
    {"unit": "A6-1", "slot": "198"}, {"unit": "A10-3", "slot": "36"}, {"unit": "A15-6", "slot": "98"}, {"unit": "B6-6", "slot": "158"},
    {"unit": "B10-2", "slot": "34"}, {"unit": "B15-5", "slot": "187"}, {"unit": "C5-1", "slot": "57"}, {"unit": "C9-3", "slot": "167"},
    {"unit": "C14-6", "slot": "86"}, {"unit": "A6-6", "slot": "33"}, {"unit": "A11-2", "slot": "173"}, {"unit": "A15-5", "slot": "174"},
    {"unit": "B6-5", "slot": "125"}, {"unit": "B10-1", "slot": "103"}, {"unit": "B15-3", "slot": "127"}, {"unit": "C5-6", "slot": "88"},
    {"unit": "C9-2", "slot": "78"}, {"unit": "C14-5", "slot": "210"}
];