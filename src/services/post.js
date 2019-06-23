import * as http from './http'

/**
 * Get All Posts
 * @Response {Promise}
 */
export const posts = () => http.get('posts');

/**
 * Show Single post
 */
export const show = (id) => http.get(`posts/${id}`);