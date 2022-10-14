#include <iostream>

using namespace std;

bool rainbow(int arr[],int n){

    int i=0;
    int j=n-1;
    bool flag=true;

    if(arr[0]!=1){
        flag=false;
    }
    while(i<j){
        if(arr[i]!=arr[i+1] && arr[i+1]!=arr[i]+1){
            flag=false;
            break;
        }

        if(arr[i]!=arr[j]){
            flag=false;
            break;  
        }

        i++;
        j--;
    }
    if(arr[i]!=7){
        flag=false;
    }

    return flag;

}

int main()
{
    int arr[]={1,2,3,4,5,6,7,6,5,4,3,2,1};
    cout <<rainbow(arr,13);
    return 0;
}
//max min 
// int i=0;
// int j=n-1;
// while(i<j){
//     if(arr[i]==arr[j]){
//         i++;
//         j--;
    
//         return false;
//     }
//     return true;
// }
//rainbow 
//palindrome
//check prime--using recursion
//****//array 1 element =1
//array 2 element 2

//fibonacci number-last number of fibonacci
//array of number odd num sum ,even ka sum
//1 1+2 1+2+3 1+2+3+4 
//1 2+2 3+3+3 4+4+4+4
//twin prime number --difference 2
//coprimes
//two binary number and there sum
//replace a string
//ek integer ko first last ko swap//12345==52341
//typecasting
////max min
//sumof array of number count the number of digit in the sum
//AP GP
//replace character without space--string
//sum of all natural number
//
//sum of cube number




