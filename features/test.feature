Feature: Products Listx
    Scenario: Load the products listx
        When we request the products listx
        Then we should receivex
            | name           | description                                |
            | Phone XL       | A large phone with one of the best screens |
            | Phone Mini     | A great phone with one of the best cameras |
            | Phone Standard |                                            |