<template>
    <div id="posts">
        <h5 v-if="loading">Loading ...</h5>
        <div v-else>
            <div class="title" v-for="(post, index) in posts" :key="index">
                <router-link :to="{name: 'post-show', params: {id: post.id}}">{{post.title}}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { posts } from '@/services/post'
export default {
    name: 'posts',
    data () {
        return {
            posts: [],
            loading: false,
        }
    },
    mounted () {
        this.getAll();
    },
    methods: {
        getAll () {
            this.loading = true;
            posts().then(res => {
                this.posts = (res && res.data) || [];
                this.loading = false;
            })
        }
    }
}
</script>

<style>
    #posts {
        width: 50%;
        margin: auto;
    }
    .title {
        font-size: 20px;
        text-align: left;
        line-height: 30px;
        border-bottom: 1px solid gray;
    }
    .title a {
        text-decoration: none;
    }
</style>
