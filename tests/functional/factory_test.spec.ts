import { test } from '@japa/runner'
import PostFactory from 'Database/factories/PostFactory'

test.group('Factory test', () => {
  // Write your test here
  test('Should be able to build a post factory with relation', async ({ assert }) => {
    const post = await PostFactory.with('createdBy').create()

    assert.exists(post.createdBy)
  })
})
