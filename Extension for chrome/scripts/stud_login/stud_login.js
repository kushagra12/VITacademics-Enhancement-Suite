/*!
 * Modified code of original work 'AutoCaptcha-for-VITacademics Copyright (c) 2014 Karthik Balakrishnan'
 * MIT License (https://github.com/karthikb351/AutoCaptcha-for-VITacademics/blob/master/LICENSE)
 */

$(function () {

    var keys = {
        "0": [
            ["0", "0", "0", "1", "1", "1", "1", "0", "0", "0"],
            ["0", "1", "1", "1", "1", "1", "1", "1", "1", "0"],
            ["0", "1", "1", "1", "0", "0", "0", "1", "1", "0"],
            ["1", "1", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "0", "0", "0", "0", "1", "1", "1", "1"],
            ["1", "1", "0", "0", "0", "1", "1", "0", "1", "1"],
            ["1", "1", "0", "0", "1", "1", "0", "0", "1", "1"],
            ["1", "1", "0", "1", "1", "0", "0", "0", "1", "1"],
            ["1", "1", "1", "1", "0", "0", "0", "0", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1"],
            ["0", "1", "1", "0", "0", "0", "1", "1", "1", "0"],
            ["0", "1", "1", "1", "1", "1", "1", "1", "1", "0"],
            ["0", "0", "0", "1", "1", "1", "1", "0", "0", "0"]
        ],
        "1": [
            ["0", "0", "0", "1", "1", "1", "0", "0", "0"],
            ["0", "0", "0", "1", "1", "1", "0", "0", "0"],
            ["1", "1", "1", "1", "1", "1", "0", "0", "0"],
            ["1", "1", "1", "1", "1", "1", "0", "0", "0"],
            ["0", "0", "0", "1", "1", "1", "0", "0", "0"],
            ["0", "0", "0", "1", "1", "1", "0", "0", "0"],
            ["0", "0", "0", "1", "1", "1", "0", "0", "0"],
            ["0", "0", "0", "1", "1", "1", "0", "0", "0"],
            ["0", "0", "0", "1", "1", "1", "0", "0", "0"],
            ["0", "0", "0", "1", "1", "1", "0", "0", "0"],
            ["0", "0", "0", "1", "1", "1", "0", "0", "0"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "1"]
        ],
        "2": [
            ["0", "1", "1", "1", "1", "1", "1", "0", "0", "0"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "0", "0"],
            ["1", "1", "0", "0", "0", "1", "1", "1", "1", "0"],
            ["1", "0", "0", "0", "0", "0", "1", "1", "1", "0"],
            ["0", "0", "0", "0", "0", "0", "1", "1", "1", "0"],
            ["0", "0", "0", "0", "0", "0", "1", "1", "1", "0"],
            ["0", "0", "0", "0", "0", "1", "1", "1", "0", "0"],
            ["0", "0", "0", "0", "1", "1", "1", "1", "0", "0"],
            ["0", "0", "0", "1", "1", "1", "1", "0", "0", "0"],
            ["0", "0", "1", "1", "1", "1", "0", "0", "0", "0"],
            ["0", "1", "1", "1", "1", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]
        ],
        "3": [
            ["0", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "0"],
            ["0", "0", "0", "1", "1", "1", "1", "1", "1", "0", "0"],
            ["0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0"],
            ["0", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0"]
        ],
        "4": [
            ["0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "0", "0"],
            ["0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "0", "0"],
            ["0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "0", "0"],
            ["0", "0", "0", "0", "1", "1", "0", "1", "1", "1", "0", "0"],
            ["0", "0", "0", "1", "1", "1", "0", "1", "1", "1", "0", "0"],
            ["0", "0", "1", "1", "1", "0", "0", "1", "1", "1", "0", "0"],
            ["0", "1", "1", "1", "0", "0", "0", "1", "1", "1", "0", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "0", "0"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
            ["0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "0", "0"]
        ],
        "5": [
            ["0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
            ["0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
            ["0", "1", "1", "1", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "1", "1", "1", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0"],
            ["0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "0"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0"],
            ["0", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0"]
        ],
        "6": [
            ["0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "0"],
            ["0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "0"],
            ["0", "1", "1", "1", "1", "0", "0", "0", "0", "0", "0"],
            ["0", "1", "1", "1", "0", "0", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "0", "1", "1", "1", "1", "1", "0", "0"],
            ["1", "1", "1", "0", "1", "1", "1", "1", "1", "1", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["0", "1", "1", "1", "0", "0", "0", "1", "1", "1", "0"],
            ["0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0"],
            ["0", "0", "0", "1", "1", "1", "1", "1", "0", "0", "0"]
        ],
        "7": [
            ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
            ["0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1"],
            ["0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "0"],
            ["0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "0"],
            ["0", "0", "0", "0", "0", "0", "1", "1", "1", "0", "0"],
            ["0", "0", "0", "0", "0", "1", "1", "1", "0", "0", "0"],
            ["0", "0", "0", "0", "1", "1", "1", "1", "0", "0", "0"],
            ["0", "0", "0", "0", "1", "1", "1", "0", "0", "0", "0"],
            ["0", "0", "0", "1", "1", "1", "1", "0", "0", "0", "0"],
            ["0", "0", "0", "1", "1", "1", "0", "0", "0", "0", "0"],
            ["0", "0", "1", "1", "1", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "1", "1", "1", "0", "0", "0", "0", "0", "0"]
        ],
        "8": [
            ["0", "0", "1", "1", "1", "1", "1", "1", "1", "0", "0"],
            ["0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "1", "0", "0", "0", "1", "1", "1", "0"],
            ["0", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0"],
            ["0", "0", "1", "1", "1", "1", "1", "1", "1", "0", "0"],
            ["0", "1", "1", "1", "0", "1", "1", "1", "1", "1", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "1", "0", "0", "0", "1", "1", "1", "1"],
            ["0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0"],
            ["0", "0", "1", "1", "1", "1", "1", "1", "0", "0", "0"]
        ],
        "9": [
            ["0", "0", "0", "1", "1", "1", "1", "1", "0", "0", "0"],
            ["0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0"],
            ["0", "1", "1", "1", "0", "0", "0", "1", "1", "1", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "1", "0", "0", "0", "0", "1", "1", "1"],
            ["0", "1", "1", "1", "1", "1", "1", "0", "1", "1", "1"],
            ["0", "0", "1", "1", "1", "1", "1", "0", "1", "1", "1"],
            ["0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "0"],
            ["0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "0"],
            ["0", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0"],
            ["0", "1", "1", "1", "1", "1", "1", "0", "0", "0", "0"]
        ],
        "A": [
            ["0", "0", "0", "0", "1", "1", "1", "1", "0", "0", "0", "0"],
            ["0", "0", "0", "1", "1", "1", "1", "1", "1", "0", "0", "0"],
            ["0", "0", "0", "1", "1", "1", "1", "1", "1", "0", "0", "0"],
            ["0", "0", "0", "1", "1", "1", "1", "1", "1", "0", "0", "0"],
            ["0", "0", "1", "1", "1", "0", "0", "1", "1", "1", "0", "0"],
            ["0", "0", "1", "1", "1", "0", "0", "1", "1", "1", "0", "0"],
            ["0", "1", "1", "1", "1", "0", "0", "1", "1", "1", "1", "0"],
            ["0", "1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "0"],
            ["0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1"]
        ],
        "B": [
            ["1", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "0"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0"]
        ],
        "C": [
            ["0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "0"],
            ["0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
            ["0", "1", "1", "1", "1", "0", "0", "0", "0", "1", "1"],
            ["0", "1", "1", "1", "0", "0", "0", "0", "0", "0", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "1", "1", "1", "0", "0", "0", "0", "0", "0", "1"],
            ["0", "1", "1", "1", "1", "0", "0", "0", "0", "1", "1"],
            ["0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
            ["0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "0"]
        ],
        "D": [
            ["1", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0", "0"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "1", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "1", "0"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0", "0"]
        ],
        "E": [
            ["1", "1", "1", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "0"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "1"]
        ],
        "F": [
            ["1", "1", "1", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0"]
        ],
        "G": [
            ["0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "0", "0"],
            ["0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
            ["0", "1", "1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["0", "1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["0", "1", "1", "1", "0", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["0", "1", "1", "1", "1", "1", "0", "0", "0", "0", "1", "1", "1"],
            ["0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
            ["0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "0", "0"]
        ],
        "H": [
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"]
        ],
        "I": [
            ["1", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", "1"],
            ["0", "0", "1", "1", "1", "0", "0"],
            ["0", "0", "1", "1", "1", "0", "0"],
            ["0", "0", "1", "1", "1", "0", "0"],
            ["0", "0", "1", "1", "1", "0", "0"],
            ["0", "0", "1", "1", "1", "0", "0"],
            ["0", "0", "1", "1", "1", "0", "0"],
            ["0", "0", "1", "1", "1", "0", "0"],
            ["0", "0", "1", "1", "1", "0", "0"],
            ["0", "0", "1", "1", "1", "0", "0"],
            ["1", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", "1"]
        ],
        "J": [
            ["0", "0", "1", "1", "1", "1", "1", "1"],
            ["0", "0", "1", "1", "1", "1", "1", "1"],
            ["0", "0", "0", "0", "0", "1", "1", "1"],
            ["0", "0", "0", "0", "0", "1", "1", "1"],
            ["0", "0", "0", "0", "0", "1", "1", "1"],
            ["0", "0", "0", "0", "0", "1", "1", "1"],
            ["0", "0", "0", "0", "0", "1", "1", "1"],
            ["0", "0", "0", "0", "0", "1", "1", "1"],
            ["0", "0", "0", "0", "0", "1", "1", "1"],
            ["0", "0", "0", "0", "0", "1", "1", "1"],
            ["0", "0", "0", "0", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", "1", "0"],
            ["1", "1", "1", "1", "1", "1", "0", "0"]
        ],
        "K": [
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "1", "1", "1", "1", "0"],
            ["1", "1", "1", "0", "0", "1", "1", "1", "1", "0", "0"],
            ["1", "1", "1", "0", "0", "1", "1", "1", "0", "0", "0"],
            ["1", "1", "1", "0", "1", "1", "1", "0", "0", "0", "0"],
            ["1", "1", "1", "1", "1", "1", "1", "0", "0", "0", "0"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0"],
            ["1", "1", "1", "0", "0", "1", "1", "1", "0", "0", "0"],
            ["1", "1", "1", "0", "0", "0", "1", "1", "1", "0", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"]
        ],
        "L": [
            ["1", "1", "1", "0", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "1"]
        ],
        "M": [
            ["1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "0", "0", "0", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "0", "0", "0", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", "0", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "0", "1", "1", "0", "1", "1", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "1", "1", "1", "1", "1", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "1", "1", "1", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "1", "1", "1", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1"]
        ],
        "N": [
            ["1", "1", "1", "1", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "1", "1", "1", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "1", "1", "1", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"]
        ],
        "O": [
            ["0", "0", "0", "0", "1", "1", "1", "1", "1", "0", "0", "0", "0"],
            ["0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0"],
            ["0", "1", "1", "1", "1", "0", "0", "0", "1", "1", "1", "1", "0"],
            ["0", "1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["0", "1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1", "0"],
            ["0", "1", "1", "1", "1", "0", "0", "0", "1", "1", "1", "1", "0"],
            ["0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0"],
            ["0", "0", "0", "0", "1", "1", "1", "1", "1", "0", "0", "0", "0"]
        ],
        "P": [
            ["1", "1", "1", "1", "1", "1", "1", "1", "0", "0"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "1", "0"],
            ["1", "1", "1", "0", "0", "0", "1", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "1", "0"],
            ["1", "1", "1", "1", "1", "1", "1", "0", "0", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0", "0"]
        ],
        "Q": [
            ["0", "0", "0", "1", "1", "1", "1", "1", "1", "0", "0", "0"],
            ["0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0"],
            ["0", "1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "0"],
            ["0", "1", "1", "0", "0", "0", "0", "0", "0", "1", "1", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "1", "1"],
            ["1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1"],
            ["1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1"],
            ["1", "1", "0", "0", "0", "0", "0", "1", "0", "0", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "1", "1", "0", "1", "1"],
            ["0", "1", "1", "0", "0", "0", "0", "1", "1", "1", "1", "0"],
            ["0", "1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "0"],
            ["0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0"],
            ["0", "0", "0", "1", "1", "1", "1", "1", "1", "0", "1", "0"]
        ],
        "R": [
            ["1", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "0"],
            ["1", "1", "1", "0", "0", "0", "1", "1", "1", "1", "0"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0"],
            ["1", "1", "1", "0", "0", "1", "1", "1", "1", "0", "0"],
            ["1", "1", "1", "0", "0", "0", "1", "1", "1", "0", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"]
        ],
        "S": [
            ["0", "0", "0", "1", "1", "1", "1", "1", "1", "0", "0"],
            ["0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0"],
            ["1", "1", "1", "1", "0", "0", "0", "0", "1", "1", "0"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0", "1", "0"],
            ["1", "1", "1", "1", "0", "0", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0"],
            ["0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0"],
            ["0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "1"],
            ["0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1"],
            ["1", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0"],
            ["0", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0"]
        ],
        "T": [
            ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
            ["0", "0", "0", "0", "1", "1", "1", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "1", "1", "1", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "1", "1", "1", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "1", "1", "1", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "1", "1", "1", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "1", "1", "1", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "1", "1", "1", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "1", "1", "1", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "1", "1", "1", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "1", "1", "1", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "1", "1", "1", "0", "0", "0", "0"]
        ],
        "U": [
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "1", "0", "0", "0", "1", "1", "1", "1"],
            ["0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0"],
            ["0", "0", "0", "1", "1", "1", "1", "1", "0", "0", "0"]
        ],
        "V": [
            ["1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1", "1"],
            ["0", "1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "0"],
            ["0", "1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "0"],
            ["0", "0", "1", "1", "1", "0", "0", "1", "1", "1", "0", "0"],
            ["0", "0", "1", "1", "1", "0", "0", "1", "1", "1", "0", "0"],
            ["0", "0", "1", "1", "1", "0", "0", "1", "1", "1", "0", "0"],
            ["0", "0", "0", "1", "1", "1", "1", "1", "1", "0", "0", "0"],
            ["0", "0", "0", "1", "1", "1", "1", "1", "1", "0", "0", "0"],
            ["0", "0", "0", "1", "1", "1", "1", "1", "1", "0", "0", "0"],
            ["0", "0", "0", "0", "1", "1", "1", "1", "0", "0", "0", "0"]
        ],
        "W": [
            ["1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "1", "1", "1", "1", "1", "0", "0", "0", "1", "1", "1"],
            ["0", "1", "1", "1", "0", "0", "1", "1", "0", "1", "1", "0", "0", "1", "1", "1", "0"],
            ["0", "1", "1", "1", "0", "0", "1", "1", "0", "1", "1", "0", "0", "1", "1", "1", "0"],
            ["0", "1", "1", "1", "0", "1", "1", "1", "0", "1", "1", "1", "0", "1", "1", "1", "0"],
            ["0", "1", "1", "1", "0", "1", "1", "1", "0", "1", "1", "1", "0", "1", "1", "1", "0"],
            ["0", "1", "1", "1", "0", "1", "1", "0", "0", "0", "1", "1", "0", "1", "1", "1", "0"],
            ["0", "1", "1", "1", "0", "1", "1", "0", "0", "0", "1", "1", "0", "1", "1", "1", "0"],
            ["0", "0", "1", "1", "1", "1", "1", "0", "0", "0", "1", "1", "1", "1", "1", "0", "0"],
            ["0", "0", "1", "1", "1", "1", "1", "0", "0", "0", "1", "1", "1", "1", "1", "0", "0"],
            ["0", "0", "1", "1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1", "1", "0", "0"],
            ["0", "0", "1", "1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1", "1", "0", "0"]
        ],
        "X": [
            ["1", "1", "1", "0", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "1"],
            ["0", "1", "1", "1", "1", "0", "0", "1", "1", "1", "1", "0"],
            ["0", "0", "1", "1", "1", "0", "0", "1", "1", "1", "0", "0"],
            ["0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0"],
            ["0", "0", "0", "1", "1", "1", "1", "1", "1", "0", "0", "0"],
            ["0", "0", "0", "0", "1", "1", "1", "1", "0", "0", "0", "0"],
            ["0", "0", "0", "1", "1", "1", "1", "1", "1", "0", "0", "0"],
            ["0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0"],
            ["0", "0", "1", "1", "1", "0", "0", "1", "1", "1", "0", "0"],
            ["0", "1", "1", "1", "1", "0", "0", "1", "1", "1", "1", "0"],
            ["1", "1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "0", "1", "1", "1"]
        ],
        "Y": [
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["0", "1", "1", "1", "0", "0", "0", "1", "1", "1", "0"],
            ["0", "1", "1", "1", "1", "0", "1", "1", "1", "1", "0"],
            ["0", "0", "1", "1", "1", "0", "1", "1", "1", "0", "0"],
            ["0", "0", "1", "1", "1", "1", "1", "1", "1", "0", "0"],
            ["0", "0", "0", "1", "1", "1", "1", "1", "0", "0", "0"],
            ["0", "0", "0", "0", "1", "1", "1", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "1", "1", "1", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "1", "1", "1", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "1", "1", "1", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "1", "1", "1", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "1", "1", "1", "0", "0", "0", "0"]
        ],
        "Z": [
            ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
            ["0", "0", "0", "0", "0", "0", "1", "1", "1", "1"],
            ["0", "0", "0", "0", "0", "1", "1", "1", "1", "0"],
            ["0", "0", "0", "0", "0", "1", "1", "1", "0", "0"],
            ["0", "0", "0", "0", "1", "1", "1", "0", "0", "0"],
            ["0", "0", "0", "1", "1", "1", "1", "0", "0", "0"],
            ["0", "0", "0", "1", "1", "1", "0", "0", "0", "0"],
            ["0", "0", "1", "1", "1", "0", "0", "0", "0", "0"],
            ["0", "1", "1", "1", "1", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "1", "0", "0", "0", "0", "0", "0"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]
        ]
    };
    var order = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    function matchImg(rx, ry, pix, mask) {
        flag = 1;
        breakflag = 0;
        x = 0;
        y = 0;
        count = 0;
        for (var x = 0; x < mask.length; ++x) {
            for (var y = 0; y < mask[0].length; ++y) {
                try {
                    if (mask[x][y] == '1') {
                        if (pix[rx + x][ry + y] == '1') {
                            count += 1;
                        } else {
                            flag = 0;
                            breakflag = 1;
                            break;
                        }
                    }
                } catch (e) {
                    flag = 0;
                    breakflag = 1;
                    break;
                }
            }
            if (breakflag) {
                break;
            }
        }
        if (count === 0) {
            flag = 0;
        }
        return flag;
    }

    function skip(start, end, y) {
        flag = 0;
        for (var i = 0; i < start.length; ++i) {
            if (y >= start[i] && y <= end[i]) {
                flag = 1;
                break;
            }
        }
        return flag;
    }

    function sort(sorter, captcha) {
        for (var i = 0; i < sorter.length; ++i) {
            less = sorter[i];
            swap = 0;
            ls = i;
            for (var k = i; k < sorter.length; k++) {
                if (sorter[k] < less) {
                    less = sorter[k];
                    ls = k;
                    swap = 1;
                }
            }
            if (swap) {
                temps = sorter[i];
                sorter[i] = sorter[ls];
                sorter[ls] = temps;
                tempc = captcha[i];
                captcha[i] = captcha[ls];
                captcha[ls] = tempc;
            }
        }
    }


    var getPixelMapFromImageData = function (imgData) {
        var pixMap = [];
        var count = 0;
        var temp = [];
        for (var i = 0; i < imgData.data.length; i += 4) {
            if (imgData.data[i + 0] == 255 && imgData.data[i + 1] == 254 && imgData.data[i + 2] == 223 && imgData.data[i + 3] == 255)
                temp.push(0);
            else
                temp.push(1);
            count++;
            if (count % 130 == 0) {
                pixMap.push(temp);
                temp = [];
            }
        }
        return pixMap;
    };


    var getCaptcha = function (img) {

        temp = 0;
        var x, y;
        for (x = 0; x < 25; ++x) {
            for (y = 0; y < 130; ++y) {
                temp = img[x][y];
                if (x !== 0 && x !== 24)
                    if (img[x + 1][y] === 0 && temp === 1 && img[x - 1][y] === 0) {
                        img[x][y] = 0;
                    }

            }
        }
        yoff = 2;
        xoff = 2;
        skipstart = [];
        skipend = [];
        sorter = [];
        captcha = [];
        for (var l = 0; l < 36; ++l) {
            mask = keys[order[l]];
            f = 0;
            for (x = xoff; x < 25; ++x) {
                for (y = yoff; y < 130; ++y) {
                    if (skip(skipstart, skipend, y))
                        continue;
                    else {
                        if (matchImg(x, y, img, mask)) {
                            skipstart.push(y);
                            skipend.push(y + mask[0].length);
                            sorter.push(y);
                            captcha.push(order[l]);
                            f = f + 1;
                        }
                    }
                }
            }
            if (f == 6)
                break;
        }
        sort(sorter, captcha);
        res = "";
        for (var i = 0; i < captcha.length; ++i) {
            res = res + captcha[i];
        }
        return res;
    };

    function loaded() {

        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        var img = document.getElementById('imgCaptcha');
        context.drawImage(img, 0, 0);
        var imgData = context.getImageData(0, 0, img.width, img.height);

        var pixMap = getPixelMapFromImageData(imgData);
        var captcha = getCaptcha(pixMap);

        if (captcha.length == 6) {
            var textbox = document.getElementsByName('vrfcd')[0];
            textbox.value = captcha;
        }

        document.querySelector('input[type="submit"]').focus();

    }


    $("link[href='style.css']").remove(); //remove remove default css file
    $("link[href='style2.css']").remove();
    $("body").addClass("container");
    $('body').load(chrome.extension.getURL("scripts/stud_login/stud_login.html"), function () {
        $('#doodle-text').load('https://vtop-doodle.azurewebsites.net/doodle.txt'); // get doodle txt
        loaded();
    }); //Content inside body tag will be replaced by content in stud_login.html
});