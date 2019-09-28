{'use strict';

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
  };



  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list';


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
      console.log('articleTitle', articleTitle);

      /*[DONE] create HTML of the link */

      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log('linkHTML', linkHTML);

      /*[DONE] insert link into titleList */

      html = html + linkHTML;
      console.log('htmmml', html);
    }

    titleList.innerHTML = html;
    const links = document.querySelectorAll('.titles a');
    console.log('links',links);
    for(let link of links){
      link.addEventListener('click', titleClickHandler);
    }
  };
  generateTitleLinks();

  const generateTags = function(){
  /*[DONE] find all articles */

    const articles = document.querySelectorAll('.posts article');
    console.log('articles', articles);

    /* [DONE]START LOOP: for every article: */

    for (let article of articles){
      console.log('article', article);

      /*[DONE] find tags wrapper */

      const tagsWrapper = article.querySelector(optArticleTagsSelector);
      console.log('tagsWrapper', tagsWrapper);
      tagsWrapper.innerHTML='';

      /* [DONE] make html variable with empty string */

      let html = '';

      /*[DONE] get tags from data-tags attribute */

      const articleTags =article.getAttribute('data-tags');
      console.log('articleTags',articleTags);

      /*[DONE] split tags into array */

      const tagsIntoArray = articleTags.split(' ');
      console.log('tagsIntoArray',tagsIntoArray);

      /*[DONE] START LOOP: for each tag */

      for(let tag of tagsIntoArray){
        console.log('tag',tag);

        /*[DONE] generate HTML of the link */

        const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>' + ' ';
        console.log('linkHTML', linkHTML);

        /*[DONE] add generated code to html variable */

        html = html + linkHTML;
        console.log('htmmml', html);

        /* END LOOP: for each tag */

      }

      /*[DONE] insert HTML of all the links into the tags wrapper */

      tagsWrapper.innerHTML = html;
      const links = document.querySelectorAll('.list a');
      console.log('links',links);
      for(let link of links){
        link.addEventListener('click', titleClickHandler);
      }

      /* END LOOP: for every article: */

    }

  };

  generateTags();

  const tagClickHandler = function(event){
    /*[DONE] prevent default action for this event */

    event.preventDefault();

    /*[DONE] make new constant named "clickedElement" and give it the value of "this" */

    const clickedElement = this;
    console.log('Link was clicked!');
    console.log(event);

    /*[IN PROGRESS] make a new constant "href" and read the attribute "href" of the clicked element */

    const href =

    /* make a new constant "tag" and extract tag from the "href" constant */



    /* find all tag links with class active */



    /* START LOOP: for each active tag link */



    /* remove class active */



    /* END LOOP: for each active tag link */



    /* find all tag links with "href" attribute equal to the "href" constant */



    /* START LOOP: for each found tag link */



    /* add class active */



    /* END LOOP: for each found tag link */



    /* execute function "generateTitleLinks" with article selector as argument */
  };

  const addClickListenersToTags = function(){
    /* find all links to tags */



    /* START LOOP: for each link */



    /* add tagClickHandler as event listener for that link */



    /* END LOOP: for each link */
  };

  addClickListenersToTags();


}
