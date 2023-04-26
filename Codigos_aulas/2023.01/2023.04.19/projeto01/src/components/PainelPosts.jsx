import { Fragment } from "react"
import Post from "./Post"
import posts from '../js/posts.js'

export default function PainelPosts() {
      
    function getPosts() {
        return (
            posts.map(obj => <Post titulo={obj.titulo} txt={obj.texto} autor={obj.autor} />)     
        )
    }

    return (
        <section>
            {getPosts()}
            {/* <Post titulo="titulo 1" txt="ola" autor="wilton"/>
            <Post autor="wilton"/> */}
        </section>
    )
}