public with sharing class RandomApex {
    public RandomApex() {

    }

    // Returns a random number between 0 (inclusive) and 1 (exclusive)
    @AuraEnabled
    public static Double random() {
        return Math.random();
    }
    @AuraEnabled
    public static Void insertScore(String nombre, String puntuacion) {
        Account a = new Account(Name=nombre, BillingCity=puntuacion);
        insert a;
    }
    // Returns a list of accounts from the database 
    @AuraEnabled
    public static List<Account> getListScores(){
        try {
            Account[] accounts =  [SELECT Name, BillingCity FROM Account];
            return accounts;
        } catch (Exception e) {
            throw new AuraHandledException('Error: ' + e.getMessage());
        }
    }
}