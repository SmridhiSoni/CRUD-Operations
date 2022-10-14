#include <iostream>
using namespace std;
void reverse(int arr[],int start,int end){
    while(start<end){
        int temp=arr[start];
        arr[start]=arr[end];
        arr[end]=temp;
        start++;
        end--;
    }
}
void RotateArray(int arr[],int d,int n)
{   
    if(d==0){
        return;
    }
    reverse(arr,0,d-1);
    reverse(arr,d,n-1);
    reverse(arr,0,n-1);



    
    }
    int main(){
    int n;
    cin>>n;
    int d=2;
    int arr[n];
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
    
    for(int i=0;i<n;i++){
        cout<<arr[i];
    }
    RotateArray(arr,d,n);
    cout<<endl;
     for(int i=0;i<n;i++){
        cout<<arr[i];
    }
}