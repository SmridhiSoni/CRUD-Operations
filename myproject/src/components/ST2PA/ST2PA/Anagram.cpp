#include<iostream>
#include<bits/stdc++.h>
using namespace std;
bool Anagram(string s1,string s2){
    if(s1.length()!=s2.length())
    return false;
    sort(s1.begin(),s1.end());
    sort(s2.begin(),s2.end());
    for(int i=0;i<s1.length();i++){
        if(s1[i]!=s2[i])
        return false;
    }
        return true;
    }


int main(){
    string s1="cow";
    string s2="coo";
    cout<<Anagram(s1,s2);
}