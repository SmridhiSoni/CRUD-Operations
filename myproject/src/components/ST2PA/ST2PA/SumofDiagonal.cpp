#include<iostream>
#include<bits/stdc++.h>
using namespace std;

       
int main(){
    int n;
    cin>>n;
    int arr[n][n];
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            cin>>arr[i][j];
        }
    }

 int pri=0;
        int sec=0;
       
        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                if(i==j){
                   
                    pri+=arr[i][j];
                    
                }if(i+j==n-1){
                     
                        sec+=arr[i][j];
                       
                }

            }
       
        }
        cout<<sec<<endl;
        cout<<pri<<endl;
        
       
}

