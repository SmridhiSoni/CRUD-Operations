#include <bits/stdc++.h>
using namespace std;
bool prime(int n,int i=2){
    
    if (n==0 ||n==1){
        return false;
    }
    if(i>=n){
        return true;
    }
    if(n%i==0){
        return false;

    }
    else{ return prime(n,i+1);}

    }
    void Twinprime(int n){
        for(int i=2;i<=n-2;i++)
        {
        if(prime(i)==1 && prime(i+2)==1){
            cout<<i<<" "<<i+2<<endl;

        }
        }

    }
int main() {

    int n;
    cin>>n;
    Twinprime(n);

    return 0;

}