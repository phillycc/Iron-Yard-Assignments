### RESTful Programming and the GitHUB API

#### 1. HTTP VERB = __POST__

***javascript

$ curl -H "Time-Zone: Europe/Amsterdam" -X POST https://api.github.com/repos/github/linguist/contents/new_file.md

result = RestClient.post('https://github.com/login/oauth/access_token',
              {:client_id => CLIENT_ID,
               :client_secret => CLIENT_SECRET,
               :code => session_code},
               :accept => :json)

curl --user "caspyin" --request POST --data '{"description":"Created via API","public":"true","files":{"file1.txt":{"content":"Demo"}}' https://api.github.com/gists

POST /repos/:owner/:repo/git/refs

***

#### 2. HTTP VERB = __GET__

***javascript

auth_result = JSON.parse(RestClient.get('https://api.github.com/user',
                                        {:params => {:access_token => access_token}}))

if has_user_email_scope
  auth_result['private_emails'] =
    JSON.parse(RestClient.get('https://api.github.com/user/emails',
                              {:params => {:access_token => access_token}}))

# GET /users/defunkt
$ curl https://api.github.com/users/defunkt

GET /repos/:owner/:repo/git/commits/:sha

***

#### 3. HTTP VERB = __PUT__

***javascript



***
