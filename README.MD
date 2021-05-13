## Testes
* Testes não foram aplicadas (pendentes)

* Obs: Deixei o arquivo .env propositalmente no git, em aplicações o arquivo .env não é colocado.

### Curl
GET - query
```
curl -X GET http://localhost:3000/api/
```

POST - params - ok
```
curl -d '{"name":"Flavio","email":"flavio@gmail.com","account":"12345678","dttest":"11/05/2021","dtlicence":"01/07/2021"}' -H 'Content-Type: application/json' http://localhost:3000/api/addUser
```

Get - params
```
curl -X GET -d '{"email":"flavio@gmail.com"}' -H 'Content-Type: application/json' http://localhost:3000/api/users/verifyemail
```

## API
 * Usuário
<br>Post Register```/v1/users/create```
<br>Post Login
```/v1/users/auth```
