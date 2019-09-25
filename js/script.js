{'use strict';

/*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });*/
  const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
    console.log(event);

    /*[DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');
  
  for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }
    /*[DONE] add class 'active' to the clicked link */
    
    console.log('clickedElement:', clickedElement);
    clickedElement.classList.add('active');

    /*[DONE] remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('.posts article.active');

    for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
    }

    /* [DONE] get 'href' attribute from the clicked link */
    const articleSelector =clickedElement.getAttribute('href');
  
    console.log(articleSelector);
    
    /*[DONE] find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);
    console.log(targetArticle);

    /*[DONE] add class 'active' to the correct article */
    console.log('targetArticle:', targetArticle);
    targetArticle.classList.add('active');
   }



  const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

  /*[DONE] remove contents of titleList */
  
  const generateTitleLinks = function(){
  const titleList = document.querySelector(optTitleListSelector);
  console.log('titleList', titleList);
  titleList.innerHTML='';

  /* [DONE]find all the articles adn save them to variable */

  const articles = document.querySelectorAll(optArticleSelector);
  console.log('articles',articles);

  /* [DONE]for each article */
  let html = '';
  for(let article of articles){
    
    /*[DONE] get the article id */

    const articleId = article.getAttribute('id');
    console.log('articleId',articleId);

    /*[DONE] find the title element and get te title from the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    console.log('articleTitle', articleTitle)

    /*[DONE] create HTML of the link */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log('linkHTML', linkHTML);

    /*[DONE] insert link into titleList */

    html = html + linkHTML;
    console.log('htmmml', html)
    }

    titleList.innerHTML = html;
    const links = document.querySelectorAll('.titles a');
    console.log('links',links);
    for(let link of links){
      link.addEventListener('click', titleClickHandler);
  }
  }

generateTitleLinks();

}