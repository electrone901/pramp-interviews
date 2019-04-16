/*
Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a 
number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. 
In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

Original alphabet:      abcdefghijklmnopqrstuvwxyz
Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc
For example, the given cleartext  and the alphabet is rotated by . The encrypted string is .

Note: The cipher only encrypts letters; symbols, such as -, remain unencrypted.

Function Description

Complete the caesarCipher function in the editor below. It should return the encrypted string.

caesarCipher has the following parameter(s):

s: a string in cleartext
k: an integer, the alphabet rotation factor
Input Format

The first line contains the integer, , the length of the unencrypted string. 
The second line contains the unencrypted string, . 
The third line contains , the number of letters to rotate the alphabet by.

Constraints

 
 
 is a valid ASCII string without any spaces.

Output Format

For each test case, print the encoded string.

Sample Input

11
middle-Outz
2
Sample Output

okffng-Qwvb
Explanation

Original alphabet:      abcdefghijklmnopqrstuvwxyz
Alphabet rotated +2:    cdefghijklmnopqrstuvwxyzab

m -> o
i -> k
d -> f
d -> f
l -> n
e -> g
-    -
O -> Q
u -> w
t -> v
z -> b
*/

function caesarCipher(str, num) {
    if (num > 26) {
        num = num % 26;
    }
    let res = "";
    for (let i = 0; i < str.length; i++) {
        let asciiVal = str.charCodeAt(i);
        console.log(str[i], asciiVal)

        if (asciiVal >= 65 && asciiVal <= 90) {
            asciiVal = str.charCodeAt(i) + num;
            if (asciiVal > 90) {
                let diff = asciiVal - 90;
                asciiVal = 64 + diff;
            }
        }

        if (asciiVal >= 97 && asciiVal <= 122) {
            asciiVal = str.charCodeAt(i) + num;
            if (asciiVal > 122) {
                let diff = asciiVal - 123;
                asciiVal = 97 + diff;
            }
        }

        res += String.fromCharCode(asciiVal);
    }

    return res;

}