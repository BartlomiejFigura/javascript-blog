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
    optArticleTagsSelector = '.post-tags .list',
    optArticleAuthorSelector = '.authors';


  /*[DONE] remove contents of titleList */

  const generateTitleLinks = function(customSelector = ''){
    const titleList = document.querySelector(optTitleListSelector);
    console.log('titleList', titleList);
    titleList.innerHTML='';

    /* [DONE]find all the articles adn save them to variable */

    const articles = document.querySelectorAll(optArticleSelector + customSelector);
    console.log('articles',articles);
    console.log('customSelector', customSelector);
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
    console.log('Link was cliiiicked!');
    console.log('eveeent',event);

    /*[DONE] make a new constant "href" and read the attribute "href" of the clicked element */

    const href = clickedElement.getAttribute('href');
    console.log('hrefffff',href);

    /*[DONE] make a new constant "tag" and extract tag from the "href" constant */

    const tag = href.replace('#tag-','');
    console.log('tag',tag);

    /* [DONE]find all tag links with class active */

    const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
    console.log('activeTagLinks',activeTagLinks);

    /*[DONE] START LOOP: for each active tag link */

    for(let activeTagLink of activeTagLinks){

      /* [DONE]remove class active */

      activeTagLink.classList.remove('active');
      console.log(activeTagLink.classList.contains('active')); /*false*/

      /* [DONE] END LOOP: for each active tag link */

    }

    /*[DONE] find all tag links with "href" attribute equal to the "href" constant */

    const equalTagLinks = document.querySelectorAll('a[href="' + href + '"]');
    console.log('equalTagLinks',equalTagLinks);

    /* [DONE] START LOOP: for each found tag link */

    for(let equalTagLink of equalTagLinks){

      /*[DONE] add class active */

      equalTagLink.classList.add('active');
      console.log(equalTagLink.classList.contains('active')); /*true*/

      /* END LOOP: for each found tag link */

    }

    /* [DONE ]execute function "generateTitleLinks" with article selector as argument */

    generateTitleLinks('[data-tags~="' + tag + '"]');

  };

  const addClickListenersToTags = function(){
    /* [DONE ]find all links to tags */

    const links = document.querySelectorAll('a[href^="#tag-"]');

    /* [DONE] START LOOP: for each link */

    for(let link of links){

      /* [DONE] add tagClickHandler as event listener for that link */

      link.addEventListener('click', tagClickHandler);

    /* END LOOP: for each link */
    }
  };
  addClickListenersToTags();

  const generateAuthors = function(){
    /*[DONE] find all authors */

    const authors = document.querySelectorAll('.authors .author-name');
    console.log('authors', authors);

    /* [DONE]START LOOP: for every author: */

    for (let author of authors){
      console.log('author', author);

      /*[DONE] find authors wrapper */

      const authorsWrapper = document.querySelector(optArticleAuthorSelector);
      console.log('authorsWrapper', authorsWrapper);
      authorsWrapper.innerHTML='';

      /* [DONE] make html variable with empty string */

      let html = '';

      /*[IN PROGRESS] get tags from data-tags attribute */

      /*const articleTags =article.getAttribute('data-tags');
      console.log('articleTags',articleTags);


      /*[DONE] START LOOP: for each tag */

      /*for(let tag of tagsIntoArray){
        console.log('tag',tag);

        /*[DONE] generate HTML of the link */

        /*const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>' + ' ';
        console.log('linkHTML', linkHTML);

        /*[DONE] add generated code to html variable */

        /*html = html + linkHTML;
        console.log('htmmml', html);

        /* END LOOP: for each tag */

      /*}

      /*[DONE] insert HTML of all the links into the tags wrapper */

      /*tagsWrapper.innerHTML = html;
      const links = document.querySelectorAll('.list a');
      console.log('links',links);
      for(let link of links){
        link.addEventListener('click', titleClickHandler);
      }

      /* END LOOP: for every article: */

    }

  };

  generateAuthors();




}

