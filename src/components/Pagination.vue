<template>

<div class="pagination">
  <button @click="firstPage">首页</button>
  <button @click="prevPage">上一页</button>
  <button  @click="thisPage($event,item)" v-for="item of btnPages" :class="[{'activePage':item==currentPage},'btnPage']">
    <!-- $event事件对象，记得要加$ -->
    {{item}}
    </button>
  <button @click="nextPage">下一页</button>

</div>
</template>

<script>
export default {

  data(){
    return {
      btnPages:[1,2,3,4,5,],
      currentPage:1,
    }
  },
  methods:{
    firstPage(){
      this.currentPage=1;
      this.btnPages=[1,2,3,4,5];
      this.$emit('change',this.currentPage)
    },
    prevPage(){
      this.currentPage=this.currentPage==1?1:this.currentPage-1;
      if(this.currentPage==this.btnPages[0]&&this.currentPage!=1){
        this.addFirstPage();

      }
      this.$emit('change',this.currentPage)
    },
    nextPage(){
      this.currentPage++;
      if(this.currentPage==this.btnPages[4]){
        this.addLastPage();

      }
      this.$emit('change',this.currentPage)
    },
    thisPage(event,index){
      if(index==this.btnPages[4]){
        this.addLastPage();

      }
      if(index==this.btnPages[0] && index!=1){
        this.addFirstPage()

      }
      this.currentPage = index;
       this.$emit('change',this.currentPage)
    },
    addLastPage(){
      this.btnPages.shift();
        this.btnPages.splice(4,0,this.btnPages[3]+1)
    },
    addFirstPage(){
      this.btnPages.splice(4,1);
        this.btnPages.unshift(this.btnPages[0]-1)
    }
  }
}
</script>

<style scoped>
  .pagination{
    background-color:#fff;
    padding:10px;
    border:1px solid #f0f0f0;
    margin:10px 0;
    border-radius:5px;
  }
  button{
    width:60px;
    background-color:#fff;
    border-style:none;
    border:1px solid #000;
    height:30px;
    line-height:30px;
    border-radius:5px;
    margin:0;
  }
  .btnPage{
    margin:0 3px;
  }
  .activePage{
    background-color:#000;
    color:#fff;
  }
  @media (max-width:680px){
    .btnPage{
      margin:5px 2px;;
    }
  }
</style>
