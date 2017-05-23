
-- What query would return all the tweets that the user with id 2 has tagged as favorites?
select first_name, tweet
from users
left join faves
on users.id = faves.user_id
left join tweets
on faves.tweet_id = tweets.id
where users.id=2;

-- what query would you run to get all the tweets that user with id 2, or user with id 1, has tagged as favorites?
select first_name, tweet
from users
left join faves
on users.id = faves.user_id
left join tweets
on faves.tweet_id = tweets.id
where users.id=2 or users.id=1;

-- what query would you run to get all the users that are following the user with id 1?
select users.first_name as followed, lance_name_wheveryouwant.first_name as follower
From users
Left join follows
on users.id = follows.followed_id
left join users as lance_name_wheveryouwant -- this is what matter
on lance_name_wheveryouwant.id = follows.follower_id
where users.id=1;

-- what query would you run to get all users that are not following the user with id of 2?
select *
from users
where users.id not in (
select follower_id
from follows
where followed_id =2
) and users.id !=2;

SELECT users.first_name as user, count(users2.first_name) as follower_count
from users
Left join follows
on users.id = follows.followed_id
left join users as users2
on users2.id = follows.follower_id
where users.id = 1
group by users.id;

-- Left join vs join
select first_name, tweet
from users
left join tweets
on users.id = tweets.user_id;

select first_name, tweet
from users
join tweets
on users.id = tweets.user_id;