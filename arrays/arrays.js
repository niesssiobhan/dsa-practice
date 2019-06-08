'use strict';

// Given an array containing a string, determine if a string has all unique characters. Example ['family'] return true

const uniqueChar = (str) => {
  let charCount= {};
  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]]) {
      return false
    } 
    charCount[str[i]] = true;
    }
    return true;
  }

// Given two strings, write a method to decide if one is a permutation of the other. Example 

const permutationCheck = (str1, str2) => {
  return str1.split("").sort().join () === str2.split("").sort().join();
};