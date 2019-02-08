import { FETCH_POSTS, NEW_POST, DELETE_POST } from "./types";

export const fetchPosts = () => dispatch => {
  dispatch({
    type: FETCH_POSTS,
    payload: [
      {
        id: 3837,
        title: "Restful API /w NodeJS",
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: `https://picsum.photos/200/150?image=${Math.floor(
          Math.random() * 50
        ) + 1}`
      },
      {
        id: 343,
        title: "JWT Authentication - Security",
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: `https://picsum.photos/200/150?image=${Math.floor(
          Math.random() * 50
        ) + 1}`
      },
      {
        id: 12,
        title: "Management State /w Redux",
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: `https://picsum.photos/200/150?image=${Math.floor(
          Math.random() * 50
        ) + 1}`
      },
      {
        id: 33,
        title: "Authorization, User Role",
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: `https://picsum.photos/200/150?image=${Math.floor(
          Math.random() * 50
        ) + 1}`
      }
    ]
  });
};

export const newPost = (data) => dispatch => {  
  dispatch({
    type: NEW_POST,
    payload: data
  })
}

export const deletePost = (contents, id) => dispatch => {
  
  let data = contents.filter((content) => {
    return content.id !== id
  })

  dispatch({
    type: DELETE_POST,
    payload: data
  })
}
