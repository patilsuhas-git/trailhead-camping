public with sharing class ExpenseController {
    @AuraEnabled
    public static List<Expense__c> getExpense() {
        return [Select Id, Name, Amount__c, Client__c, Date__c, Reimbursed__c, CreatedDate from Expense__c];
    }
    
    @AuraEnabled
    public static Expense__c saveExpense(Expense__c expense) {
        // Perform isUpdatable() checking first, then
        upsert expense;
        return expense;
    }
}