#include<iostream>
#include<bits/stdc++.h>
using namespace std;
void perfectNo(int n){
    int sum=0;
    for(int i=1;i<n;i++){
        if(n%i==0){
            sum+=i;
        }
    }
    if(n==sum){
        cout<<"Yes";
    }else{
        cout<<"No";
    }
}
int main(){
perfectNo(28);
}