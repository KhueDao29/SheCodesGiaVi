USE master
GO

CREATE DATABASE GiaVi


CREATE TABLE taste (
	cook_taste		VARCHAR(50) PRIMARY KEY
)

INSERT INTO taste (cook_taste)
VALUES
    ('Ngọt'),
    ('Chua'),
    ('Nhạt'),
    ('Đắng'),
    ('Cay'),
    ('Umami'),
	('Canxi'),
    ('Chát')

CREATE TABLE specialty  (
	style		VARCHAR(50) PRIMARY KEY
)

INSERT INTO specialty (style)
VALUES
    ('Đồ Á'),
    ('Đồ Ý'),
    ('Đồ Việt'),
    ('Đồ Hàn'),
    ('Đồ Mexico'),
    ('Đồ Trung'),
	('Đồ Thái')

CREATE TABLE user_login (
	user_login_id		INT PRIMARY KEY,
	username			NVARCHAR(50) NOT NULL,
	password			NVARCHAR(50) NOT NULL
)

CREATE TABLE user_info (
	user_id	INT PRIMARY KEY,
	username		NVARCHAR(255) NOT NULL,
	gender			CHAR(1) CHECK (gender IN ('M', 'F')),
	created_at		DATETIME,
	last_update		DATETIME,
	phone			NVARCHAR(10),
	house_number	NVARCHAR(10),
	road_name		NVARCHAR(50),
	ward			NVARCHAR(50),
	district		NVARCHAR(50),
	province		NVARCHAR(50),
	email			NVARCHAR(50),
	user_login_id	INT,
	CONSTRAINT FK_User FOREIGN KEY (user_login_id) REFERENCES user_login(user_login_id)		
)

CREATE TABLE supplier_login (
	supplier_login_id	INT PRIMARY KEY,
	username			NVARCHAR(50) NOT NULL,
	password			NVARCHAR(50) NOT NULL
)

CREATE TABLE supplier_info (
	supplier_id		INT PRIMARY KEY,
	supplier_name	NVARCHAR(255) NOT NULL,
	phone_number	NVARCHAR(10) NOT NULL,
	house_number	NVARCHAR(10),
	road_name		NVARCHAR(50),
	ward			NVARCHAR(50),
	district		NVARCHAR(50),
	province		NVARCHAR(50),
	rating			FLOAT,
	customized_flag	BIT,
	cook_taste		VARCHAR(50),
	CONSTRAINT FK_Supplier_taste FOREIGN KEY (cook_taste) REFERENCES taste(cook_taste),
	style			VARCHAR(50),
	CONSTRAINT FK_Supplier_specialty FOREIGN KEY (style) REFERENCES specialty(style),
	supplier_login_id	INT,
	CONSTRAINT FK_Supplier FOREIGN KEY (supplier_login_id) REFERENCES supplier_login(supplier_login_id),
	last_update		DATETIME
)

CREATE TABLE supplier_avai (
	start_time		TIME,
	end_time		TIME,
	supplier_id		INT,
	CONSTRAINT FK_Supplier_info FOREIGN KEY (supplier_id) REFERENCES supplier_info(supplier_id)		
)

CREATE TABLE reviews (
	review_id		INT PRIMARY KEY,
	review_time		DATETIME,
	rating			INT,
	CONSTRAINT CK_Rating_Range CHECK (0 <= rating AND rating <= 5),
	review_content	NVARCHAR(255),
	supplier_id		INT,
	CONSTRAINT FK_reviews FOREIGN KEY (supplier_id) REFERENCES supplier_info(supplier_id)		
)

CREATE TABLE food (
	food_id			INT PRIMARY KEY,
	food_name		NVARCHAR(50),
	selling_date	DATE,
	portion_left	INT,
	price			INT,
	discount		FLOAT,
	description		NVARCHAR(255),
	sales			INT,
	cook_taste		VARCHAR(50),
	CONSTRAINT FK_food_taste FOREIGN KEY (cook_taste) REFERENCES taste(cook_taste),
	style			VARCHAR(50),
	CONSTRAINT FK_food_specialty FOREIGN KEY (style) REFERENCES specialty(style),
	supplier_id		INT,
	CONSTRAINT FK_food_supply FOREIGN KEY (supplier_id) REFERENCES supplier_info(supplier_id)		
)

CREATE TABLE customized_order (
	order_id		INT PRIMARY KEY,
	customized_note	NVARCHAR(255),
	total_price		FLOAT,
	order_status	NVARCHAR(50),
	supplier_id		INT,
	CONSTRAINT FK_customized_supplier FOREIGN KEY (supplier_id) REFERENCES supplier_info(supplier_id),
	food_id			INT,
	CONSTRAINT FK_customized_food FOREIGN KEY (food_id) REFERENCES food(food_id),
	user_id			INT,
	CONSTRAINT FK_customized_user FOREIGN KEY (user_id) REFERENCES user_info(user_id)
)

CREATE TABLE food_order (
	order_id		INT PRIMARY KEY,
	food_id			INT,
	CONSTRAINT FK_order_food FOREIGN KEY (food_id) REFERENCES food(food_id),	
	user_id			INT,
	CONSTRAINT FK_order_user FOREIGN KEY (user_id) REFERENCES user_info(user_id),
	supplier_id		INT,
	CONSTRAINT FK_order_supplier FOREIGN KEY (supplier_id) REFERENCES supplier_info(supplier_id),
	total_price		FLOAT,
	order_status	NVARCHAR(255)
)


-- Input Data from Excel --

INSERT INTO supplier_login 
SELECT * FROM GiaVi..supplier_login$

INSERT INTO supplier_info
SELECT supplier_id, supplier_name, phone_number, house_number, road_name, ward, district, province, NULL, 
		customized_flag, cook_taste, specialty, supplier_login_id, last_updated
FROM GiaVi..supplier_info$

INSERT INTO supplier_avai
SELECT start_time, end_time, supplier_id FROM GiaVi..supplier_avai$

INSERT INTO reviews
SELECT review_id, review_time, rating, review_content, CONVERT(int,supplier_id) as supplier_id FROM GiaVi..reviews$

INSERT INTO food
SELECT food_id, food_name, selling_date, portion_left, price, discount, description, sales, cook_taste, style, supplier_id 
FROM GiaVi..food$


UPDATE supplier_info 
SET rating = (
    SELECT SUM(o.rating)/COUNT(o.rating)
    FROM reviews AS o
    WHERE o.supplier_id = supplier_info.supplier_id
)



