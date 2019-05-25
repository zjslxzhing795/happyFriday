<template>
  <div>
    <header class="top_tips">
      <span class="num_tip">题目{{itemNum}}</span>   <!--右上角题目n-->
    </header>
    <div>
      <div v-if="itemDetails.length>0"><!--如果某个题目状态为active则显示-->
        <header>{{itemDetails[itemNum-1].topic_name}}</header>
        <ul><!--遍历这个题目的选项，并展示-->
          <li v-for="(item,index) in itemDetails[itemNum-1].topic_answer" @click="choosed(index,item.topic_answer_id)">
            <span v-bind:class="{'has_choosed':choosedNum==index}">{{chooseType(index)}}</span>
            <span>{{item.answer_name}}</span>
          </li>
        </ul>
      </div>

      <div @click="nextItem" v-if="itemNum<itemDetails.length"></div>
      <span v-else @click="submitAnswer"></span>
      <!--下一题按钮，该函数首先检查是否有选项被选中，否，则alert提示，
  是，则该条目active为否，记下该题答案是否正确并执行分数相加，下一题active打开，若为最后一题，则此处按钮变成提交按钮-->
    </div>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    name: 'Item',
    data() {
      return {
        itemId: null,
        choosedNum: null,
        choosedId: null
      }
    },
    computed: mapState([
      'itemNum', //第几题
      'level', //第几周
      'itemDetail', //题目详情
      'timer', //计时器
    ]),
    methods: {
      ...mapActions([
        'addNum', 'initializeData'
      ]),
      nextItem() {
        if (this.choosedNum !== null) {
          this.choosedNum = null;
          this.addNum(this.choosedId);
        } else {
          alert('您还没有选择答案哦')
        }
      },
      chooseType: type => {
        switch (type) {
          case 0:
            return 'A';
          case 1:
            return 'B';
          case 2:
            return 'C';
          case 3:
            return 'D';
        }
      },
      choosed(type, id) {
        this.choosedNum = type;
        this.choosedId = id;
      },
      submitAnswer() {
        if (this.choosedNum !== null) {
          this.addNum(this.choosedId);
          clearInterval(this.timer);
          this.$router.push('score');
        } else {
        }
      }
    },
    created() {
      //初始化信息
      if (this.fatherComponent == 'App') {
        this.initializeData();
        document.body.style.backgroundImage = 'url(./static/img/1-1.jpg)';
      }
    }
  }
</script>

<style scoped>
  .top_tips {
    position: absolute;
    height: 7.35rem;
    width: 3.25rem;
    top: -1.3rem;
    right: 1.6rem;
    background: url(../assets/WechatIMG2.png) no-repeat;
    background-size: 100% 100%;
    z-index: 10;
  }

  .num_tip {
    position: absolute;
    left: 0.48rem;
    bottom: 1.1rem;
    height: 0.7rem;
    width: 2.5rem;
    font-size: 0.6rem;
    font-family: '黑体';
    font-weight: 600;
    color: #a57c50;
    text-align: center;
  }
</style>
