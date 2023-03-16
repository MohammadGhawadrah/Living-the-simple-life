import React from 'react'
import "./styles.css"

import HeaderTitle from '../HeaderTitle';
import ArticleImage from '../ArticleImage';

import ArticleBody from '../ArticleBody';
import ArticleReadMore from '../ArticleReadMore';
import ArticleInfo from '../ArticleInfo';
function ArticleRecent() {
    return (
        <div>
            <article class="article-recent">
                <div className="article-recent-main">
                    <HeaderTitle />
                    <ArticleBody />
                    <ArticleReadMore />
                </div>
                <div class="article-recent-secondary">
                    <ArticleImage />
                    <ArticleInfo />
                </div>
            </article>
        </div>
    )
}

export default ArticleRecent
