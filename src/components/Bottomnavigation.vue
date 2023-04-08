<template>
  <div>
    <!-- 底部导航栏目 -->
    <nav class="navbar fixed-bottom navbar-light bg-light">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">
          <i class="fas fa-home"></i>
          <span class="navbar-label">首页</span>
        </router-link>
        <router-link to="/private" class="navbar-brand">
          <i class="fas fa-lock"></i>
          <span class="navbar-label">私享会</span>
        </router-link>
        <router-link to="/message" class="navbar-brand">
          <i class="fas fa-comment"></i>
          <span class="navbar-label">消息</span>
        </router-link>
        <router-link to="/post" class="navbar-brand">
          <i class="fas fa-plus"></i>
          <span class="navbar-label">发布</span>
        </router-link>
        <router-link to="/my" class="navbar-brand">
          <i class="fas fa-user"></i>
          <span class="navbar-label">我的</span>
        </router-link>
      </div>
    </nav>
    <!-- 悬浮底部 -->
    <div style="height: 56px;"></div>
  </div>
</template>

<style>
  .navbar-brand {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #777;
  }
  .navbar-label {
    font-size: 12px;
    margin-top: 2px;
  }
</style>
