#include <bits/stdc++.h>
using namespace std;

int main() {

    int n;
    cin>>n;
    int sum=0;
    for(int i=1;i<=n;i++){
        sum=n*(n+1)/2;
        sum*=sum;
    }
  cout<<sum;

    return 0;

}