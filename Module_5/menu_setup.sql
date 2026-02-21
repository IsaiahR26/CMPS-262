CREATE TABLE MENU (
  ID SERIAL PRIMARY KEY,
  ITEM VARCHAR(100) NOT NULL,
  DESCRIPTION TEXT,
  PRICE NUMERIC(6,2) NOT NULL
);

INSERT INTO MENU (ITEM, DESCRIPTION, PRICE) VALUES
('Cheeseburger', 'Classic burger with cheese, lettuce, tomato', 9.99),
('Chicken Bowl', 'Chicken, rice, veggies', 9.99),
('Veggie Wrap', 'Fresh veggies with tzatziki', 7.99),
('BBQ Burger', 'Burger with BBQ sauce and crispy onions', 10.99),
('Spicy Chicken Sandwich', 'Crispy chicken with spicy mayo', 8.99),
('Grilled Salmon Plate', 'Salmon with lemon butter and rice', 14.99),
('Caesar Salad', 'Romaine, parmesan, croutons, caesar dressing', 6.99),
('Loaded Fries', 'Fries topped with cheese and bacon', 5.99),
('Turkey Club', 'Turkey, bacon, lettuce, tomato on toasted bread', 8.49),
('Philly Cheesesteak', 'Steak, peppers, onions, melted cheese', 11.99),
('Margherita Flatbread', 'Tomato, basil, mozzarella', 12.99),
('Pepperoni Flatbread', 'Pepperoni and mozzarella', 13.99),
('Fish Tacos', 'Grilled fish with cabbage slaw and lime', 9.49),
('Pasta Alfredo', 'Pasta with creamy alfredo sauce', 10.49),
('Steak Bowl', 'Steak, rice, black beans, salsa', 12.49),
('Chicken Quesadilla', 'Grilled chicken and cheese tortilla', 8.99),
('Avocado Toast', 'Toasted bread with smashed avocado', 6.49),
('Breakfast Burrito', 'Eggs, cheese, sausage, potatoes', 7.99),
('Mushroom Burger', 'Burger with sautéed mushrooms and swiss', 10.49),
('Shrimp Fried Rice', 'Rice with shrimp, veggies, soy sauce', 11.49);

SELECT * FROM MENU;
