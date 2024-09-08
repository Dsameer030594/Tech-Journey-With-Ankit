public with sharing class AccountHelper {
    
   @AuraEnabled(cacheable=true)

   public static List<Account> getAccountList(String inputIndustry){
    return [
        SELECT Id, Name, Industry, Rating, Phone
        FROM Account 
        where Industry =: inputIndustry
        WITH USER_MODE
    ];
   }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountDetail(String accId){
       return [
        SELECT Id, Name, Phone, Industry, AnnualRevenue 
        FROM Account
        WITH USER_MODE
       ];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getParentAccounts(){
        return [
            SELECT Id, Name, Industry, AnnualRevenue 
            FROM Account
            WHERE AnnualRevenue != null 
            WITH USER_MODE
        ];
    }

    @AuraEnabled
    public static string updateTickerRecord(String recordId, String newTicker){
        Account acc = new Account();
        acc.Id = recordId;
        acc.TickerSymbol = newTicker;

        try{
            update acc;
            return 'Success';
        } catch(exception ex) {
            return ex.getMessage();
        }
       
    }
}