#include<iostream>
using namespace std;
bool isPalindrome(string s1,string s2){
int i=0;
int j=s1.length()-1;
  while(i<j){
  if(s1[i]==s2[j]){
    i++;
    j--;
  }
  else{
    return false;
  }
  return true;
}
}
int main(){
    string s1;
    cin>>s1;
    string s2;
    cin>>s2;
    cout<<isPalindrome(s1,s2);
}