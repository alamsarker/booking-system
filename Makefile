FPM=bs-api-fpm

.PHONY : start fpm stop

start:
	docker-compose down
	docker-compose up

fpm:
	docker exec -it $(FPM) bash

stop:
	docker-compose down
