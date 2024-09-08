public with sharing class ContactsController {
    
   @AuraEnabled(cacheable=true)
   public static  List<Contact> getContactList(){

    List<Contact> conList =[
        SELECT Id, Name, PhotoUrl, FirstName, LastName, Title, Phone, Email 
        FROM Contact
        WHERE PhotoUrl != null 
        WITH USER_MODE LIMIT 10
    ];

    return conList;
   }

   @AuraEnabled(Cacheable = true)
   public static List<Contact> getContactListForDatatable(){
List<Contact> conList =[
        SELECT Id, AccountId, Name, Title, Phone, Email, Picture__c, Rank__c, Account.Name
        FROM Contact
        WHERE AccountId != null 
        WITH USER_MODE LIMIT 10
    ];

    return conList;

   }

@AuraEnabled(Cacheable=true)

public static List<Contact> getContactsBasedOnAccount(String accountId){

    List<Contact> conList = [
        SELECT Id, Name, PhotoUrl, FirstName, LastName, Title, Phone, Email , Picture__c, Rank__c, AccountId, Account.Name, LeadSource
        FROM Contact
        WHERE AccountId =: accountId
        WITH USER_MODE LIMIT 10];

    return conList;
}

  
}