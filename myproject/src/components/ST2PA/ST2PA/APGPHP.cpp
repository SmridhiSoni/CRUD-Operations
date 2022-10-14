#include <iostream>
#include<bits/stdc++.h>
using namespace std;
bool isAp(int arr[],int n){
    if(n==1)
    return true;
    double d=arr[1]-arr[0];
    sort(arr,arr+n);
    for(int i=2;i<n;i++){
        if(arr[i-1]-arr[i]!=d){
            return false;
        }else{
          return true;
        }
    }

}
bool isGP(int arr[],int n){
    if(n==1)
    return true;
    double r=arr[1]/arr[0];
    sort(arr,arr+n);
    for(int i=2;i<n;i++){
        if(arr[i]/arr[i-1]!=r){
            return false;
        }else{
            return true;
        }
    }
}

int main(){
 int n;
 cin>>n;
 int arr[n];
 for(int i=0;i<n;i++){
    cin>>arr[i];
 }
 //cout<< isAp(arr,n);
 if(isAp(arr,n)){
    cout<<"Yes it is an ap";
 }else{
    cout<<"Not a Ap";
 }
 cout<<endl;
 if(isGP(arr,n)){
    cout<<"Yes it is an Gp";



 }else{
    cout<<"No it is an Gp";

 }
}