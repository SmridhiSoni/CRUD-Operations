#include <iostream>
using namespace std;
int FindPeak(int arr[],int n){
    if(n==1)
    return 0;
    if(arr[0]>=arr[1])
    return 0;
    if(arr[n-1]>=arr[n-2])
    return n-1;
    for(int i=0;i<n;i++){
        if(arr[i]>=arr[i-1]&&arr[i]>arr[i+1])
        return i;
    }
}
int main(){
    int n;
    cin>>n;
    int arr[n];
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
    cout<<FindPeak(arr,n);
    
}