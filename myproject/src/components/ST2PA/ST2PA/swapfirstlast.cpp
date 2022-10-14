#include <iostream>

using namespace std;

int swapp(int n){

    string st=to_string(n);
    string res="";
    res+=st[st.length()-1];
    for(int i=1;i<st.length()-1;i++){
        res+=st[i];
    }
    res+=st[0];
    int ans=stoi(res);
    return ans;

}

int main()
{
    cout << swapp(12345);
    return 0;
}