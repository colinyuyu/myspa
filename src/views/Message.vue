<template>
  <div>
    <div class="title">消息</div>
    <div class="menu">
      <div class="menu-item" @click="goToPage('SystemNotification')">
        <img class="icon" src="@/assets/ico.png" alt="">
        <div class="text">
          <div class="type">系统通知</div>
          <div class="content">{{ systemMessage }}</div>
        </div>
      </div>
      <div class="menu-item" @click="goToPage('LatestActivity')">
        <img class="icon" src="@/assets/ico.png" alt="">
        <div class="text">
          <div class="type">最新活动</div>
          <div class="content">{{ activityMessage }}</div>
        </div>
      </div>
      <div class="menu-item" @click="goToPage('CustomerService')">
        <img class="icon" src="@/assets/ico.png" alt="">
        <div class="text">
          <div class="type">客服消息</div>
          <div class="content">在线客服</div>
        </div>
      </div>
    </div>
    <Bottomnavigation />
  </div>
</template>


<script>
import Bottomnavigation from "@/components/Bottomnavigation.vue";
import { useRouter } from "vue-router";

export default {
  name: "Message",
  components: {
    Bottomnavigation
  },
  data() {
    return {
      systemMessage: "您有一条新的系统消息",
      activityMessage: "您有一个新的最新活动"
    };
  },
  setup() {
    const router = useRouter();
    return {
      goToPage
    };

    function goToPage(name) {
      router.push({ name });
    }
  }
};
</script>


<style scoped>
.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

.menu {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 15px 0;
  cursor: pointer;
  border-bottom: 1px solid #eaeaea;
}

.menu-item:last-child {
  border-bottom: none;
}

.menu-item .icon {
  width: 40px;
  margin-right: 20px;
  border-radius: 50%;
  background-color: #007bff;
  padding: 8px;
  box-sizing: border-box;
  color: #ffffff;
}

.text {
  display: flex;
  flex-direction: column;
}

.type {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

.content {
  font-size: 14px;
  color: #999;
}
</style>
