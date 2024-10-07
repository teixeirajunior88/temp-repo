import './Home.css';
import { Component } from 'react';

import { loadPosts } from '../../utils/loadPosts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Botton';
import { Search } from '../../components/Search';

class Home extends Component {

    state = {
      posts: [],
      allPosts: [],
      page: 0,
      postsPerPage: 10,
      searchValue: ''
    };


    async componentDidMount() {
      await this.loadPosts();
    }

    loadPosts = async () => {
      const { page, postsPerPage } = this.state
      const postAndPhotos = await loadPosts();
      this.setState({
        posts: postAndPhotos.slice(page, postsPerPage),
        allPosts: postAndPhotos,
      });
    }

    loadMorePosts = () => {
      const {page, postsPerPage, allPosts, posts} = this.state;
      const nextPage = page + postsPerPage;
      const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
      posts.push(...nextPosts);

      this.setState({posts, page: nextPage})
    }

    handleChange = (e) => {
       const {value} = e.target;
       this.setState({searchValue: value})
    }


  render() {

    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue ?
    allPosts.filter(post => {
      return post.title.toLowerCase().includes(
        searchValue.toLowerCase()
      );
    })
    : posts;

      return (
        <section className='container'>
   
         <div className='search-container'>
         {!!searchValue && (
            <>
            <h1>Search value: {searchValue}</h1>
            </>
          )}

          
          <Search 
            onChange={this.handleChange}
            value={searchValue}
            type={'search'} 
          />

         </div>
          
          {filteredPosts.length > 0 && (
             <Posts posts={filteredPosts} />
          )}
            
            {filteredPosts.length === 0 && (
             <p>Não existem posts</p>
          )}
              
              <div className='botao-home'>
                {!searchValue && (
                  <>
                     <Button 
                       onClick={this.loadMorePosts} 
                       text={'Load more posts'}
                       disabled={noMorePosts}
                />
                  </>
                )}
                
            </div>
        </section>
      )
  }
}

// function App() {
//   return (
//     
//   );
// }

export default Home;
