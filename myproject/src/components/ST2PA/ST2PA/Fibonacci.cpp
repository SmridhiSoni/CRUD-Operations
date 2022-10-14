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
   for(int i=0;i<n;i++){
   int start=0,end=n-1;

       int temp=arr[start];
       arr[start]=arr[end];
       arr[end]=temp;
   }
   for(int i=0;i<n;i++){
       cout<<arr[i];
   }

}