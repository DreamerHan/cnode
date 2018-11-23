<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1"
                    @on-select="choseMenu"
                >
                    <div class="layout-logo">这里是logo</div>
                    <div class="layout-nav">
                        <MenuItem 
                            :name="item.name" 
                            v-for="item of menu"
                            :key="item.name"
                        >{{item.title}}</MenuItem>
                    </div>
                </Menu>
            </Header>
            <Content>
                <sidebar></sidebar>
                <div id="content">
                    <router-view></router-view>   
                </div>
            </Content>
            <pageFoot></pageFoot>
        </Layout>
    </div>
</template>
<script>
import sidebar from '@/views/sidebar'
import pageFoot from '@/views/pageFoot'
import menu from '@/api/menu.js'

export default {
    components : { sidebar, pageFoot },
    data(){
        return {
            menu
        }
    },
    methods : {
        choseMenu(name){
            this.$router.push({
                name : name
            });
        }
    }
}
</script>
<style>
    @import './index.css';
</style>
