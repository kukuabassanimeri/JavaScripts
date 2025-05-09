//* A regular expression - sequence of characters that forms a search pattern
//* syntax - /pattern/modifiers;

//* Using string methods
//* search () - uses an expression to search for a match, and returns the position of the match
//* replace () - returns a modified string where the pattern is replaced

//* using string search with string
let text = "Learning JavaScript";
let n = text.search("JavaScript");
document.querySelector(".string-search").innerHTML = n;

//* using string search wth regular
let r = text.search(/JavaScript/i);
document.querySelector(".regular-express").innerHTML = r;  

//* [a-z] - select all lowerCase
//* [A-Z] - select all upperCase
//* [0-9] - select range of number
//* [.] - select everything expect newline character
//* [\w] - select all letters, numbers and _ and the opposite is [\W]
//* [\d] - lowercase digits and opposite is [\D]
//* [\s] - select all white space and opposite is [\S]
//* [\s\S] - select everything including line breaks

//* [^] - what starts a line eg [^I]
//* [$] - what ends the line eg [d$]
//* [\character] - escape period eg [\.]
//* [?] - lazy selector or optional
//* [+] - select at least one character
//* [*] - select zero or more characters
//* [|] - or selector

