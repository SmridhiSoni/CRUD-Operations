#include <iostream>
using namespace std;
int BinarySearch(int arr[],int n,int k){
    int mid,left=0,right=n-1;
    if(right>=left){
        mid=left+(right-left)/2;
        if(arr[mid]==k){
        return mid;
        }
       else if(arr[mid]>k){
        return left=mid-1;
       }
        else{
            return right=mid+1;
        }
return -1;
        
    }
}
int main(){
  int n;
  cin>>n;
  int k;
  cin>>k;
  int arr[n];
  for(int i=0;i<n;i++){
    cin>>arr[i];
  }
 cout<< BinarySearch(arr,n,k);
 cout<<endl;
//   for(int i=0;i<n;i++){
//     cout<<arr[i];
//   }
}