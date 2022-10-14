#include <iostream>
using namespace std;

int gcd(int x, int y) {
    if (x == 0 || y == 0) return false;
    if (x == y) return x;
    if (x > y) return gcd(x - y, y);
    return gcd(x, y - x);
}

bool coprimes(int x, int y) {
    return gcd(x, y) == 1;
}

int main() {

    int x, y;cin >> x >> y;
    cout << boolalpha << "AreCoprime?: " << coprimes(x, y) << endl;

    return 0;

}