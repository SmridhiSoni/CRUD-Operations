#include <iostream>
using namespace std;
int main(){
    int n,r,temp,sum=0;
    cin>>n;
         temp=n;
    while(n>0){
   
        r=n%10;
        sum=sum+(r*r*r);
        n=n/10;
    }
    if(sum==temp){
        cout<<"Yes ";
    }else{
        cout<<"No";
    }
}