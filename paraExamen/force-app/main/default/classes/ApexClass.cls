public with sharing class ApexClass {
    
    private static final String UNIQUE_ACCOUNT_NAME = 'UniqueNameForSequenceStorage';

    @AuraEnabled
    public static void updateSequence(String newSequence) {
        // Intenta encontrar el registro único
        List<Account> accounts = [SELECT Id, Description FROM Account WHERE Name = :UNIQUE_ACCOUNT_NAME LIMIT 1];

        if (!accounts.isEmpty()) {
            // Si existe, actualiza el registro existente
            Account accountToUpdate = accounts[0];
            accountToUpdate.Description = (accountToUpdate.Description != null ? accountToUpdate.Description + ' ' : '') + newSequence;
            update accountToUpdate;
        } else {
            // Si no existe, opcionalmente podría crearlo o manejar el error
            // Por ejemplo, creando un nuevo registro:
            Account newAccount = new Account(Name = UNIQUE_ACCOUNT_NAME, Description = newSequence);
            insert newAccount;
        }
    }
    @AuraEnabled
    public static Void insertSequence(String newSequence) {

        Account a = new Account(Name=newSequence);
        insert a;
    }
    @AuraEnabled
    public static List<Account> getListSequence(){
        try {
            Account[] accounts =  [SELECT Name FROM Account];
            return accounts;
        } catch (Exception e) {
            throw new AuraHandledException('Error: ' + e.getMessage());
        }
    }
}
