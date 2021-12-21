#include <stdio.h>

int A(int n) {
	if(n == 1) {
		return 1;
	}
	else {
		return A(n-1)+n;
	}
}

int main() {
	printf("%d", A(4));
return 0;
}
