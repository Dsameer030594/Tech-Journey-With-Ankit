public with sharing class customLookuoController {
    
    @AuraEnabled(cacheable=true)
    
    public static List<sObject> searchRecords(String objectApiName, String searchKey){
        
        if(String.isNotBlank(searchKey)){
            
        }
    }
}