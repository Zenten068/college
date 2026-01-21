class bank_account():

    def __init__(self,account_no,name,balance):
        self.account=account_no
        self.name=name
        self.bal=balance

    def show(self):
        print("account no. ", self.account)
        print("name ", self.name )
        print("total bank balance ", self.bal)

    def deposit(self,amt):
        self.amt=amt
        self.bal+=amt
        print(f"total balance after ammount {self.amt} is deposited {self.bal}")

    def withdraw(self,w_amt):
        self.w_amt=w_amt
        if self.bal<w_amt:
            print("insufficient balance")
        else:
            self.bal-=w_amt
            print(f"total balance after ammount {self.w_amt} is withdrawn {self.bal}")
    
c1=bank_account(123,"Vinay",20000)
c1.show


a=int(input("press 1 to deposit | press 2 to withdraw "))
if a==1:
    amt=int(input("enter amount to be deposited: "))
    c1.deposit(amt)
elif a==2:
    w_amt=int(input("enter amount to be withdraw: "))
    c1.withdraw(w_amt)





        
