### RESTful Programming and the GitHUB API

#### 1. HTTP VERB = __POST__

Used for creating resources, or performing custom actions (such as merging a pull request).

***

$ curl -H "Time-Zone: Europe/Amsterdam" -X POST https://api.github.com/repos/github/linguist/contents/new_file.md

result = RestClient.post('https://github.com/login/oauth/access_token',
              {:client_id => CLIENT_ID,
               :client_secret => CLIENT_SECRET,
               :code => session_code},
               :accept => :json)

curl --user "caspyin" --request POST --data '{"description":"Created via API","public":"true","files":{"file1.txt":{"content":"Demo"}}' https://api.github.com/gists

POST /markdown

POST /repos/:owner/:repo/git/refs

***

#### 2. HTTP VERB = __GET__

Used for retrieving resources returned as an array.

***

auth_result = JSON.parse(RestClient.get('https://api.github.com/user',
                                        {:params => {:access_token => access_token}}))

if has_user_email_scope
  auth_result['private_emails'] =
    JSON.parse(RestClient.get('https://api.github.com/user/emails',
                              {:params => {:access_token => access_token}}))

\# GET /users/defunkt
$ curl https://api.github.com/users/defunkt

GET /repos/:owner/:repo/git/commits/:sha

***

#### 3. HTTP VERB = __PUT__

Used for updating existing resources (e.g., files, collections) and requires user authentication.

***

PUT /repos/:owner/:repo/contents/:path

PUT /user/following/:username

PUT /user/starred/:owner/:repo

***

#### 4. HTTP VERB = __DELETE__

Used for deleting resources (e.g., files) and requires admin access.

***

DELETE /user/following/:username

DELETE /repos/:owner/:repo

DELETE /orgs/:org/members/:username

***
