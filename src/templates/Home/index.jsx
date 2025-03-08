import { Component } from 'react'

import './styles.css'

import {loadPost} from '../../utils/load-post'
import { Posts } from '../../components/Posts'

class Home extends Component {
  state = {
    posts: []
  }

 async componentDidMount() {
    await this.loadPosts()
  } 

  loadPosts = async () => {
    const photosAndPosts = await loadPost()
    this.setState({posts: photosAndPosts})
  }

  render() {

    const {posts} = this.state

    return (
      <section className='container'>
        <Posts posts={posts} />
      </section>

    )
  }
}
export default Home
