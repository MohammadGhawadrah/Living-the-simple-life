import React from 'react'
import "./styles.css"
import ArticleInfo from '../ArticleInfo';
import ArticleBody from '../ArticleBody';
import ArticleReadMore from '../ArticleReadMore';
import HeaderTitle from '../HeaderTitle';
import ArticleImage from '../ArticleImage';
import ArticleRecent from '../ArticleRecent';
import WidgetTitle from '../WidgetTitle';
import WidgetRecentPost from '../WidgetRecentPost';
import WidgetImage from '../WidgetImage';
function MainItem() {
    return (
        <div>
            <div class="container cotainer-flex">
                <main role="main">

                    <article class="article-featured">
                        <ArticleImage />
                        <HeaderTitle />

                        <ArticleInfo />
                        <ArticleBody />
                        <ArticleReadMore />
                    </article>

                    <ArticleRecent />

                    <ArticleRecent />
                    <ArticleRecent />
                </main>

                <aside class="sidebar">
                    <div class="sidebar-widget">
                        <WidgetTitle />About me

                        <WidgetImage />
                        <p class="widget-body">I find life better, and I'm happier,
                            when things are nice and simple.</p>
                    </div>

                    <div class="sidebar-widget">
                        <WidgetTitle />RECENT POST

                        <WidgetRecentPost />



                        <WidgetTitle />
                        <WidgetRecentPost />


                        <WidgetTitle />
                        <WidgetRecentPost />
                    </div>
                </aside>
            </div>
        </div>
    )
}

export default MainItem
