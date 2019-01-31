<template>
  <div class="padding-t-b-15">
    <el-form label-width="80px">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-input v-model="nameOrOrderNumber">
            <el-button slot="append" @click="orderQuery()">订单搜索</el-button>
          </el-input>
        </el-col>
        <el-col :span="6" class="lh32">
          <a href="javascript: void(0)" @click="more()">更多筛选条件 ˇ</a>
        </el-col>
      </el-row>
      <el-row class="margin-t-b-20" v-if="moreMap.show">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="订单类型">
              <el-select v-model="moreMap.type" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="卖家昵称">
              <el-input v-model="moreMap.business"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="成交时间">
              <el-date-picker
                v-model="moreMap.date"
                type="datetimerange"
                :picker-options="pickerOptions2"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                align="right">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="评论状态">
              <el-select v-model="moreMap.commentStatus" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="交易状态">
              <el-select v-model="moreMap.logisticsStatus" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="售后服务">
              <el-select v-model="moreMap.afterSaleService" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-row>
    </el-form>
    <commodityTable :tableData="tableData"></commodityTable>
  </div>
</template>

<script>
import lajjidai from '@/assets/img/lajidai.jpg'
import shuqian10fenhzong from '@/assets/img/shuqian10fenhzong.jpg'
import commodityTable from '../../components/commodityTable/index.vue'
export default {
  name: '',
  components: {
    commodityTable
  },
  data () {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      pickerOptions2: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      value5: '',
      tableData: [
        {
          complete: false,
          business: '欧凯斯旗舰店',
          isVip: true,
          name: '家用垃圾袋一次性手提式塑料袋加厚中号大号卷装宿舍黑色拉圾袋',
          imgUrl: lajjidai,
          orderNumber: '271406767950091110',
          attr: '厚薄：加厚颜色分类：加厚10卷200只平口（全新料）45*50cm混色',
          price: 12.2,
          number: 1,
          money: 12.2,
          freight: 0.01,
          logisticsStatus: 1,
          date: '2019-1-29'
        },
        {
          complete: true,
          business: '立欣图书专营店',
          isVip: false,
          name: '宝宝睡前10分钟好故事大图大字幼儿启蒙读物0-3-6岁亲子读物 宝宝睡前故事书十分 钟让宝宝安然入睡的幼儿睡前故事书',
          imgUrl: shuqian10fenhzong,
          orderNumber: '270742093743091110',
          price: 28,
          number: 1,
          money: 12.2,
          freight: 0.01,
          logisticsStatus: 0,
          date: '2019-1-29'}
      ],
      nameOrOrderNumber: '',
      moreMap: {
        show: false,
        type: '',
        date: '',
        business: '',
        commentStatus: '',
        logisticsStatus: '',
        afterSaleService: ''
      }
    }
  },
  created () {
  },
  methods: {
    more () {
      this.moreMap.show = !this.moreMap.show
    },
    orderQuery () {
      console.log(this.nameOrOrderNumber)
      console.log(this.moreMap)
    }
  },
  mounted () {
  }
}
</script>
