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
      <table cellspacing="0" style="width: 100%;" class="c-table margin-t-b-10"
             v-for="(item, index) in tableData" :class="item.complete ? 'c-table-true': 'c-table-false'" :key="index">
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
            <el-row>
              <el-col :span="3">
                <el-checkbox v-model="item.choose">
                  <span>{{item.date}}</span>
                </el-checkbox>
              </el-col>
              <el-col :span="6">
                <span class="margin-l-r-15">订单号：{{item.orderNumber}}</span>
              </el-col>
              <el-col :span="3" style="overflow-x: hidden">
                <div style="width: 100%;min-width:150px;overflow:hidden;white-space:nowrap;text-overflow: ellipsis;" :title="item.business">
                  <span>{{item.business}}</span>
                </div>
              </el-col>
              <el-col :span="3">
                <a href="javascript: void(0)">联系店家</a>
              </el-col>
            </el-row>
          </td>
        </tr>
        <tr>
          <td style="text-align: left;" class="padding20-25 border-b">
            <el-row>
              <el-col :span="8">
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
               <span v-if="item.logisticsStatus == 0">
              快件已签收
            </span>
              <span v-if="item.logisticsStatus == 1">
              物流运输中
            </span>
            </div>
            <div>
              <a href="javascript: void(0)">订单详情</a>
            </div>
          </td>
          <td class="border-b div-margin-t-b-5">
            <div v-if="!item.complete">
              <div>
                <span>还剩7天20时</span>
              </div>
              <div>
                <el-button type="primary">确认收货</el-button>
              </div>
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
export default {
  name: 'commodityTable',
  props: {
    tableData: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {},
  mounted () {
  }
}
</script>
