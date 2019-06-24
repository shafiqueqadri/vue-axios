<template>
    <div id="posts">
        <h5 v-if="loading">Loading ...</h5>
        <div v-else>
            <div class="title">{{post.title | capitalize}}</div>
            <div id="description">
                {{post.body | capitalize}}
            </div>
            <button @click="$router.back()">Go Back</button>
        </div>
    </div>
</template>

<script>
import { show } from '@/services/post'
export default {
    name: 'posts',
    data () {
        return {
            post: [],
            loading: false,
        }
    },
    mounted () {
        console.log(this.API$);
        
        this.getPost();
        
    },
    methods: {
        getPost () {
            this.loading = true;
            show(this.$route.params.id).then(res => {
                this.post = (res && res.data) || [];
                this.loading = false;
            })
        }
    }
}
</script>

<style scoped>
    #posts {
        width: 50%;
        margin: auto;
    }
    .title {
        font-size: 20px;
        text-align: left;
        line-height: 30px;
        margin-top: 50px;
        margin-bottom: 50px;
    }
    #description {
        text-align: justify;
    }
</style>
