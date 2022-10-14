#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int main()
{
   int n;
   cin>>n;
   int arr[n];
   for(int i=0;i<n;i++){
       cin>>arr[i];
   }
   int sum=0;
   int cnt=0;
   for(int i=0;i<n;i++){
       sum+=arr[i];
   }
   cout<<sum<<endl;
   while(sum>0){
   cnt++;
   sum=sum/10;
  
}
 cout<<cnt;
}
