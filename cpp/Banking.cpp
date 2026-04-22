#include<iostream>
#include<iomanip>

using namespace std;


void showBalance(double balance);
double deposit();
double withdraw(double balance);


int main(){
   int choice = 0;
       double balance = 0;
do{


    cout << "***************Banka La Leo**************\n";
    cout << "Enter your choice\n";
    cout << "1 for balance\n";
    cout << "2 for deposit\n";
    cout << "3 for withdrawal\n";
    cout << "4 for exit\n";
    cin >> choice;
    cin.clear();
    fflush(stdin);

    switch(choice){

        case 1: showBalance(balance);
            break;
        case 2: balance += deposit();
            showBalance(balance);
            break;
        case 3: balance -= withdraw(balance);
            showBalance(balance);
            break;
        case 4: cout << "Thanks for using Banka La Leo! \n";
            break;
        default:
            cout << "Please choose a valid choice \n";

    }
    }while(choice != 4);

return 0;

    
}

void showBalance(double balance){
    cout << "You balance is: £ " << setprecision(2) << fixed << balance << '\n';

}
double deposit(){

    double amount = 0;
    cout << "Enter amount to be deposited: ";
    cin >> amount;

    if(amount > 0){
    return amount;

    }
    else{
        cout << "That is not a valid amount\n\n";
        return 0;
    }

}



double withdraw(double balance){
    double amount = 0;

    cout << "Enter amount to be withdrawn: ";
    cin >> amount;

    if(amount > balance){
        cout << "Insufficient funds!\n\n";
        return 0;
    }
    else if(amount < 0){
        cout << "That is not a valid amount\n\n";
          return 0;
    }
    else{
            return amount;
    }
    return 0;
}
