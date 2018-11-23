<template>
    <div id="api-page">
        <div class="panel">
            <div class="panel-header">
                <Breadcrumb>
                    <BreadcrumbItem to="/">主页</BreadcrumbItem>
                    <BreadcrumbItem>API</BreadcrumbItem>
                </Breadcrumb>
            </div>

            <div class="inner topic">
                <div class="topic-content">
                    <div class="markdown-text">
                        <p class="tip">
                            以下&nbsp;api&nbsp;路径均以&nbsp;<strong><a href="">https://cnodejs.org/api/v1</a></strong>&nbsp;为前缀
                        </p>
                        <h3>主题</h3>
                        <h4>get/topics主题首页</h4>
                        <p>接受get参数</p>
                        <ul>
                            <li>page Number 页数</li>
                            <li>tab String 主题分类。目前有 ask share job good</li>
                            <li>limit Number 每一页的主题数量</li>
                            <li>mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。</li>
                        </ul>
                        <p>示例<a href="">https://cnodejs.org/api/v1</a></p>

                        <h4>post /topics 新建主题</h4>
                        <p>接受post参数</p>
                        <ul>
                            <li>accesstoken String 用户的 accessToken</li>
                            <li>title String 标题</li>
                            <li>tab String 目前有 ask share job dev。开发新客户端的同学，请务必将你们的测试帖发在 dev 专区，以免污染日常的版面，否则会进行封号一周处理。</li>
                            <li>content String 主体内容</li>
                        </ul>
                        <p>示例返回值</p>
                        <pre class="prettyprint">
                            <code>
                                <span class="pun">{</span>
                                <span class="pln">success</span>
                                <span class="pun">:</span>
                                <span class="pln"> </span>
                                <span class="kwd">true</span>
                                <span class="pun">,</span>
                                <span class="pln">topic_id</span>
                                <span class="pun">:</span>
                                <span class="pln"> </span>
                                <span class="str">'543423423423234324'</span>
                                <span class="pun">}</span>
                            </code>
                        </pre>

                        <h3>知识点</h3>
                        <ol>
                            <li>如何获取 accessToken？ 用户登录后，在设置页面可以看到自己的 accessToken。 建议各移动端应用使用手机扫码的形式登录，验证使用 <code>/accesstoken</code> 接口，登录后长期保存 accessToken。</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less">
    @import './apiPage.less';
</style>
