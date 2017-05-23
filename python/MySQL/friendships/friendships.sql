select concat(users.first_name, ' ', users.last_name) as user_name, concat(userlance.first_name, ' ', userlance.last_name) as friend_name
from users
	left join friendships on users.id = friendships.user_id
    left join users as userlance on friendships.friend_id = userlance.id;