-- 1. What query would you run to get all the countries that speak Slovene?
-- Your query should retun the name of the country, language and language percentage.
-- Your query should arrange the result by language perentage in desending order (1)
select countries.name, languages.language, languages.percentage
from countries
	join languages On countries.id = languages.country_id
where languages.language = "Slovene"
order by languages.percentage desc;

-- 2. What query would you run to display the total number of cities for each country?
-- Your query should return the name of the country and the total number of cities.
-- Your query shold arrange the result by the number of cities in descending order.
select countries.name, count(cities.id) as num_cities
from countries
	join cities on countries.id = cities.country_id
group by countries.id
order by num_cities desc;

-- 3. What query would you run to get all the cities in Mexico with a population
-- of greater than 500,000?  Your query should arrange the result by poulation in descending order.
select cities.name, cities.population
from countries
	join cities on countries.id = cities.country_id
where countries.name = 'mexico' and cities.population > 500000
order by cities.population desc;

select cities.name, cities.population
from countries
	join cities on countries.id = cities.country_id
where countries.name = 'south korea'
order by cities.population desc;

-- 4. What query would you run to get all languages in each counry with a percentage
-- greater than 89%? Your query should arrange the result by percentage in descending order.
select countries.name, languages.language, languages.percentage
from countries
	join languages on countries.id = languages.country_id
where languages.percentage > 89
order by languages.percentage desc;

select countries.name, languages.language, languages.percentage
from countries
	join languages on countries.id = languages.country_id
where countries.name = 'united states';

-- 5. What query would you run to get all the countries with Surface Area below 501 and population greater than 100,000? (2)
select countries.name, countries.surface_area, countries.population
from countries
where countries.surface_area < 501 and countries.population > 100000;

select countries.name, countries.surface_area, countries.population
from countries
where countries.name = 'south korea' or countries.surface_area <501 and countries.population >100000
order by countries.surface_area desc;

-- 6. What query would you run to get countries with only Constitutional Monarchy with a 
-- capital greater than 200 and a life expectancy greater than 75 years? (1)
select countries.name, countries.government_form, countries.capital, countries.life_expectancy
from countries
where countries.government_form = 'constitutional monarchy'
	and countries.life_expectancy >75
    and countries.capital >200;
    
-- 7.What query would you run to get all the cities of Argentina inside the Buenos Aires
-- district and have the poluation greater than 500,000?  The query should return the country name, city name, district and polulation. (2)
select countries.name, cities.name, cities.district, cities.population
from countries
	join cities on countries.id = cities.country_id
where countries.name = 'argentina'
	and cities.district = 'buenos aires'
    and cities.population > 500000;
    
select countries.name, cities.name, cities.district, cities.population
from countries
	join cities on countries.id = cities.country_id
where countries.name = 'south korea'
	and cities.district = 'seoul';
    
-- 8. What query would you run to summarize the number of counties in each region?
-- the query should display the name of the region and number of countries.
-- also, the query should arrange the result by the number of countries in descending order.
select countries.region, count(countries.id) as num_countries
from countries
group by countries.region
order by num_countries desc;
