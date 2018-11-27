<template>
    <div id="login">
        <div class="panel">
            <div class="panel-header">
                <Breadcrumb>
                    <BreadcrumbItem to="/">主页</BreadcrumbItem>
                    <BreadcrumbItem>登陆</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div class="inner">
                <div class="signIn-form">
                    <div class="Inp-line">
                        <label for="name" class="Inp-label">用户名</label>
                        <div class="Inp-area">
                            <input type="text" name="name">
                        </div>
                    </div>
                    <div class="Inp-line">
                        <label for="password" class="Inp-label">密码</label>
                        <div class="Inp-area">
                            <input type="password" name="password">
                        </div>
                    </div>
                    
                    <div class="form-actions">
                        <input type="submit" class="submit-btn" value="登陆">
                        <a id="forget-password" href="">忘记密码了？</a>
                    </div>
                </div>

            </div>
            
        </div>
    </div>
</template>
<style lang="less">
    @import './login.less';
</style>


