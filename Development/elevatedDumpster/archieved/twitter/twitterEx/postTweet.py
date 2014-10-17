

APP_KEY = "ZjiUyEXYndo2B8CZudzvoKRjB"
APP_SECRET = "Zl2zMGVwomftel0xHbU2yXRwgf84WfHBrA92IIJdz1OxQ896AC"

ACCESS_KEY = '395133059-w31lhpoHEjffxxYOowMJrQQz1IkR6AChZ0rKr5oL'
ACCESS_SECRET = '4bqk491Bu5OcCR7DpWrCqp7u5riC9qdvWJXrMyIO5wdN9'

import tweepy


CONSUMER_KEY = APP_KEY
CONSUMER_SECRET = APP_SECRET
auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.secure = True
auth.set_access_token(ACCESS_KEY, ACCESS_SECRET)
api = tweepy.API(auth)

test = u'\xF0\x9F\x9A\xB2'
print test
api.update_status(status = test )
