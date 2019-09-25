1) `docker-compose up`
2) `docker exec -it curly-happiness_node_1 zsh`
3) `knex seed:run`


Files in question:

* `seeds/demo.js` - Script running knex seeds - creating single entry.
* `src/services/address/address.service.js:23` - Event handler
