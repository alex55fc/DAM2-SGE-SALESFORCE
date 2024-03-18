public with sharing class topoApex {
    public topoApex() {

    }
    @AuraEnabled
    public static Double random() {
        return Math.random();
    }
    @AuraEnabled
    public static Void insertScore(String nombre, String puntuacion) {
        Account a = new Account(Name=nombre, BillingCity=puntuacion);
        insert a;
    }
}