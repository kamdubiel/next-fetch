1. Run the containers

```
docker compose up -d --force-recreate --build
```

2. Check `next` container stats

```
docker stats next
```

3. Run K6

```
docker compose run k6 run /scripts/ewoks.js
```
