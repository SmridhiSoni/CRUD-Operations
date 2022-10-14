#include <bits/stdc++.h>
using namespace std;

string replaceWord(string word, string str1, string str2) {
    while (word.find(str1) < word.length()) {
        word.replace(word.find(str1), str1.length(), str2);
    }
    return word;
}

int main() {

    cout << replaceWord("hellomanhelloman", "man", "lady");

    return 0;

}