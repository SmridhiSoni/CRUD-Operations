#include <bits/stdc++.h>
using namespace std;
void printDuplicate(int arr[],int n){
        sort(arr,arr+n);
 unordered_map<int,int>cnt;
 for(int i=0;i<n;i++){
    cnt[arr[i]]++;

 }
 bool dup=false;
 unordered_map<int,int>::iterator itr;
 for(itr=cnt.begin();itr!=cnt.end();itr++){
    if(itr->second>1){
        cout<<itr->first<<" ";
        dup=true;
    }
 }
 if(dup==false){
    cout<<"-1";
 }
}
int main(){
    int arr[] = {12, 11, 40, 12, 5, 6, 5, 12, 11};

    int n = sizeof(arr) / sizeof(arr[0]);
    printDuplicate(arr,n);
}