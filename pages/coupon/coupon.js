
Page({
    data:{
      title: "标题"
    },
    foo:function() {
        console.log("点击了")
    },
    sayHi: function(){
        console.log("获得了焦点")
    },
    sayBye: function(){
        console.log("失去了焦点")
    },
    a:function(){
        console.log("外面的盒子")
    },
    b:function(){
        console.log("里面的盒子")
    },
    clickMe:function(){
      console.log("点了")
    },
    title:function(res){
      console.log(res);
      // dataset用来接收自定义属性的，也就是data-title data-id..之类的
      // 以data-开头的数据
      // 它的作用：可以实现界面向逻辑层传递数据的一种方式
      console.log(res.target.dataset);
    },

    // 为事件
    get: function(){
      console.log("get")
    },
    lost: function(){
      console.log("lost")
    }
});