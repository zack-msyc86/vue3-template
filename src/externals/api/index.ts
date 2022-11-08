import { Post } from "@/types/Post";
import axios from "./axios";

export function createPost(post: Post){
  return axios.post("createPost", post)
}

export function getPosts(){
  return axios.post("getPosts")
}

export function favorites(id: number){
  return axios.post("favorites", {id})
}