#include <stdio.h>
#include <string.h>

int main() 
{ 
    char stack[50], ip[50], opt[10][10], ter[10]; 
    int i, j, k, n, top = 0, col = -1, row = -1; 

    // Initialize stack and input string 
    for (i = 0; i < 50; i++) { 
        stack[i] = '\0'; 
        ip[i] = '\0'; 
    }

    printf("Enter the number of terminals: "); 
    scanf("%d", &n); 

    printf("Enter the terminals (in order): "); 
    scanf("%s", ter); 

    printf("\nEnter the operator precedence table values:\n"); 
    for (i = 0; i < n; i++) { 
        for (j = 0; j < n; j++) { 
            printf("Enter value for %c %c: ", ter[i], ter[j]); 
            scanf(" %c", &opt[i][j]); // Note the space before %c
        } 
    }

    // Display the operator precedence table
    printf("\nOPERATOR PRECEDENCE TABLE:\n\t");
    for (i = 0; i < n; i++) { 
        printf("%c\t", ter[i]); 
    } 
    printf("\n");

    for (i = 0; i < n; i++) { 
        printf("%c\t", ter[i]); 
        for (j = 0; j < n; j++) { 
            printf("%c\t", opt[i][j]); 
        } 
        printf("\n"); 
    }

    // Initialize stack with $
    stack[top] = '$'; 

    printf("\nEnter the input string (end with $): "); 
    scanf("%s", ip); 

    i = 0; 
    printf("\nSTACK\t\t\tINPUT STRING\t\tACTION\n"); 
    printf("---------------------------------------------------------------\n");

    while (1) {
        col = row = -1;
        for (k = 0; k < n; k++) {
            if (stack[top] == ter[k])
                col = k;
            if (ip[i] == ter[k])
                row = k;
        }

        if (col == -1 || row == -1) {
            printf("\nError: Invalid input character found.\n");
            break;
        }

        // Acceptance condition
        if (stack[top] == '$' && ip[i] == '$') {
            for (k = 0; k <= top; k++) printf("%c", stack[k]);
            printf("\t\t\t");
            for (k = i; k < strlen(ip); k++) printf("%c", ip[k]);
            printf("\t\t\tString is accepted\n");
            break;
        }

        // Shift
        if (opt[col][row] == '<' || opt[col][row] == '=') {
            char action[20];
            sprintf(action, "Shift %c", ip[i]);
            stack[++top] = ip[i];
            i++;

            for (k = 0; k <= top; k++) printf("%c", stack[k]);
            printf("\t\t\t");
            for (k = i; k < strlen(ip); k++) printf("%c", ip[k]);
            printf("\t\t\t%s\n", action);
        }

        // Reduce
        else if (opt[col][row] == '>') {
            while (top > 0 && stack[top] != '$' && stack[top] != '<') {
                top--;
            }
            if (top > 0) top--; // Pop one more if you assume '<' as a marker

            for (k = 0; k <= top; k++) printf("%c", stack[k]);
            printf("\t\t\t");
            for (k = i; k < strlen(ip); k++) printf("%c", ip[k]);
            printf("\t\t\tReduce\n");
        }

        // Invalid case
        else {
            printf("\nError: Invalid precedence relation detected!\n");
            break;
        }
    }

    return 0;
}
