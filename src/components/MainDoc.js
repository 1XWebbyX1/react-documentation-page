import React from 'react'
import asyncComponent from './asyncComponent/async';



//dynamic imports for all sections ---------------------------------------------------
var articles = ['article00', 'article01', 'article02', 'article03', 'article04', 'article05', 'article06', 'article07', 'article08', 'article09', 'article10', 'article11', 'article12', 'article13',];

const [Article, Article1, Article2, Article3, Article4, Article5, Article6, Article7, Article8, Article9, Article10, Article11, Article12, Article13,] =
articles.map((a) => asyncComponent(() =>
    	    import('./articles/'+a+'.jsx').then(module => module.default)
    	));


//----------------------------------------------------------------------------



class MainDoc extends React.Component{
  render() {
    return(
      <div>
        <main id='main-doc'>
          <header id="header"> <strong>JS Documentation </strong></header>
           <Article />
           <Article1 />
           <Article2 />
           <Article3 />
           <Article4 />
           <Article5 />
           <Article6 />
           <Article7 />
           <Article8 />
           <Article9 />
           <Article10 />
           <Article11 />
           <Article12 />
           <Article13 />
        </main>
      </div>
    )
  }
}


export default MainDoc;
