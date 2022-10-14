#include <iostream>
#include<bits/stdc++.h>
using namespace std;
int rainWater(int a[],int n){
    
    int left[n];
    int right[n];
    left[0]=a[0];

    for(int i=1;i<n;i++){
        left[i]=max(left[i-1],a[i]);
    }
    right[n-1]=a[n-1];
    for(int i=n-2;i>=0;i--){
        right[i]=max(right[i+1],a[i]);
    }
    int ans=0;
    for(int i=1;i<n-1;i++){
    int var=min(left[i-1],right[i+1]);
    if(var>a[i]){
        ans+=var-a[i];
    }
    }
    return ans;
}
int main(){
   
   
    int a[]={0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1};
    int n = sizeof(a) / sizeof(a[0]);
    cout<<rainWater(a,n);
}