<template>
    <div id="home">
        <div class="panel">
            <div class="panel-header">
                <a href="" class="tab tab-current">全部</a>
                <a href="" class="tab">精华</a>
                <a href="" class="tab">分享</a>
                <a href="" class="tab">问答</a>
                <a href="" class="tab">招聘</a>
                <a href="" class="tab">客户端测试</a>
            </div>
            <div class="inner">
                <div class="topic-list">
                    <cell v-for="item of 3" :key="item"></cell>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import cell from './cell.vue';

export default {
    components : { cell },
    data(){
        return {

        }
    }  
}
</script>
<style lang="less">
    @import './home.less';
</style>


