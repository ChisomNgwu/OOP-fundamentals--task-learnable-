# OOP-fundamentals--task-learnable-



Title of the System: GYM MEMBERSHIP SYSTEM

What the System Does:  
The Gym membership system is designed to manage gym operations and member interactions efficiently. 

It allows members to view gym rules, check membership fees, subscribe to fitness classes, and track their subscribed activities.

 Administrators can manage the total number of gym members and ensure the system operates smoothly by keeping records up-to-date.  

This system simplifies administrative tasks and enhances the user experience by providing clear guidelines and functionalities tailored to both gym members and staff.

Below is the class diagram (plain-text) for the system above :


        class  Gym  

        attributes/properties   
     totalMembers: Number (static)
        methods():
     displayRules():          (static)
     incrementMemberCount():  (nons-tatic)


      class Member        

        attributes/properties
    name: String         
    memberId: String 
    monthlyfee: Number
    annualfee: Number    
    classes: Array       
        methods():
     displayMembershipFees():  (static)
     subscribeToClass(class):  (non-static)



visit >>  https://lucid.app/lucidchart/f1add0e4-8339-4772-ab8b-1638575ea149/edit?viewport_loc=-1373%2C-1124%2C1990%2C1357%2C0_0&invitationId=inv_75f71045-0d68-424e-98f4-d3f7cf490295 
to see the real uml class diagram for the Gym Membership System../ OR 
review on the images folder on the explorer..
