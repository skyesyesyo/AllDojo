-- JOINING TABLES
-- JOIN
-- Find all the clients (first and last name) billing amounts and charged date
SELECT clients.first_name, clients.last_name, billing.amount, billing.charged_datetime
FROM clients
JOIN billing ON clients.id = billing.clients_id;
-- list all the domain names and leads (first and last name) for each site
SELECT sites.domain_name, leads.first_name, leads.last_name
FROM sites
JOIN leads ON sites.id = leads.sites_id;
-- JOIN ON MULTIPLE TABLES
-- Get the names of the clients, their domain names and the first names of all the leads generated from those sites.
SELECT clients.first_name AS clients_first, clients.last_name, sites.domain_name, leads.first_name AS lead_first
FROM clients
Join sites ON clients_id = sites.clients_id
JOIN leads ON sites.id = leads.sites_id;
-- LEFT & RIGHT JOIN
-- List all the clients and the sites each client has, even if the client hasn't landed a site yet.
SELECT clients.first_name, clients.last_name, sites.domain_name
FROM clients
LEFT JOIN sites ON clients.id = sites.clients_id;
-- GROUPING ROWS
-- GROUP BY
-- SUM, MIN, MAX, AVG
-- Find all the clients (first and last name) and their total billing amounts
SELECT clients.first_name, clients.last_name, SUM(billing.amount)
FROM clients
JOIN billing ON clients.id = billing.clients_id
GROUP BY clients_id;
-- GROUP CONCAT
-- List all the domain names associated with each client
select group_concat(' ', sites.domain_name), clients.first_name, clients.last_name
from clients -- this is one
join sites on clients.id = sites.clients_id-- this is many
group by clients.id;
-- COUNT
-- Find the total number of leads for each site.
select count(leads.id), sites.domain_name
from sites
join leads on sites.id = leads.sites_id
group by sites.id;
