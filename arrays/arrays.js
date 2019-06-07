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