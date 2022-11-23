
build:
	docker-compose \
	-f docker-compose.yml \
	-p 'memixit' \
	build --pull

create-network:
	docker network create memixit_network || true

init: create-network

dev:
	docker-compose \
	-f docker-compose.yml \
	-p 'memixit' \
	up