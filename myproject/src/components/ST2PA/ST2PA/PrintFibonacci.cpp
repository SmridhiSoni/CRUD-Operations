
#include <iostream>
#include <bits/stdc++.h>
using namespace std;
int main()
{
  int n;
  cin>>n;
  int a=0;
  int b=1;
  int c;
  for(int i=0;i<n;i++){
     // cout<<a;
        c=a+b;
      a=b;
      b=c;
  }
  cout<<a;
}