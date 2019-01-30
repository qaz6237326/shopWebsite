<template>
    <div class="padding-t-b-20">
      <table style="width: 100%;" class="c-tale-title">
        <colgroup>
          <col width="30%">
          <col width="13%">
          <col width="5%">
          <col width="10%">
          <col width="10%">
          <col width="10%">
          <col width="15%">
        </colgroup>
        <thead>
        <tr>
          <th>商品</th>
          <th>单价</th>
          <th>数量</th>
          <th>商品操作</th>
          <th>实付款</th>
          <th>交易状态</th>
          <th>交易操作</th>
        </tr>
        </thead>
      </table>
      <table cellspacing="0" style="width: 100%;" class="c-table margin-t-b-10" v-for="(item, index) in tableData" :key="index">
        <colgroup>
          <col width="30%">
          <col width="13%">
          <col width="5%">
          <col width="10%">
          <col width="10%">
          <col width="10%">
          <col width="15%">
        </colgroup>
        <tbody class="td-center">
        <tr>
          <td colspan="7" class="item-head border-b" style="text-align: left;">
            <el-checkbox v-model="item.choose">
              <span>{{item.date}}</span>
            </el-checkbox>
            <span class="margin-l-r-15">
              订单号：{{item.orderNumber}}
            </span>
          </td>
        </tr>
        <tr>
          <td style="text-align: left;" class="padding20-25 border-b">
            <el-row>
              <el-col :span="8">
               <!-- <img src="../../../../../assets/img/lajidai.jpg">-->
                <img :src="item.imgUrl">
              </el-col>
              <el-col :span="16">
                <div>
                  <a target="_blank" :href="'http://localhost:8080/userHome?name=' + item.name">{{item.name}}</a>
                </div>
                <div class="margin-t-b-5">
                  <span class="font-e9">{{item.attr}}</span>
                </div>
              </el-col>
            </el-row>
          </td>
          <td class="border-b"><div><span>{{item.price}}</span></div></td>
          <td class="border-b"><div><span>{{item.number}}</span></div></td>
          <td class="border-b border-r"><div><span>{{item.number}}</span></div></td>
          <td class="border-r border-b">
            <div><span class="fontStrong">¥ {{item.money}}</span></div>
            <div><span class="font-6c">（含运费： ¥ {{item.freight}}）</span></div>
          </td>
          <td class="border-r border-b">
            <div>
               <span v-if="item.logisitcsStatus == 0">
              快件已签收
            </span>
              <span v-if="item.logisitcsStatus == 1">
              物流运输中
            </span>
            </div>
            <div>
              <a href="javascript: void(0)">订单详情</a>
            </div>
          </td>
          <td class="border-b div-margin-t-b-5">
            <div>
              <span>还剩7天20时</span>
            </div>
            <div>
              <el-button type="primary">确认收货</el-button>
            </div>
            <div>
              <a href="javascript: void(0)">申请开票</a>
            </div>
          </td>
        </tr>
        <tr class="item-foot">
          <td>保险服务</td>
          <td>¥ 0.00</td>
          <td></td>
          <td class="border-r"></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
import lajjidai from '@/assets/img/lajidai.jpg'
import shuqian10fenhzong from '@/assets/img/shuqian10fenhzong.jpg'
export default {
  name: 'commodityTable',
  data () {
    return {
      tableData: [
        {
          name: '家用垃圾袋一次性手提式塑料袋加厚中号大号卷装宿舍黑色拉圾袋',
          imgUrl: lajjidai,
          orderNumber: '271406767950091110',
          attr: '厚薄：加厚颜色分类：加厚10卷200只平口（全新料）45*50cm混色',
          price: 12.2,
          number: 1,
          money: 12.2,
          freight: 0.01,
          logisitcsStatus: 0,
          date: '2019-1-29'},
        {
          name: '宝宝睡前10分钟好故事大图大字幼儿启蒙读物0-3-6岁亲子读物 宝宝睡前故事书十分 钟让宝宝安然入睡的幼儿睡前故事书',
          imgUrl: shuqian10fenhzong,
          orderNumber: '270742093743091110',
          price: 28,
          number: 1,
          money: 12.2,
          freight: 0.01,
          logisitcsStatus: 0,
          date: '2019-1-29'}
      ]
    }
  },
  created () {
  },
  methods: {},
  mounted () {
  }
}
</script>
