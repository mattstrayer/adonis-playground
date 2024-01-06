import Factory from '@ioc:Adonis/Lucid/Factory'
import post from 'App/Models/post'
import UserFactory from './UserFactory'

export default Factory.define(post, ({ faker }) => {
  return {
    //
  }
})
  .relation('createdBy', () => UserFactory)
  .build()
