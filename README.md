# Avis Site

A newspaper (avis) website built as a school project at **NEXT KBH** during the web developer (webudvikler) education.

The site is built with plain **HTML, CSS and JavaScript**. No frameworks or build tools.

## Features
- Responsive newspaper-style layout
- Subscription form (`abonnement`) with client-side validation:
  - Valid email, and email confirmation must match
  - Password with at least 8 characters, and password confirmation must match
  - Required fields: first name, last name, phone, address, post code, city
  - Danish phone number format (optional `+45` prefix, 8 digits)
  - Post code between 1000 and 9999
- Validation messages use the browser's built-in Constraint Validation API (`setCustomValidity`)

## Technologies

- HTML5
- CSS3
- JavaScript (vanilla)

## Notes

The form validation runs in the browser only and is meant for user experience. In a real project the same rules must also be checked on the server.

## Author

Jan Konieczek, NEXT KBH, webudvikler