<style scoped>
    footer {height: 150px}

    footer > div:first-child {
        font-size: 14px;
        color: #C8C8C8;
        height: 80%;
        display: flex;
        justify-content: space-around;
    }

    footer > div:first-child > div {
        width: 33%;
    }

    .foot1 {
        padding-left: 18px;
        padding-top: 18px;
    }

    .foot1 > p {
        margin: 0;
        font-size: 14px;
    }

    .foot1 > p:first-child {
        font-family: WaltDisneyScript, sans-serif;
        font-size: 35px;
        line-height: 0;
        color: #D2D2D2;
    }

    .foot1 > p:last-child {
        margin-top: 30px;
    }

    .foot2 {
        padding-top: 18px;
        padding-left: 80px;
        font-size: 15px;
    }

    .foot2 > div {
        padding-left: 64px;
        padding-top: 3px;
    }

    .foot2 a {
        display: inline-block;
        width: 35%;
        color: #D2D2D2;
        margin-bottom: 3px;
        margin-right: 10px;
    }

    .foot2 a:hover {
        color: white;
    }

    .foot3 {
        padding-top: 18px;
        padding-left: 80px;
        font-size: 15px;
    }

    .foot3 > div {
        padding-left: 64px;
        padding-top: 3px;
    }

    .foot3 a {
        display: inline-block;
        width: 80%;
        color: #D2D2D2;
        margin-bottom: 3px;
    }

    .foot3 a:hover {
        color: white;
    }

    footer > div:last-child {
        font-size: 14px;
        color: #C8C8C8;
        height: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(#323232, #323232) no-repeat top/100% 1px;
    }

    footer > div a {
        font-size: 14px;
        color: #E6E6E6;
        text-decoration: none;
        margin-top: -3px;
    }
</style>
<template>
    <footer class="black-bg cursor-default">
        <div>
            <div class="foot1">
                <p>gracly</p>
                <p>PWA渐进式框架，构建高性能Web应用</p>
            </div>
            <div class="foot2">
                友情链接：
                <div>
                    <a v-for="i in friendLink" :href=i.href target="view_window">{{i.name}}</a>
                </div>
            </div>
            <div class="foot3">
                联系我们:
                <div>
                    <a v-for="i in connection" :href=i.href target="view_window">{{i.name}}</a>
                </div>
            </div>
        </div>
        <div>
            © 2018&nbsp;&nbsp;<router-link to="/">gracly.com</router-link>&nbsp;&nbsp;MIT
        </div>
    </footer>
</template>

<script>
    export default {
        data: () => {
            return {
                friendLink: [
                    {href: "http://www.alloyteam.com", name: "AlloyTeam"},
                    {href: "http://taobaofed.org", name: "淘宝 FED"},
                    {href: "http://fex.baidu.com", name: "百度 FEX"},
                    {href: "http://babeljs.io", name: "Babel"},
                    {href: "http://webpack.github.io", name: "Webpack"}
                ],
                connection: [
                    {href: "mailto:liujianhuajs@gmail.com", name: "电子邮箱"},
                    {href: "https://github.com/1769908045/gracly", name: "GitHub"}
                ]
            }
        }
    }
</script>