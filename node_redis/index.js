const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
  // 'redis-server 是指向 docker-compose.yml 中定義的 Redis 服務名稱，Docker Compose 會自動將其連接到對應的容器
  url: 'redis://redis-server:6379',
});

(async () => {
  await client.connect();
  await client.set('visits', 0);
})();

app.get('/', async (req, res) => {
  const visits = await client.get('visits');
  res.send('Number of visits ' + visits);
  await client.set('visits', parseInt(visits) + 1);
});

app.listen(8081, () => console.log('Listening on port 8080'));
