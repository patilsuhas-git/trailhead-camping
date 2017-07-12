public with sharing class CampingListController {
    @AuraEnabled
    public static List<Camping_Item__c> getItems() {
        return [Select Name, Packed__c, Price__c, Quantity__c From Camping_Item__c];
    }
    
    @AuraEnabled
    public static Camping_Item__c saveItem(Camping_Item__c campingItem) {
        upsert campingItem;
        return campingItem;
    }
}