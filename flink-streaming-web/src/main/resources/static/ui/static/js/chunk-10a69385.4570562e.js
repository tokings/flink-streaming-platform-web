(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10a69385"],{9892:function(e,t,r){},b199:function(e,t,r){"use strict";r.d(t,"h",(function(){return s})),r.d(t,"i",(function(){return i})),r.d(t,"c",(function(){return l})),r.d(t,"l",(function(){return c})),r.d(t,"m",(function(){return m})),r.d(t,"k",(function(){return u})),r.d(t,"j",(function(){return f})),r.d(t,"d",(function(){return p})),r.d(t,"e",(function(){return d})),r.d(t,"b",(function(){return b})),r.d(t,"a",(function(){return h})),r.d(t,"f",(function(){return g})),r.d(t,"g",(function(){return y}));var a=r("b775"),o=r("4328"),n=r.n(o);function s(e,t,r,o,s,i,l){return Object(a["a"])({url:"/listTask",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return n.a.stringify(e)}],data:{pageNum:e,pageSize:t,jobName:r,jobId:o,jobType:s,status:i,open:l}})}function i(e){return Object(a["a"])({url:"/open",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return n.a.stringify(e)}],data:{id:e}})}function l(e){return Object(a["a"])({url:"/close",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return n.a.stringify(e)}],data:{id:e}})}function c(e){return Object(a["a"])({url:"/start",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return n.a.stringify(e)}],data:{id:e}})}function m(e){return Object(a["a"])({url:"/stop",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return n.a.stringify(e)}],data:{id:e}})}function u(e,t){return Object(a["a"])({url:"/start",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return n.a.stringify(e)}],data:{id:e,savepointId:t}})}function f(e){return Object(a["a"])({url:"/savepoint",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return n.a.stringify(e)}],data:{id:e}})}function p(e){return Object(a["a"])({url:"/copyConfig",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return n.a.stringify(e)}],data:{id:e}})}function d(e){return Object(a["a"])({url:"/delete",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return n.a.stringify(e)}],data:{id:e}})}function b(e){return Object(a["a"])({url:"/checkfSql",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return n.a.stringify(e)}],data:{flinkSql:e}})}function h(e){return Object(a["a"])({url:"/addConfig",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return n.a.stringify(e)}],data:e})}function g(e){return Object(a["a"])({url:"/editConfig",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return n.a.stringify(e)}],data:e})}function y(e){return Object(a["a"])({url:"/jobConfigHistoryPage",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return n.a.stringify(e)}],data:e})}},d454:function(e,t,r){"use strict";r("9892")},ecb9:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],class:"fl-sqltask-container fl-task-edit"+(e.isReadOnly?" fl-task-edit__isRead":"")},[r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"返回",placement:"right"}},[r("i",{ref:"backbutton",staticClass:"el-icon-d-arrow-left fl-back",on:{click:function(t){return e.handleBack()}}})]),r("el-form",{ref:"taskform",attrs:{model:e.form,rules:e.rules,disabled:e.isReadOnly,"label-width":"80px",size:"small"}},["history"===e.params.flag?r("el-row",[r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{label:"版本号",prop:"version"}},[r("el-input",{model:{value:e.form.version,callback:function(t){e.$set(e.form,"version",t)},expression:"form.version"}})],1)],1),r("el-col",{attrs:{span:14}},[r("el-form-item",{attrs:{label:"备份时间",prop:"createTime","label-width":"100px"}},[r("el-input",{attrs:{value:e.formatDateTime(e.form.createTime)}})],1)],1)],1):e._e(),r("el-row",[r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{label:"任务编号",prop:"id"}},[r("el-input",{attrs:{placeholder:"任务编号",disabled:""},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}})],1)],1),r("el-col",{attrs:{span:14}},[r("el-form-item",{attrs:{label:"运行参数",prop:"flinkRunConfig",required:"YARN_PER"===this.form.deployModeEnum,"label-width":"100px"}},[r("span",{attrs:{slot:"label"},slot:"label"},[e._v("运行参数 "),r("el-popover",{attrs:{placement:"right",trigger:"hover"}},["LOCAL"===e.form.deployModeEnum?[e._v(" 在LOCAL模式下无需配置 ")]:"YARN_PER"===e.form.deployModeEnum?[e._v(" 参数（和Flink官方保持一致）但是只支持 -yD -p -yjm -yn -ytm -ys -yqu(必选)"),r("br"),e._v(" -ys slot个数。"),r("br"),e._v(" -yn task manager 数量。"),r("br"),e._v(" -yjm job manager 的堆内存大小。"),r("br"),e._v(" -ytm task manager 的堆内存大小。"),r("br"),e._v(" -yqu yarn队列明"),r("br"),e._v(" -p 并行度"),r("br"),e._v(" -yD 如:-yD taskmanager.heap.mb=518"),r("br"),e._v(" 详见Flink官方文档"),r("br"),e._v(" 如： -yqu flink -yjm 1024m -ytm 2048m -p 1 -ys 1 ")]:"STANDALONE"===e.form.deployModeEnum?[e._v(" -d,--detached 如果存在，则以分离模式运行作业"),r("br"),e._v(" -p,--parallelism <parallelism> 运行程序的并行性。用于覆盖配置中指定的默认值的可选标志"),r("br"),e._v(" -s,--fromSavepoint <savepointPath> 从savepointPath中恢复任务(如：-s hdfs:///flink/savepoint-1537)"),r("br"),e._v(" 其他运行参数可通过 flink -h查看 ")]:[e._v(" 请选择运行模式 ")],r("i",{staticClass:"el-icon-info",attrs:{slot:"reference"},slot:"reference"})],2)],1),r("el-input",{attrs:{placeholder:"如yarn模式 -yjm 1024m -ytm 1024m -p 1 -yqu streaming"},model:{value:e.form.flinkRunConfig,callback:function(t){e.$set(e.form,"flinkRunConfig",t)},expression:"form.flinkRunConfig"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{label:"任务名称",prop:"jobName"}},[r("el-input",{attrs:{placeholder:"请输入任务名称"},model:{value:e.form.jobName,callback:function(t){e.$set(e.form,"jobName",t)},expression:"form.jobName"}})],1)],1),r("el-col",{attrs:{span:14}},[r("el-form-item",{attrs:{label:"状态保存",prop:"flinkCheckpointConfig","label-width":"100px"}},[r("span",{attrs:{slot:"label"},slot:"label"},[e._v("状态保存 "),r("el-popover",{attrs:{placement:"bottom-start",trigger:"hover"}},[e._v(" 不填默认不开启checkpoint机制，支持如下参数："),r("br"),e._v(" checkpointInterval：整数，默认每60s保存一次checkpoint，单位毫秒"),r("br"),e._v(" checkpointingMode：EXACTLY_ONCE 或者 AT_LEAST_ONCE，一致性模式 默认EXACTLY_ONCE，单位字符"),r("br"),e._v(" checkpointTimeout：6000，默认超时10 minutes，单位毫秒"),r("br"),e._v(" checkpointDir：保存地址 如 hdfs://hcluster/flink/checkpoints/ 注意目录权限"),r("br"),e._v(" tolerableCheckpointFailureNumber：1，设置失败次数 默认一次"),r("br"),e._v(" asynchronousSnapshots：true 或者 false，是否异步"),r("br"),e._v(" externalizedCheckpointCleanup：DELETE_ON_CANCELLATION或者RETAIN_ON_CANCELLATION，作业取消后检查点是否删除（可不填）"),r("br"),e._v(" stateBackendType：0 或者 1 或者 2，默认1 后端状态 0:MemoryStateBackend 1: FsStateBackend 2:RocksDBStateBackend"),r("br"),e._v(" enableIncremental：true 或者 false，是否采用增量 只有在 stateBackendType 2模式下才有效果 即RocksDBStateBackend"),r("br"),e._v(" 如： -stateBackendType 2 -enableIncremental true -checkpointInterval 900000 -checkpointDir hdfs:///flink/checkpoints/hearbeat_to_hive "),r("i",{staticClass:"el-icon-info",attrs:{slot:"reference"},slot:"reference"})])],1),r("el-input",{attrs:{placeholder:"Checkpoint配置，如：-checkpointDir hdfs:///flink/checkpoint/",disabled:!(0===this.form.jobType)},model:{value:e.form.flinkCheckpointConfig,callback:function(t){e.$set(e.form,"flinkCheckpointConfig",t)},expression:"form.flinkCheckpointConfig"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:10}},[r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"任务描述",prop:"jobDesc"}},[r("el-input",{attrs:{placeholder:"请输入任务描述"},model:{value:e.form.jobDesc,callback:function(t){e.$set(e.form,"jobDesc",t)},expression:"form.jobDesc"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"运行模式",prop:"deployModeEnum"}},[r("el-select",{staticClass:"fl-form-item",attrs:{placeholder:"请选择运行模式"},model:{value:e.form.deployModeEnum,callback:function(t){e.$set(e.form,"deployModeEnum",t)},expression:"form.deployModeEnum"}},[r("el-option",{attrs:{label:"Local Cluster",value:"LOCAL"}}),r("el-option",{attrs:{label:"Standalone Cluster",value:"STANDALONE"}}),r("el-option",{attrs:{label:"YARN PER",value:"YARN_PER"}})],1)],1)],1)],1)],1),r("el-col",{attrs:{span:14}},[r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"三方JAR",prop:"extJarPath","label-width":"100px"}},[r("span",{attrs:{slot:"label"},slot:"label"},[e._v("三方JAR "),r("el-popover",{attrs:{placement:"right",trigger:"hover"}},[e._v(" 自定义udf、连接器等jar地址，多个请使用换行(如 http://xxxx.com/udf.jar) 目前只支持http "),r("i",{staticClass:"el-icon-info",attrs:{slot:"reference"},slot:"reference"})])],1),r("el-input",{staticClass:"fl-jar-input",attrs:{type:"textarea",resize:"none",placeholder:"自定义udf、连接器等jar地址，多个请使用换行(如 http://xxxx.com/udf.jar) 目前只支持http"},model:{value:e.form.extJarPath,callback:function(t){e.$set(e.form,"extJarPath",t)},expression:"form.extJarPath"}})],1)],1)],1)],1)],1),r("el-row",{staticClass:"fl-alarm-row"},[r("el-col",{attrs:{xs:16,sm:16,md:14,lg:12}},[r("el-form-item",{attrs:{label:"告警配置",prop:"alarmTypes"}},[r("el-checkbox-group",{model:{value:e.form.alarmTypes,callback:function(t){e.$set(e.form,"alarmTypes",t)},expression:"form.alarmTypes"}},[r("el-checkbox",{attrs:{label:1}},[e._v("钉钉告警")]),r("el-checkbox",{attrs:{label:2}},[e._v("Http回调告警")]),r("el-checkbox",{attrs:{label:3}},[e._v("任务退出自动拉起")])],1)],1)],1),r("el-col",{attrs:{xs:4,sm:4,md:5,lg:6}},[r("el-form-item",{attrs:{label:"开启状态"}},[r("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":"#13ce66",disabled:""},model:{value:e.form.isOpen,callback:function(t){e.$set(e.form,"isOpen",t)},expression:"form.isOpen"}})],1)],1),r("el-col",{attrs:{xs:4,sm:4,md:5,lg:6}},[r("el-form-item",{attrs:{label:"运行状态"}},[-2===e.form.status||"UNKNOWN"===e.form.status?r("el-tag",{attrs:{type:"info",size:"mini"}},[e._v(e._s(e.getStatusDesc(e.form.status)))]):-1===e.form.status||"FAIL"===e.form.status?r("el-tag",{attrs:{type:"danger",size:"mini"}},[e._v(e._s(e.getStatusDesc(e.form.status)))]):0===e.form.status||"STOP"===e.form.status?r("el-tag",{attrs:{type:"warning",size:"mini"}},[e._v(e._s(e.getStatusDesc(e.form.status)))]):1===e.form.status||"RUN"===e.form.status?r("el-tag",{attrs:{type:"success",size:"mini"}},[e._v(e._s(e.getStatusDesc(e.form.status)))]):2===e.form.status||"STARTING"===e.form.status?r("el-tag",{attrs:{size:"mini"}},[e._v(e._s(e.getStatusDesc(e.form.status)))]):3===e.form.status||"SUCCESS"===e.form.status?r("el-tag",{attrs:{type:"success",size:"mini"}},[e._v(e._s(e.getStatusDesc(e.form.status)))]):r("el-tag",{attrs:{type:"info",size:"mini"}},[e._v(e._s(e.getStatusDesc(e.form.status)))])],1)],1)],1),r("el-row",{class:e.getTaskClass()},[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"SQL脚本",prop:"flinkSql"}},[r("codemirror",{ref:"cm",staticClass:"fl-codemirror",attrs:{value:e.form.flinkSql,options:e.cmOptions},on:{changes:e.doSqlChange}})],1)],1)],1),!1===e.isReadOnly?r("el-row",{staticClass:"fl-button-row"},[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:""}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitTask()}}},[e._v("提 交")]),r("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){return e.formatSQL()}}},[e._v("格式化代码")]),r("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){return e.checkSQL()}}},[e._v("SQL预校验")]),r("el-popover",{attrs:{placement:"top-start",trigger:"hover"}},[e._v(" SQL预校验"),r("br"),e._v(" 备注：只能校验单个sql语法正确与否, 不能校验上下文之间关系，如：这张表是否存在、数据类型是否正确等无法校验"),r("br"),e._v(" 总之不能完全保证运行的时候sql没有异常，只是能校验出一些语法错误 "),r("i",{staticClass:"el-icon-info",attrs:{slot:"reference"},slot:"reference"})]),r("el-button",{staticStyle:{color:"#13ce66"},attrs:{type:"text"}},[e._v(e._s(e.form.checkSQLResult))])],1)],1)],1):e._e()],1)],1)},o=[],n=(r("498a"),r("ac1f"),r("5319"),r("a15b"),r("8f94")),s=(r("a7be"),r("f6b6"),r("9b74"),r("9603"),r("ffda"),r("991c"),r("8c33"),r("31c5"),r("ba14"),r("b199")),i={name:"SQLTask",components:{codemirror:n["codemirror"]},data:function(){var e=this,t=function(t,r,a){return"YARN_PER"!==e.form.deployModeEnum||r&&""!==r.trim()?a():a(new Error("请选择运行参数"))};return{loading:!1,params:{flag:"",data:{},context:""},isReadOnly:!1,form:{id:"",jobName:"",jobDesc:"",jobType:0,deployModeEnum:"",flinkRunConfig:"",flinkCheckpointConfig:"",flinkSql:"",alarmTypes:[],extJarPath:"",isOpen:"",status:"",checkSQLResult:"",version:"",createTime:""},rules:{jobName:[{required:!0,message:"请输入任务名称",trigger:"blur"}],jobDesc:[{required:!0,message:"请输入任务描述",trigger:"blur"}],deployModeEnum:[{required:!0,message:"请选择运行模式",trigger:"blur"}],flinkSql:[{required:!0,message:"请输入SQL脚本",trigger:"blur"}],flinkRunConfig:[{validator:t,trigger:"blur"}]},cmOptions:{value:"",mode:"text/x-mysql",theme:"mbo",readOnly:!1,tabSize:4,line:!0,lineNumbers:!0,indentUnit:4,matchBrackets:!0,extraKeys:{Ctrl:"autocomplete"},hintOptions:{completeSingle:!1,tables:{"table.dynamic-table-options.enabled":[],"table.sql-dialect":[],"table.local-time-zone":[],"table.generated-code.max-length":[],"table.exec":["state.ttl","source.idle-timeout","source.cdc-events-duplicate","window-agg.buffer-size-limit","source.cdc-events-duplicate","mini-batch.enabled","mini-batch.allow-latency","mini-batch.enabled","mini-batch.allow-latency","mini-batch.size","sink.not-null-enforcer","resource.default-parallelism","async-lookup.buffer-capacity","async-lookup.timeout"],"table.optimizer":["distinct-agg.split.enabled","distinct-agg.split.bucket-num","agg-phase-strategy","reuse-sub-plan-enabled","reuse-source-enabled","source.predicate-pushdown-enabled","join-reorder-enabled"]}}}}},mounted:function(){var e=this.$route.params;this.params.flag=e.flag,this.params.context=e.context,this.params.data=e.data,this.isReadOnly=!("create"===e.flag||"update"===e.flag),this.cmOptions.readOnly=this.isReadOnly;var t=e.data;this.form.id=t.id?t.id:"",this.form.jobName=t.jobName?t.jobName:"",this.form.jobDesc=t.jobDesc?t.jobDesc:"",this.form.jobType=t.jobTypeEnum?this.getJobType(t.jobTypeEnum):0,this.form.deployModeEnum=t.deployModeEnum?t.deployModeEnum:"",this.form.flinkRunConfig=t.flinkRunConfig?t.flinkRunConfig:"",this.form.flinkCheckpointConfig=t.flinkCheckpointConfig?t.flinkCheckpointConfig:"",this.form.flinkSql=t.flinkSql?t.flinkSql:"",this.form.alarmTypes=t.alarmTypes?t.alarmTypes:[],this.form.extJarPath=t.extJarPath?t.extJarPath:"",this.form.isOpen=t.isOpen?t.isOpen:"",this.form.status=t.status?t.status:"",this.form.version=t.version?t.version:"",this.form.createTime=t.createTime?t.createTime:"",this.$refs.cm.codemirror.on("keypress",(function(e){e.showHint()}))},methods:{handleBack:function(){var e="history"===this.params.flag?"HistoryTask":"FlinkTaskManage";this.$router.replace({name:e,params:this.params.context})},submitTask:function(){var e=this;this.form.flinkSql=this.$refs.cm.codemirror.getValue(),this.$refs.taskform.validate((function(t){if(!t)return!1;var r=e.form.jobName,a=e.form.alarmTypes.join(","),o={id:e.form.id,jobName:r,jobDesc:e.form.jobDesc,deployMode:e.form.deployModeEnum,flinkRunConfig:e.form.flinkRunConfig,flinkCheckpointConfig:e.form.flinkCheckpointConfig,flinkSql:e.form.flinkSql,jobType:e.form.jobType,alarmTypes:a,extJarPath:e.form.extJarPath};o.id||"create"!==e.params.flag?o.id&&"update"===e.params.flag&&Object(s["f"])(o).then((function(t){e.loading=!1;var a=t.code,o=(t.data,t.success),n=t.message;"200"===a&&o?(e.$message({type:"success",message:"修改任务[".concat(r,"]成功！")}),e.$refs.backbutton.click()):e.$message({type:"error",message:n||"请求数据异常！"})})).catch((function(t){e.loading=!1,e.$message({type:"error",message:"请求异常！"}),console.log(t)})):Object(s["a"])(o).then((function(t){e.loading=!1;var a=t.code,o=(t.data,t.success),n=t.message;"200"===a&&o?(e.$message({type:"success",message:"新增任务[".concat(r,"]成功！")}),e.$refs.backbutton.click()):e.$message({type:"error",message:n||"请求数据异常！"})})).catch((function(t){e.loading=!1,e.$message({type:"error",message:"请求异常！"}),console.log(t)}))}))},formatSQL:function(){var e=this.$refs.cm.codemirror;n["CodeMirror"].commands["selectAll"](e);var t={from:e.getCursor(!0),to:e.getCursor(!1)};e.autoFormatRange(t.from,t.to)},checkSQL:function(){var e=this;this.loading=!0;var t=this.$refs.cm.codemirror.getValue();Object(s["b"])(t).then((function(t){e.loading=!1;var r=t.code,a=t.success,o=t.message;t.data;"200"===r&&a?(e.form.checkSQLResult="校验SQL通过!",e.$message({type:"success",message:"校验SQL通过！"})):e.$message({type:"error",message:o||"请求数据异常！"})})).catch((function(t){e.loading=!1,e.$message({type:"error",message:"请求异常！"}),console.log(t)}))},doSqlChange:function(e){this.form.checkSQLResult=""},getTaskClass:function(){return"history"===this.params.flag?"fl-task-edit__history":this.isReadOnly?"fl-cm-row__isRead":""},formatDateTime:function(e){return this.dayjs(e).format("YYYY-MM-DD HH:mm:ss")},getStatusDesc:function(e){switch(e){case-2:return"未知";case-1:return"失败";case 0:return"停止";case 1:return"运行中";case 2:return"启动中";case 3:return"提交成功";case"UNKNOWN":return"未知";case"FAIL":return"失败";case"STOP":return"停止";case"RUN":return"运行中";case"STARTING":return"启动中";case"SUCCESS":return"提交成功";default:return e+"　"}},getJobType:function(e){switch(e){case"SQL_STREAMING":return 0;case"SQL_BATCH":return 2;case"JAR":return 1;default:return e}}}},l=i,c=(r("d454"),r("2877")),m=Object(c["a"])(l,a,o,!1,null,"549d2e81",null);t["default"]=m.exports}}]);