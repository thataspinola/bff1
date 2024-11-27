const fastify = require('fastify');
const PostsController = require('./src/controllers/posts');

const app = fastify({
  logger: true,
});

const postController = new PostsController();

app.get('/posts', async (req, reply) => {
  const posts = await postController.getPosts();
  return reply.send(posts);
});

app.get('/posts/:id', async (req, reply) => {
  const id = req.params.id;
  const result = await postController.getPost(id);
  return reply.send(result);
});

app.listen({port: 5000}, (error, address) => {
  if (error) throw error;
  console.log('Running!');
})