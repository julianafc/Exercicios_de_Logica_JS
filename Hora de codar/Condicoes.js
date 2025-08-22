// Condições: Escreva um programa que pergunte ao usuário sua idade e imprima se ele é maior ou menor de idade.

const prompt = require('prompt-sync')();

let idade = prompt("Qual é a sua idade?");

if (idade < 18) {
    console.log("Você é menor de idade.");
} else {
    console.log("Você é maior de idade.");
}