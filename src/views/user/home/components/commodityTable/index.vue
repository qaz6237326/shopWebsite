<template>
    <div>
      <el-table :data="tableData" class="c-table">
        <el-table-column label="商品" align="center">
          <template slot-scope="scope">
            <div>
              <el-checkbox v-model="scope.row.choose">
                <span>{{scope.row.date}}</span>
              </el-checkbox>
            </div>
            <img src="../../../../../assets/img/lajidai.jpg">
            <span>{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column label="单价" align="center">
          <template slot-scope="scope">
            <div>{{scope.row.price}}</div>
          </template>
        </el-table-column>
        <el-table-column label="数量" align="center">
          <template slot-scope="scope">
            <span>{{scope.row.number}}</span>
          </template>
        </el-table-column>
        <el-table-column label="商品操作" align="center">
          <template slot-scope="scope">
            <span>{{scope.row.commodityOperation}}</span>
          </template>
        </el-table-column>
        <el-table-column label="实付款" align="center">
          <template slot-scope="scope">
            <div class="text-center">
              <span>{{scope.row.money}}</span>
              <div>（含运费{{scope.row.freight}}）</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="交易状态" align="center">
          <template slot-scope="scope">
            <div>
               <span v-if="scope.row.logisitcsStatus == 0">
              快件已签收
            </span>
              <span v-if="scope.row.logisitcsStatus == 1">
              物流运输中
            </span>
            </div>
           <div>
             <a href="javascript: void(0)">订单详情</a>
           </div>
          </template>
        </el-table-column>
        <el-table-column label="交易操作" align="center">
          <template slot-scope="scope">
            <div>
              <span>还剩7天20时</span>
            </div>
            <div>
              <el-button type="primary">确认收货</el-button>
            </div>
            <div>
              <a href="javascript: void(0)">申请开票</a>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
export default {
  name: 'commodityTable',
  data () {
    return {
      tableData: [
        {name: '爆米花', price: 12.2, number: 1, money: 12.2, freight: 0, logisitcsStatus: 0, date: '2019-1-29'}
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
